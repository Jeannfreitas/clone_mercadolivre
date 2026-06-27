import { onLCP, onINP, onCLS, onFCP, onTTFB } from "web-vitals/attribution";

const METRICS = {
  LCP: "lcp",
  INP: "inp",
  CLS: "cls",
  FCP: "fcp",
  TTFB: "ttfb",
  TIME_TO_FIRST_BYTE: "time_to_first_byte",
  RESOURCE_LOAD_DELAY: "resource_load_delay",
  RESOURCE_LOAD_TIME: "resource_load_time",
  ELEMENT_RENDER_DELAY: "element_render_delay",
  INP_EVENT_TIME: "inp_event_time",
  LARGEST_SHIFT_VALUE: "largest_shift_value",
  FIRST_BYTE_TO_FCP: "first_byte_to_fcp",
  TIME_TO_FIRST_BYTE_TO_FCP: "time_to_first_byte_to_fcp",
  WAITING_TIME: "waiting_time",
  CONNECTION_TIME: "connection_time",
  REQUEST_TIME: "request_time",
  EVENT_TIME_FID: "event_time_fid",
  DNS_LOOKUP_TIME: "dns_lookup_time",
};

export class Module {
  constructor(aggregator, config) {
    this.aggregator = aggregator;
    this.config = config;
    this.url = this.config.url;

    if (window?.WMANS?.TMP?.web_vitals) {
      delete window.WMANS.TMP.web_vitals;
    }
  }

  // Registers a single web-vitals observer with its own error boundary so a
  // failure in one metric never prevents the others from being registered.
  registerMetric(onMetric, handler) {
    try {
      onMetric(handler);
    } catch (e) {
      if (window?.WMANS?.recordCount) {
        window.WMANS.recordCount(
          `web_vitals.error`,
          1,
          "number",
          {
            message: e.message || "",
          },
          null,
          true
        );
      }
    }
  }

  start() {
    this.registerMetric(onLCP, ({ value, attribution }) => {
      this.aggregator.incrementToContext(METRICS.LCP, value);

      if (attribution?.timeToFirstByte) {
        this.aggregator.incrementToContext(
          METRICS.TIME_TO_FIRST_BYTE,
          attribution.timeToFirstByte
        );
      }

      if (attribution?.resourceLoadDelay) {
        this.aggregator.incrementToContext(
          METRICS.RESOURCE_LOAD_DELAY,
          attribution.resourceLoadDelay
        );
      }

      if (attribution?.resourceLoadTime) {
        this.aggregator.incrementToContext(
          METRICS.RESOURCE_LOAD_TIME,
          attribution.resourceLoadTime
        );
      }

      if (attribution?.elementRenderDelay) {
        this.aggregator.incrementToContext(
          METRICS.ELEMENT_RENDER_DELAY,
          attribution.elementRenderDelay
        );
      }
    });

    this.registerMetric(onINP, ({ value, attribution }) => {
      this.aggregator.incrementToContext(METRICS.INP, value);

      if (attribution?.eventTime) {
        this.aggregator.incrementToContext(
          METRICS.INP_EVENT_TIME,
          attribution.eventTime
        );
      }
    });

    this.registerMetric(onCLS, ({ value, attribution }) => {
      this.aggregator.incrementToContext(METRICS.CLS, value);

      if (attribution?.largestShiftValue) {
        this.aggregator.incrementToContext(
          METRICS.LARGEST_SHIFT_VALUE,
          attribution.largestShiftValue
        );
      }
    });

    this.registerMetric(onFCP, ({ value, attribution }) => {
      this.aggregator.incrementToContext(METRICS.FCP, value);

      if (attribution?.firstByteToFCP) {
        this.aggregator.incrementToContext(
          METRICS.FIRST_BYTE_TO_FCP,
          attribution.firstByteToFCP
        );
      }

      if (attribution?.timeToFirstByte) {
        this.aggregator.incrementToContext(
          METRICS.TIME_TO_FIRST_BYTE_TO_FCP,
          attribution.timeToFirstByte
        );
      }
    });

    this.registerMetric(onTTFB, ({ value, attribution }) => {
      this.aggregator.incrementToContext(METRICS.TTFB, value);

      if (attribution?.dnsTime) {
        this.aggregator.incrementToContext(
          METRICS.DNS_LOOKUP_TIME,
          attribution.dnsTime
        );
      }

      if (attribution?.waitingTime) {
        this.aggregator.incrementToContext(
          METRICS.WAITING_TIME,
          attribution.waitingTime
        );
      }

      if (attribution?.connectionTime) {
        this.aggregator.incrementToContext(
          METRICS.CONNECTION_TIME,
          attribution.connectionTime
        );
      }

      if (attribution?.requestTime) {
        this.aggregator.incrementToContext(
          METRICS.REQUEST_TIME,
          attribution.requestTime
        );
      }
    });
  }
}

if (window?.WMANS?.TMP) {
  window.WMANS.TMP.web_vitals = Module;
}
