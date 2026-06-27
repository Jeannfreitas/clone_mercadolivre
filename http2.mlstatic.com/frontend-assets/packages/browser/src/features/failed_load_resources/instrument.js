/* eslint-disable no-underscore-dangle */
import { Instrument as InstrumentBase } from "../../bases/instrument";
import { FEATURE_NAME } from "./constants";
import { globalScope, getWMANS } from "../../window/browser";
import { Aggregator } from "./aggregator";
import { getConfigurationValue } from "../../state/init";
import { FIRST_PARTY_DOMAIN_PATTERNS } from "../../utils/mercado-domains";
import { METRICS } from "../../metrics/constants";

const WMANS = getWMANS();

export class Instrument extends InstrumentBase {
  constructor() {
    const aggregator = new Aggregator();

    super(aggregator, FEATURE_NAME);
    this.config = getConfigurationValue(
      `instruments.features.${FEATURE_NAME}.mapped_attributes`
    );
    this.supportedErrorTypes = this.config?.metricSupport || [];
    this.lastErrorIndex = 0;
    this.start = this.start.bind(this);

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
    WMANS.failed_load_resources = {
      start: () => this.start(),
    };
  }

  start() {
    /* istanbul ignore else */
    if (!globalScope?.addEventListener) {
      return;
    }

    this.enableFailedLoadResourceListening();
  }

  enableFailedLoadResourceListening() {
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

  handleError(e) {
    if (this.supportedErrorTypes.includes(e?.target?.tagName?.toLowerCase())) {
      const fileName = e.target.src || e.filename || "unknown";

      // Add span events here
      const sharedContext = this.aggregator.getSharedContext();

      const errorInfo = {
        name: fileName,
        attributes: {
          filename: fileName,
          fileType: this.getFileType(fileName),
          initiatorType: e.target.tagName.toLowerCase(),
          isFirstParty: FIRST_PARTY_DOMAIN_PATTERNS.some((domainPattern) =>
            fileName.includes(domainPattern)
          ),
          count: 1,
          message: "Load error",
          stack: "No stack trace available",
          status: "error",
          platform: sharedContext[METRICS.PLATFORM_ID],
          site: sharedContext[METRICS.SITE_ID],
          device: sharedContext[METRICS.DEVICE],
        },
        startTime: performance.now(),
      };

      this.aggregator.incrementToContext(errorInfo);
    }
  }

  getFileType(fileName) {
    let pathname = fileName;

    try {
      pathname = new URL(fileName).pathname;
    } catch (e) {
      // silent-catch
    }

    const extension = pathname
      .substring(pathname.lastIndexOf(".") + 1)
      .toLowerCase();

    return Object.keys(this.config.fileSupport).find((type) =>
      this.config.fileSupport[type].includes(extension)
    );
  }

  destroy() {
    if (typeof this.errorUnsubscribe === "function") {
      this.errorUnsubscribe();
    }
  }
}
