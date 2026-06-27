/* eslint-disable no-underscore-dangle */
import { Instrument as InstrumentBase } from "../../bases/instrument";
import { SIGNAL_NAME } from "./constants";
import { getWMANS } from "../../window/browser";
import { getConfigurationValue } from "../../state/init";
import { Aggregator } from "./aggregator";
import { isSampled } from "../../utils/sampling";
import { onPageHide } from "../../utils/on-page-hide";

const WMANS = getWMANS();

export class Instrument extends InstrumentBase {
  constructor() {
    const aggregator = new Aggregator();

    super(aggregator, SIGNAL_NAME);

    this.start = this.start.bind(this);
    this.recordEvent = this.recordEvent.bind(this);
    this.recordLog = this.recordLog.bind(this);
    this.info = this.info.bind(this);
    this.warn = this.warn.bind(this);
    this.error = this.error.bind(this);
    this.fatal = this.fatal.bind(this);
    this.attachLogExporter = this.attachLogExporter.bind(this);
    this.config = getConfigurationValue(`instruments.signals.${SIGNAL_NAME}`);
    this.otel = getConfigurationValue("otel");

    if (!this.hasKey) {
      return;
    }

    if (this.auto) {
      this.start();
    }

    if (this.loadFunctions) {
      WMANS.logs = {
        ...WMANS.logs,
        attachLogExporter: (...args) => this.attachLogExporter(...args),
        start: () => this.start(),
      };
    }
  }

  start() {
    try {
      void import("./module")
        .then(({ Module: Logs }) => {
          this.module = new Logs(
            this.aggregator,
            this.config,
            this.otel,
            onPageHide
          );
          this.processQueue();
          this.loadPublicFunctions();
        })
        .catch(() => {
          this.loadLegacyModule(
            [this.aggregator, this.config, this.otel, onPageHide],
            () => {
              this.processQueue();
              this.loadPublicFunctions();
            }
          );
        });
    } catch (e) {
      this.loadLegacyModule(
        [this.aggregator, this.config, this.otel, onPageHide],
        () => {
          this.processQueue();
          this.loadPublicFunctions();
        }
      );
    }
  }

  loadPublicFunctions() {
    if (this.loadFunctions) {
      WMANS.recordEvent = (...args) => this.recordEvent(...args);
      WMANS.recordLog = (...args) => this.recordLog(...args);
      WMANS.logs = {
        info: (...args) => this.info(...args),
        warn: (...args) => this.warn(...args),
        error: (...args) => this.error(...args),
        fatal: (...args) => this.fatal(...args),
      };
    }
  }

  recordEvent(event, exporterConfig = "default", internal = false) {
    /* istanbul ignore next */
    if (!isSampled(this.config.sampling, internal)) {
      return null;
    }

    if (!this.module) {
      WMANS.__int.q.push(SIGNAL_NAME, {
        type: "recordEvent",
        attributes: {
          event,
          exporterConfig,
        },
      });

      return null;
    }

    return this.module.recordEvent(event, exporterConfig);
  }

  recordLog(event, exporterConfig = "default", internal = false) {
    /* istanbul ignore next */
    if (!isSampled(this.config.sampling, internal)) {
      return null;
    }

    if (!this.module) {
      WMANS.__int.q.push(SIGNAL_NAME, {
        type: "recordLog",
        attributes: {
          event,
          exporterConfig,
        },
      });

      return null;
    }

    return this.module.recordLog(event, exporterConfig);
  }

  info(message, attributes = {}, internal = false) {
    /* istanbul ignore next */
    if (!isSampled(this.config.sampling, internal)) {
      return null;
    }

    return this.recordLog({
      attributes: {
        level: "INFO",
        ...attributes,
      },
      body: message,
      severityNumber: 9,
      severityText: "INFO",
    });
  }

  warn(message, attributes = {}, internal = false) {
    /* istanbul ignore next */
    if (!isSampled(this.config.sampling, internal)) {
      return null;
    }

    return this.recordLog({
      attributes: {
        level: "WARN",
        ...attributes,
      },
      body: message,
      severityNumber: 13,
      severityText: "WARN",
    });
  }

  error(message, attributes = {}, internal = false) {
    /* istanbul ignore next */
    if (!isSampled(this.config.sampling, internal)) {
      return null;
    }

    return this.recordLog({
      attributes: {
        level: "ERROR",
        ...attributes,
      },
      body: message,
      severityNumber: 17,
      severityText: "ERROR",
    });
  }

  fatal(message, attributes = {}, internal = false) {
    /* istanbul ignore next */
    if (!isSampled(this.config.sampling, internal)) {
      return null;
    }

    if (!internal) {
      return null;
    }

    return this.recordLog({
      attributes: {
        level: "FATAL",
        ...attributes,
      },
      body: message,
      severityNumber: 19,
      severityText: "FATAL",
    });
  }

  attachLogExporter(name, config) {
    if (!this.module) {
      return;
    }

    this.module.attachLogExporter(name, config);
  }

  processQueue() {
    const payloads = WMANS.__int.q.pop(SIGNAL_NAME);

    if (!payloads) {
      return;
    }

    payloads.forEach((payload) => {
      switch (payload.type) {
        case "recordEvent":
          this.recordEvent(
            payload.attributes.event,
            payload.attributes.exporterConfig
          );

          break;
        case "recordLog":
          this.recordLog(
            payload.attributes.event,
            payload.attributes.exporterConfig
          );

          break;

        default:
          break;
      }
    });
  }
}
