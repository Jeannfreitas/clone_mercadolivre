import { LoggerProvider } from "@opentelemetry/sdk-logs";
import { internal, TRACE_PARENT_HEADER } from "@opentelemetry/core";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";

import Event from "../shared/Event";
import {
  getResources,
  getTraceparentAttributes,
  pickFromContext,
} from "../resources";

export class Module {
  constructor(aggregator, config, otelConfig, onPageHide) {
    this.aggregator = aggregator;
    this.config = config;
    this.otelConfig = otelConfig;
    this.onPageHide = onPageHide;
    this.exporter = new OTLPLogExporter({
      keepAlive: true,
      url: this.config.url,
      headers: this.config.headers,
      compression: this.config.compression,
    });
    this.loggerProvider = new LoggerProvider({
      resource: getResources(
        { ...this.config.resources, ...this.otelConfig.resources },
        {
          ...this.aggregator.getSharedContext(),
          ...this.aggregator.getCustomAttributes(),
        }
      ),
    });
    this.aggregator.addInternal(internal);
    this.aggregator.addExporter("default", this.exporter);
    this.loggerProvider.addLogRecordProcessor(this.aggregator);
    this.event = new Event({ loggerProvider: this.loggerProvider });

    // Setup periodic export via setInterval for independent, time-based flushing
    // (faster and more predictable than batch-by-count)
    const exportIntervalMillis = this.config.exportIntervalMillis ?? 1000;

    // eslint-disable-next-line no-underscore-dangle
    this._exportInterval = setInterval(
      () => this.aggregator.harvest(),
      exportIntervalMillis
    );

    // Flush on page hide to avoid data loss on navigation
    this.onPageHide(() => this.aggregator.forceFlush());

    if (window?.WMANS?.TMP?.logs) {
      delete window.WMANS.TMP.logs;
    }

    this.loadPublicFunctions();
  }

  loadPublicFunctions() {
    if (window?.WMANS) {
      window.WMANS.otel ??= {};
      window.WMANS.otel.loggerProvider = this.loggerProvider;
    }
  }

  recordEvent(event, exporter = "default") {
    this.aggregator.setSelectedExporter(exporter);

    const completeEvent = {
      ...event,
      attributes: {
        ...event.attributes,
        ...pickFromContext(
          this.config?.attributes ?? {},
          this.aggregator.getSharedContext()
        ),
        ...getTraceparentAttributes(TRACE_PARENT_HEADER),
      },
    };

    this.event.emit(completeEvent);
    this.aggregator.setSelectedExporter("default");
  }

  recordLog(record, exporter = "default") {
    this.aggregator.setSelectedExporter(exporter);

    const releasesAttributes = this.aggregator.getReleases();
    const experimentsAttributes = this.aggregator.getExperiments();
    const customAttributes = this.aggregator.getCustomAttributes();

    const completeRecord = {
      ...record,
      attributes: {
        ...record.attributes,
        ...pickFromContext(
          this.config?.attributes ?? {},
          this.aggregator.getSharedContext()
        ),
        ...customAttributes,
        ...releasesAttributes,
        ...experimentsAttributes,
        ...getTraceparentAttributes(TRACE_PARENT_HEADER),
      },
    };

    this.event.log(completeRecord);
    this.aggregator.setSelectedExporter("default");
  }

  attachLogExporter(name, config) {
    const exporter = new OTLPLogExporter({
      url: config.url,
      headers: config.headers,
      compression: config.compression,
    });

    this.aggregator.addExporter(name, exporter);
  }
}

if (window?.WMANS?.TMP) {
  window.WMANS.TMP.logs = Module;
}
