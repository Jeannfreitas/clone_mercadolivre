export const FEATURE_NAMES = {
  sessionReplay: "session_replay",
  sessionTrace: "session_trace",
  webVitals: "web_vitals",
  resourceTiming: "resource_timing",
  heaviestResources: "heaviest_resources",
  failedLoadResources: "failed_load_resources",
  domCapture: "dom_capture",
  errorJs: "error_js",
  performance: "performance",
};

export const INTERNAL_ERRORS = [
  "WMANS",
  "web_monitoring",
  "https://o11y-proxy-otel-frontend.meli.com",
  "https://events.mercadolibre.com/dom",
  // Thrown asynchronously inside the web-vitals PerformanceObserver callback
  // when a PerformanceEntry object is used as a WeakMap key in older WebKit/WKWebView.
  // This is a library-internal error, not user code.
  "Invalid value used as weak map key",
];
