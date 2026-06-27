import {
  AggregationTemporality,
  MeterProvider,
  PeriodicExportingMetricReader,
} from "@opentelemetry/sdk-metrics";
import { context } from "@opentelemetry/api";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";

import { getResources } from "../resources";

export class Module {
  constructor(aggregator, config, otelConfig, onPageHide) {
    this.aggregator = aggregator;
    this.config = config;
    this.otelConfig = otelConfig;
    this.onPageHide = onPageHide;
    this.meterProvider = {};
    this.metrics = {};
    this.attachMeterProvider("default", {
      url: this.config.url,
      headers: this.config.headers,
      compression: this.config.compression,
    });

    if (window?.WMANS?.TMP?.metrics) {
      delete window.WMANS.TMP.metrics;
    }

    // Flush all meter providers on page hide to avoid data loss on navigation
    this.onPageHide(() => {
      Object.values(this.meterProvider).forEach((provider) => {
        provider.forceFlush();
      });
    });

    this.loadPublicFunctions();
  }

  createMetricReader(options) {
    return new PeriodicExportingMetricReader({
      exporter: new OTLPMetricExporter({
        keepAlive: true,
        url: options.url,
        headers: options.headers,
        compression: options.compression,
        temporalityPreference: AggregationTemporality.DELTA,
        concurrencyLimit: 2,
      }),
      exportIntervalMillis: 1000,
    });
  }

  attachMeterProvider(name, readerOptions) {
    if (this.meterProvider[name]) {
      return;
    }

    const resources = getResources(
      { ...this.config.resources, ...this.otelConfig.resources },
      {
        ...this.aggregator.getSharedContext(),
        ...this.aggregator.getCustomAttributes(),
      }
    );

    this.meterProvider[name] = new MeterProvider({
      resource: resources,
      readers: [this.createMetricReader(readerOptions)],
    });
  }

  loadPublicFunctions() {
    if (window?.WMANS) {
      window.WMANS.otel ??= {};
      window.WMANS.otel.meterProvider = this.meterProvider;
    }
  }

  startHistogram(name, unit, buckets, meterProviderName = "default") {
    const meterProvider = this.getMeterProvider(meterProviderName);
    const meter = meterProvider.getMeter(
      "__webMonitoringName__",
      "__webMonitoringVersion__"
    );

    return meter.createHistogram(`wm.${name}`, {
      unit,
      advice: { explicitBucketBoundaries: buckets },
    });
  }

  recordHistogram(
    name,
    value = 1,
    unit = null,
    tags = {},
    meterProviderName = "default"
  ) {
    const meterProvider = this.getMeterProvider(meterProviderName);
    const meter = meterProvider.getMeter(
      "__webMonitoringName__",
      "__webMonitoringVersion__"
    );

    if (!this.metrics[name]) {
      this.metrics[name] = meter.createHistogram(`wm.${name}`, { unit });
    }

    this.metrics[name].record(value, tags, context);
  }

  recordCount(
    name,
    value = 1,
    unit = null,
    tags = {},
    meterProviderName = "default"
  ) {
    const meterProvider = this.getMeterProvider(meterProviderName);
    const meter = meterProvider.getMeter(
      "__webMonitoringName__",
      "__webMonitoringVersion__"
    );

    if (!this.metrics[name]) {
      this.metrics[name] = meter.createCounter(`wm.${name}`, { unit });
    }

    this.metrics[name].add(value, tags, context);
  }

  createGauge(
    name,
    unit = null,
    callback = () => {},
    meterProviderName = "default"
  ) {
    const meterProvider = this.getMeterProvider(meterProviderName);
    const meter = meterProvider.getMeter(
      "__webMonitoringName__",
      "__webMonitoringVersion__"
    );

    const gauge = meter.createObservableGauge(`wm.${name}`, { unit });

    gauge.addCallback(callback);

    return gauge;
  }

  getMeterProvider(name = "default") {
    return this.meterProvider[name ?? "default"];
  }
}

if (window?.WMANS?.TMP) {
  window.WMANS.TMP.metrics = Module;
}
