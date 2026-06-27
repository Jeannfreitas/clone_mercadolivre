import { getWMANS } from "../../window/browser";
import { Instrument as InstrumentBase } from "../../bases/instrument";
import {
  FEATURE_NAME,
  NAVIGATION_TYPES,
  PERFORMANCE_METRICS,
} from "./constants";
import { Aggregator } from "./aggregator";
import { METRICS } from "../../metrics/constants";
import { loadTTIMonitor } from "../../metrics/monitors/tti_monitor";

const WMANS = getWMANS();

export class Instrument extends InstrumentBase {
  constructor() {
    const aggregator = new Aggregator();

    super(aggregator, FEATURE_NAME);

    this.loadFetchListener = this.loadFetchListener.bind(this);
    this.getPerformanceMonitor = this.getPerformanceMonitor.bind(this);
    this.getCDNMonitor = this.getCDNMonitor.bind(this);
    this.getTTIMonitor = this.getTTIMonitor.bind(this);

    this.sendMetric = this.sendMetric.bind(this);

    /* istanbul ignore else */
    if (this.loadFunctions) {
      this.loadPublicFunctions();
    }

    /* istanbul ignore else */
    if (this.auto) {
      this.start();
    }
  }

  start() {
    this.loadFetchListener();
    this.getPerformanceMonitor();
    this.getTTIMonitor();
    setTimeout(() => {
      this.getCDNMonitor();
    }, 1000);
  }

  loadFetchListener() {
    const origFetch = window.fetch.bind(window);

    window.fetch = async (input, init) => {
      const start = performance.now();

      try {
        const resp = await origFetch(input, init);
        const end = performance.now();

        this.sendMetric(input, init, resp, start, end);

        return resp;
      } catch (err) {
        const end = performance.now();

        try {
          const rawUrl = typeof input === "string" ? input : input?.url;
          const urlObj = rawUrl ? new URL(rawUrl, window.location.href) : null;

          err.fetchContext = {
            method: init?.method || "GET",
            url: urlObj ? `${urlObj.origin}${urlObj.pathname}` : rawUrl,
            params: urlObj
              ? Object.fromEntries(urlObj.searchParams.entries())
              : {},
            body: init?.body !== null ? String(init.body).slice(0, 500) : null,
          };
        } catch (_) {
          // silent — ensure error is still propagated
        }

        this.sendMetric(input, init, null, start, end);

        throw err;
      }
    };
  }

  getPerformanceMonitor() {
    try {
      const sharedContext = this.aggregator.getSharedContext();

      PERFORMANCE_METRICS.forEach((metricKey) => {
        try {
          const value = sharedContext[metricKey];

          if (value) {
            WMANS?.recordHistogram(
              `${FEATURE_NAME}.${metricKey}`,
              value,
              "",
              {}
            );
          }
        } catch (err) {
          // Silent error for specific metrics
        }
      });

      try {
        const navigationTypeValue = sharedContext[METRICS.NAVIGATION_TYPE];

        if (navigationTypeValue) {
          const metricKey = NAVIGATION_TYPES[navigationTypeValue];

          if (metricKey) {
            WMANS?.recordCount(
              `${FEATURE_NAME}.${metricKey}`,
              1,
              "number",
              {},
              null, // Match test expectations
              true
            );
          }
        }
      } catch (err) {
        // Silent error for navigation type
      }
    } catch (error) {
      // General silent error
    }
  }

  getTTIMonitor() {
    loadTTIMonitor((ttiValue) => {
      WMANS?.recordHistogram(
        `${FEATURE_NAME}.${METRICS.TTI}`,
        ttiValue,
        "ms",
        {}
      );
    });
  }

  getCDNMonitor() {
    const sharedContext = this.aggregator.getSharedContext();

    if (sharedContext[METRICS.CDN_FETCH_DURATION]) {
      WMANS.recordHistogram(
        `${FEATURE_NAME}.cdn.ping`,
        sharedContext[METRICS.CDN_FETCH_DURATION],
        "ms",
        {}
      );
    }
  }

  sendMetric(input, init, response, startTs, endTs) {
    try {
      const method = (init && init.method) || "GET";
      const duration = endTs - startTs; // ms
      const status = response ? response.status : 0;
      const size =
        response && response.headers
          ? Number(response.headers.get("content-length") || 0)
          : 0;

      const isError = !response || !response.headers;

      WMANS?.recordHistogram(`${FEATURE_NAME}.fetch.duration`, duration, "ms", {
        method,
        status,
        isError,
      });

      if (size) {
        WMANS?.recordHistogram(`${FEATURE_NAME}.fetch.size`, size, "b", {
          method,
          status,
          isError,
        });
      }
    } catch (error) {
      // silent-catch
    }
  }
}
