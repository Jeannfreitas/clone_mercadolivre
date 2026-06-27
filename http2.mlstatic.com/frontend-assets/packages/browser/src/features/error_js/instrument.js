/* eslint-disable no-underscore-dangle,@typescript-eslint/no-unnecessary-boolean-literal-compare */
import { Instrument as InstrumentBase } from "../../bases/instrument";
import { FEATURE_NAME } from "./constants";
import { getWMANS, globalScope } from "../../window/browser";
import { Aggregator } from "./aggregator";
import {
  identifyErrorSource,
  ERROR_SOURCES,
  getCurrentDomain,
} from "../../utils/error-source";
import { tracker } from "../../utils/tracker";
import { isInternalError } from "../index";
import { isNil } from "../../utils/conditionals";
import { onPopstateChange } from "../../utils/lifecycle-events";
import { onPageHide } from "../../utils/on-page-hide";
import { METRICS } from "../../metrics/constants";

const WMANS = getWMANS();

const WM_URL = "https://http2.mlstatic.com/frontend-assets/web-monitoring/";

function filterWMFrames(stack) {
  if (!stack) {
    return { stack, isWMStacked: false };
  }

  const lines = stack.split("\n");
  const filtered = lines.filter((line) => !line.includes(WM_URL));

  return {
    stack: filtered.join("\n"),
    isWMStacked: filtered.length < lines.length,
  };
}

export class Instrument extends InstrumentBase {
  constructor() {
    const aggregator = new Aggregator();

    super(aggregator, FEATURE_NAME);
    this.lastErrorIndex = 0;
    this.lastUnhandledIndex = 0;
    this.observer = null;

    // Render state tracking
    this.renderState = {
      isActive: false,
      hasError: false,
      url: null,
      renderType: null,
      startTime: null,
    };

    // Bind methods to preserve this context
    this.start = this.start.bind(this);
    this.noticeError = this.noticeError.bind(this);
    this.startRender = this.startRender.bind(this);
    this.onRenderError = this.onRenderError.bind(this);
    this.flushPendingRenders = this.flushPendingRenders.bind(this);

    /* istanbul ignore else */
    if (this.loadFunctions) {
      this.loadPublicFunctions();
    }

    /* istanbul ignore else */
    if (this.auto) {
      this.start();
    }
  }

  loadPublicFunctions() {
    const payloads = WMANS.__int.q.pop("noticeError");

    if (payloads) {
      payloads.forEach((payload) => {
        this.noticeError(payload.error, payload.attributes);
      });
    }

    WMANS.noticeError = (...args) => this.noticeError(...args);
  }

  start() {
    // Setup render tracking first so renderState.isActive is true before backlog processing
    this.setupRenderTracking();
    this.enableUnhandledRejectionListening();
    this.enableErrorJsListening();
  }

  setupRenderTracking() {
    // Track page reload immediately
    if (performance?.navigation?.type === 1) {
      // 1 = TYPE_RELOAD
      this.startRender("reload");
    } else {
      // Start render immediately so pre-DOMContentLoaded errors are captured
      this.startRender("load");
    }

    // Track back/forward navigation
    onPopstateChange(() => {
      this.startRender("back_forward");
    });

    // Register page-hide callback to flush pending renders
    onPageHide(() => this.flushPendingRenders());
  }

  startRender(renderType) {
    // Reset render state for this render cycle
    this.renderState = {
      isActive: true,
      hasError: false,
      url: globalScope.location?.href || "",
      renderType,
      startTime: Date.now(),
    };
  }

  onRenderError() {
    // Only track errors if a render is currently active
    if (!this.renderState.isActive) {
      if (WMANS?.recordCount) {
        WMANS.recordCount(
          METRICS.BROWSER_RENDER_DROPPED,
          1,
          "number",
          { reason: this.renderState.hasError ? "already_errored" : "flushed" },
          null,
          true
        );
      }

      return;
    }

    // Mark that an error occurred in this render
    this.renderState.hasError = true;

    // Send metric immediately with error='YES'
    const attributes = {
      error: "YES",
      type: this.renderState.renderType,
    };

    if (WMANS?.recordCount) {
      WMANS.recordCount(METRICS.BROWSER_RENDER, 1, "number", attributes);
    }

    // Clear render state since we've already sent the metric
    this.renderState.isActive = false;
  }

  flushPendingRenders() {
    // If render is still active and no error has occurred, send NO count
    if (this.renderState.isActive && !this.renderState.hasError) {
      const attributes = {
        error: "NO",
        type: this.renderState.renderType,
      };

      if (WMANS?.recordCount) {
        WMANS.recordCount(METRICS.BROWSER_RENDER, 1, "number", attributes);
      }

      // Clear render state
      this.renderState.isActive = false;
    }
  }

  enableErrorJsListening() {
    const errorManager = WMANS.__int.subs.error;
    const current = errorManager.length();

    if (current > 0) {
      const backlog = errorManager.getFrom(0);

      backlog.forEach((e, index) => {
        this.handleError(e);
        errorManager.markProcessed?.(index);
      });
      this.lastErrorIndex = current;
    }

    this.errorUnsubscribe = errorManager.subscribe((err, idx) => {
      if (idx >= this.lastErrorIndex) {
        this.handleError(err);
        this.lastErrorIndex = idx + 1;
        errorManager.markProcessed?.(idx);
      }
    });
  }

  // eslint-disable-next-line complexity
  handleError(e) {
    try {
      if (e?.target?.tagName) {
        return;
      }
    } catch (err) {
      tracker("internal", "error_js", {
        message: err.message || "",
        function: "handleError",
      });

      if (e?.currentTarget?.tagName) {
        return;
      }
    }

    try {
      let handler = false;

      try {
        handler = WMANS.__int.errorHandler(e);
      } catch (err) {
        const message =
          err.message || err.reason?.message || "without details (see stack)";

        this.sendBrowserLog({
          message: `Error in setErrorHandler function: ${message}`,
          stack: err.stack,
          tag: "errorHandlerImplementation",
        });
      }

      if (handler === true) {
        tracker("internal", "handled_error", {
          type: "runtime",
        });

        return;
      }

      const extraTags = handler !== false ? handler : {};
      const rawStack = e.error?.stack || e.stack;
      const { stack: filteredStack, isWMStacked } = filterWMFrames(rawStack);
      const errorSource = identifyErrorSource(e, {
        stack: filteredStack,
        firstPartyDomains: [getCurrentDomain()],
      });

      const errorInfo = {
        ...extraTags,
        filename: e.filename || "inline",
        initiator: "browser",
        count: 1,
        cause: String(e.error?.cause || e.cause || "unknown"),
        message:
          e.message ||
          (typeof e.error === "string" ? e.error : null) ||
          "Runtime error",
        stack: filteredStack || "No stack trace available",
        status: "error",
        type: e.error?.type || "runtime",
        lineno: e.lineno,
        colno: e.colno,
        source: errorSource,
        ...(isWMStacked && { isWMStacked: true }),
        ...(e.webkitBridgeError && { webkitBridgeError: e.webkitBridgeError }),
      };

      if (isInternalError(errorInfo)) {
        tracker("internal", "error_js", {
          type: "runtime",
        });

        return;
      }

      // Track render error if from first-party or inline-script source
      if (
        [ERROR_SOURCES.FIRST_PARTY, ERROR_SOURCES.INLINE_SCRIPT].includes(
          errorSource.source
        )
      ) {
        this.onRenderError();
      }

      this.sendBrowserLog(errorInfo);
      this.sendMetric(errorSource);
    } catch (err) {
      tracker("internal", "error_js", {
        message: err.message || "",
        function: "handleError",
      });
    }
  }

  enableUnhandledRejectionListening() {
    const unhandledManager = WMANS.__int.subs.unhandled;
    const current = unhandledManager.length();

    if (current > 0) {
      const backlog = unhandledManager.getFrom(0);

      backlog.forEach((e, index) => {
        this.handleUnhandledRejection(e);
        unhandledManager.markProcessed?.(index);
      });
      this.lastUnhandledIndex = current;
    }

    this.unhandledUnsubscribe = unhandledManager.subscribe((err, idx) => {
      if (idx >= this.lastUnhandledIndex) {
        this.handleUnhandledRejection(err);
        this.lastUnhandledIndex = idx + 1;
        unhandledManager.markProcessed?.(idx);
      }
    });
  }

  /* istanbul ignore next */
  // eslint-disable-next-line complexity
  handleUnhandledRejection(e) {
    try {
      let handler = false;

      try {
        handler = WMANS.__int.errorHandler(e);
      } catch (err) {
        const message =
          err.message || err.reason?.message || "without details (see stack)";

        this.sendBrowserLog({
          message: `Error in setErrorHandler function: ${message}`,
          stack: err.stack,
          tag: "errorHandlerImplementation",
        });
      }

      if (handler === true) {
        tracker("internal", "handled_error", {
          type: "unhandledrejection",
        });

        return;
      }

      const extraTags = handler !== false ? handler : {};
      const rawStack = e.reason?.stack || e.stack;
      const { stack, isWMStacked } = filterWMFrames(rawStack);
      const errorSource = identifyErrorSource(e, {
        stack,
        firstPartyDomains: [getCurrentDomain()],
      });

      let message = null;

      if (typeof e.reason?.message === "string") {
        message = e.reason?.message;
      }

      if (!message && e.reason !== null) {
        message = JSON.stringify(e.reason);
      }

      if (!message) {
        message =
          e.message ||
          (typeof e.error === "string" ? e.error : null) ||
          "Unhandled promise rejection";
      }

      if (typeof message === "object") {
        message = JSON.stringify(message);
      }

      const errorInfo = {
        ...extraTags,
        filename: e.filename || "inline",
        initiator: "browser",
        cause: String(e.error?.cause || e.cause || "unknown"),
        count: 1,
        message: message || "Unhandled promise rejection",
        stack: stack || "No stack trace available",
        status: "error",
        type: e.error?.type || "unhandledrejection",
        lineno: e.lineno,
        colno: e.colno,
        source: errorSource,
        ...(isNil(e.reason) && { empty_rejection: true }),
        ...(isWMStacked && { isWMStacked: true }),
        ...(e.reason?.fetchContext && { fetchContext: e.reason.fetchContext }),
        ...(e.webkitBridgeError && { webkitBridgeError: e.webkitBridgeError }),
      };

      // Drop internal SDK errors BEFORE any side effects (render tagging, log, metric).
      if (isInternalError(errorInfo)) {
        tracker("internal", "error_js", {
          type: "unhandledrejection",
        });

        return;
      }

      // Track render error if from first-party or inline-script source.
      if (
        [ERROR_SOURCES.FIRST_PARTY, ERROR_SOURCES.INLINE_SCRIPT].includes(
          errorSource.source
        )
      ) {
        this.onRenderError();
      }

      this.sendBrowserLog(errorInfo);
      this.sendMetric(errorSource);
    } catch (err) {
      tracker("internal", "error_js", {
        message: err.message || "",
        function: "handleUnhandledRejection",
      });
    }
  }

  sendBrowserLog(errorInfo) {
    /* istanbul ignore else */
    if (WMANS.logs?.fatal) {
      WMANS.logs.fatal(
        `${FEATURE_NAME}.BrowserError`,
        {
          type: "error-js",
          ...errorInfo,
        },
        true
      );
    }
  }

  sendMetric(errorSource) {
    if (WMANS.recordCount) {
      WMANS.recordCount(
        "browser.enduser.all_errors",
        1,
        "number",
        {
          source: errorSource.source,
        },
        null,
        true
      );
    }
  }

  noticeError(error, attributes) {
    try {
      if (typeof error === "string") {
        // eslint-disable-next-line no-param-reassign
        error = new Error(error);
        error.stack =
          "[Web-Monitoring]: Error triggered using noticeError function";
      }

      const rawStack =
        error?.error?.stack || error?.stack || "No stack trace available";
      const { stack: filteredStack } = filterWMFrames(rawStack);
      const errorSource = identifyErrorSource(error, { stack: filteredStack });

      // Track render error for manually reported errors
      this.onRenderError();

      const errorInfo = {
        filename: error?.filename || "inline",
        initiator: "browser",
        count: 1,
        message: error?.message || "Runtime error",
        stack: filteredStack,
        status: "error",
        type: "noticeError",
        lineno: error?.lineno,
        colno: error.colno,
        errorSource,
        attributes,
      };

      this.sendBrowserLog(errorInfo);
    } catch (err) {
      tracker("internal", "error_js", {
        message: err.message || "",
        function: "noticeError",
      });
    }
  }

  destroy() {
    this.observer?.disconnect();

    if (typeof this.errorUnsubscribe === "function") {
      this.errorUnsubscribe();
    }

    if (typeof this.unhandledUnsubscribe === "function") {
      this.unhandledUnsubscribe();
    }
  }
}
