const { trace, context } = require("@opentelemetry/api");

class Events {
  constructor({ loggerProvider }) {
    this.logger = loggerProvider.getLogger(
      "__webMonitoringName__",
      "__webMonitoringVersion__"
    );
  }

  emit(event) {
    const activeContext = context.active();
    const spanContext = trace.getSpanContext(activeContext);

    const attrs = event.attributes || {};

    attrs["event.name"] = event.name;

    if (event.domain) {
      attrs["event.domain"] = event.domain;
    }

    if (event.data) {
      attrs["event.data"] = event.data;

      Object.entries(event.data).forEach(([key, value]) => {
        attrs[`event.data.${key}`] = value;
      });
    }

    const eventRecord = {
      timestamp: event.timestamp || Date.now(),
      name: event.name,
      attributes: attrs,
    };

    if (spanContext) {
      attrs.traceFlags = spanContext.traceFlags;
      attrs.traceId = spanContext.traceId;
      attrs.spanId = spanContext.spanId;

      eventRecord.traceFlags = spanContext.traceFlags;
      eventRecord.traceId = spanContext.traceId;
      eventRecord.spanId = spanContext.spanId;
    }

    this.logger.emit(eventRecord);
  }

  log(record) {
    const attrs = record.attributes || {};

    const logRecord = {
      timestamp: record.timestamp || Date.now(),
      observedTimestamp: record.observedTimestamp || Date.now(),
      severityNumber: record.severityNumber || 9, // INFO = 9, see https://github.com/open-telemetry/opentelemetry-js/blob/57008533aba7ccd51ea80f38ff4f29404d47eb9c/experimental/packages/api-logs/src/types/LogRecord.ts#L24
      severityText: record.severityText || "",
      body: record.body || "",
      attributes: attrs,
    };

    if (this.spanContext) {
      logRecord.traceFlags = this.spanContext.traceFlags;
      logRecord.traceId = this.spanContext.traceId;
      logRecord.spanId = this.spanContext.spanId;
    }

    this.logger.emit(logRecord);
  }
}

module.exports = Events;
