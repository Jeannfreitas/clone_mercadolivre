import {
  BatchSpanProcessor,
  ParentBasedSampler,
  TraceIdRatioBasedSampler,
  WebTracerProvider,
} from "@opentelemetry/sdk-trace-web";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { FetchInstrumentation } from "@opentelemetry/instrumentation-fetch";
import { XMLHttpRequestInstrumentation } from "@opentelemetry/instrumentation-xml-http-request";
import {
  TRACE_PARENT_HEADER,
  W3CTraceContextPropagator,
} from "@opentelemetry/core";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { SpanKind, SpanStatusCode, trace } from "@opentelemetry/api";
import { Resource } from "@opentelemetry/resources";

import {
  getResources,
  getTraceparentAttributes,
  getTraceparentMetaContext,
} from "../resources";

export class Module {
  constructor(aggregator, config, otelConfig, onPageHide) {
    this.aggregator = aggregator;
    this.config = config;
    this.otelConfig = otelConfig;
    this.onPageHide = onPageHide;

    const serviceName = this.aggregator.getSharedContext()["service-name"];
    const serviceVersion =
      this.aggregator.getSharedContext()["service-version"];

    const allResources = getResources(
      {
        ...this.config.resources,
        ...this.otelConfig.resources,
        ...this.config.attributes, // added attributes for spans to include correlation with all cross signals
      },
      {
        ...this.aggregator.getSharedContext(),
        ...this.aggregator.getCustomAttributes(),
      }
    );

    allResources.merge(
      new Resource({
        ...this.aggregator.getReleases(),
        ...this.aggregator.getExperiments(),
        ...this.aggregator.getCustomAttributes(),
        ...getTraceparentAttributes(TRACE_PARENT_HEADER),
      })
    );

    this.tracerProvider = new WebTracerProvider({
      sampler: new ParentBasedSampler({
        root: new TraceIdRatioBasedSampler(this.config.sampling),
      }),
      resource: allResources,
      spanProcessors: [
        new BatchSpanProcessor(
          new OTLPTraceExporter({
            keepAlive: true,
            url: this.config.url,
            headers: this.config.headers,
            compression: this.config.compression,
          })
        ),
      ],
    });

    this.tracerProvider.register({
      propagator: new W3CTraceContextPropagator(),
    });

    registerInstrumentations({
      tracerProvider: this.tracerProvider,
      instrumentations: [
        new FetchInstrumentation({
          clearTimingResources: true,
          ignoreUrls: this.otelConfig.ignore_urls,
        }),
        new XMLHttpRequestInstrumentation({
          ignoreUrls: this.otelConfig.ignore_urls,
        }),
      ],
    });

    this.tracer = trace.getTracer(serviceName, serviceVersion);

    // Flush on page hide to avoid data loss on navigation
    this.onPageHide(async () => this.tracerProvider.forceFlush());

    if (window?.WMANS?.TMP?.traces) {
      delete window.WMANS.TMP.traces;
    }

    this.loadPublicFunctions();
  }

  loadPublicFunctions() {
    if (window?.WMANS) {
      window.WMANS.otel ??= {};
      window.WMANS.otel.tracerProvider = this.tracerProvider;
    }
  }

  getTracer() {
    return this.tracer;
  }

  spanConfig(attributes) {
    return {
      kind: SpanKind.CLIENT,
      attributes: {
        ...attributes,
      },
    };
  }

  recordCustomSpan(name, events = [], attributes = {}, status = undefined) {
    try {
      const span = this.tracer.startSpan(
        `${name}`,
        this.spanConfig(attributes)
      );

      /* istanbul ignore next */
      if (status !== undefined) {
        span.setStatus(status);
      }

      /* istanbul ignore next */
      events.forEach((event) => {
        span.addEvent(event.name, event.attributes, event.startTime);
      });

      span.end();

      return true;
    } catch (e) {
      console.error(e);

      return false;
    }
  }

  recordSpan(name, events = [], attributes = {}, status = undefined) {
    try {
      const parentContext = getTraceparentMetaContext(TRACE_PARENT_HEADER);

      return this.tracer.startActiveSpan(
        name,
        this.spanConfig(attributes),
        parentContext,
        /* istanbul ignore next */
        (span) => {
          try {
            if (status !== undefined) {
              span.setStatus(status);
            }

            events.forEach((event) => {
              span.addEvent(event.name, event.attributes, event.startTime);
            });
          } catch (error) {
            span.recordException(error);
            span.setStatus({
              code: SpanStatusCode.ERROR,
              message: error.message,
            });
          } finally {
            span.end();
          }
        }
      );
    } catch (e) {
      console.error(e);

      return false;
    }
  }

  startSpan(name, attributes = {}) {
    try {
      return this.tracer.startSpan(name, this.spanConfig(attributes));
    } catch (e) {
      console.error(e);

      return null;
    }
  }
}

if (window?.WMANS?.TMP) {
  window.WMANS.TMP.traces = Module;
}
