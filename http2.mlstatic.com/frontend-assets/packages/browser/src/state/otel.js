import { METRICS } from "../metrics/constants";

export const otel = {
  trace_parent_header: "traceparent",
  ignore_urls: [
    /(https?:\/\/bam\.nr-data\.net\/?).*$/,
    /(https?:\/\/otlp\.nr-data\.net\/?).*$/,
    /(https?:\/\/otel-collector-stage\.meli\.com\/?).*$/,
    /(https?:\/\/otel-collector\.meli\.com\/?).*$/,
    /(https?:\/\/http2\.mlstatic\.com\/cdn\/ping\.gif\/?).*$/,
    /(https?:\/\/o11y-proxy-otel-frontend\.meli\.com\/?).*$/,
  ],
  resources: {
    "service.name": METRICS.SERVICE_NAME,
    "service.version": METRICS.SERVICE_VERSION,
    "x-meli-trace-bu": METRICS.PLATFORM_ID,
    "x-meli-trace-site": METRICS.SITE_ID,
    "x-meli-trace-platform": METRICS.DEVICE,
    "fury.application": METRICS.APP_NAME,
    "fury.service": METRICS.SCOPE_NAME,
    "library-name": METRICS.LIBRARY_NAME,
    "library-version": METRICS.LIBRARY_VERSION,
    "browser.name": METRICS.BROWSER_NAME,
    "browser.major-version": METRICS.BROWSER_MAJOR_VERSION,
    "nordic.version": METRICS.NORDIC_VERSION,
    get "location.origin"() {
      const { location } = window;

      return location.origin;
    },
    "location.pathname": METRICS.PATH,
    criticality: METRICS.CRITICALITY,
  },
};
