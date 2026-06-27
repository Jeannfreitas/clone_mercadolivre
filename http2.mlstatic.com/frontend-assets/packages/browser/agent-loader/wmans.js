/* eslint-disable no-underscore-dangle */
export const createWMANS = (MainQueue) => ({
  TMP: {},
  custom_attributes: {},
  __int: {
    q: new MainQueue(),
    subs: {
      error: {},
      unhandled: {},
    },
    errorHandler: () => false,
  },
  setErrorHandler: (fn) => {
    if (typeof fn !== "function") {
      return;
    }

    window.WMANS.__int.errorHandler = fn;
  },
  addRelease: (n, v) => {
    window.WMANS.__int.q.push("Aggregator", {
      type: "addRelease",
      name: n,
      version: v,
    });
  },
  addExperiment: (k, v) => {
    window.WMANS.__int.q.push("Aggregator", {
      type: "addExperiment",
      key: k,
      value: v,
    });
  },
  setCustomAttribute: (k, v) => {
    window.WMANS.__int.q.push("Aggregator", {
      type: "setCustomAttribute",
      key: k,
      value: v,
    });
  },
  setCustomAttributes: (a) => {
    window.WMANS.__int.q.push("Aggregator", {
      type: "setCustomAttributes",
      object: a,
    });
  },
  noticeError: (e, attr) => {
    window.WMANS.__int.q.push("noticeError", {
      type: "noticeError",
      error: e,
      attributes: attr,
    });
  },
  recordLog: (event, exporterConfig = "default") => {
    window.WMANS.__int.q.push("logs", {
      type: "recordLog",
      attributes: {
        event,
        exporterConfig,
      },
    });
  },
  recordEvent: (event, exporterConfig = "default") => {
    window.WMANS.__int.q.push("logs", {
      type: "recordEvent",
      attributes: {
        event,
        exporterConfig,
      },
    });
  },
  recordCount: (
    name,
    value = 1,
    unit = null,
    tags = {},
    exporterConfig = null
  ) => {
    window.WMANS.__int.q.push("metrics", {
      type: "recordCount",
      attributes: {
        name,
        value,
        unit,
        tags,
        exporterConfig,
      },
    });
  },
  recordHistogram: (
    name,
    value = 1,
    unit = null,
    tags = {},
    exporterConfig = null
  ) => {
    window.WMANS.__int.q.push("metrics", {
      type: "recordHistogram",
      attributes: {
        name,
        value,
        unit,
        tags,
        exporterConfig,
      },
    });
  },
  recordSpan: (
    name,
    events = [],
    attributes = {},
    internal = false,
    status = undefined
  ) => {
    window.WMANS.__int.q.push("traces", {
      type: "recordSpan",
      attributes: {
        name,
        events,
        attributes,
        internal,
        status,
      },
    });
  },
  recordCustomSpan: (
    name,
    events = [],
    attributes = {},
    internal = false,
    status = undefined
  ) => {
    window.WMANS.__int.q.push("traces", {
      type: "recordCustomSpan",
      attributes: {
        name,
        events,
        attributes,
        internal,
        status,
      },
    });
  },
  logs: {
    info: (message, attributes) => {
      window.WMANS.recordLog({
        attributes: {
          level: "INFO",
          ...attributes,
        },
        body: message,
        severityNumber: 9,
        severityText: "INFO",
      });
    },
    warn: (message, attributes) => {
      window.WMANS.recordLog({
        attributes: {
          level: "WARN",
          ...attributes,
        },
        body: message,
        severityNumber: 13,
        severityText: "WARN",
      });
    },
    error: (message, attributes) => {
      window.WMANS.recordLog({
        attributes: {
          level: "ERROR",
          ...attributes,
        },
        body: message,
        severityNumber: 17,
        severityText: "ERROR",
      });
    },
    fatal: (message, attributes) => {
      window.WMANS.recordLog({
        attributes: {
          level: "FATAL",
          ...attributes,
        },
        body: message,
        severityNumber: 19,
        severityText: "FATAL",
      });
    },
  },
  session_replay: {
    start: () => {
      window.WMANS.__int.q.push("session_replay", {
        type: "start",
        attributes: {},
      });
    },
    addMetadata: (key, value) => {
      window.WMANS.__int.q.push("session_replay", {
        type: "addMetadata",
        attributes: {
          key,
          value,
        },
      });
    },
  },
});

export const initWMANS = (MainQueue) => {
  if (!window?.WMANS) {
    window.WMANS = createWMANS(MainQueue);
  }
};
