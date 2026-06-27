import { CompressionAlgorithm } from "@opentelemetry/otlp-exporter-base";

export const WM_EXPORTER_CONTENT_TYPE = "application/json";
export const WM_EXPORTER_COMPRESSION = CompressionAlgorithm.GZIP;
export const WM_EXPORTER_HOST_BASE =
  "https://o11y-proxy-otel-frontend.meli.com";

export const NR_EXPORTER_HOST_BASE = "https://otlp.nr-data.net:4318";

export const WM_EXPORTER_TRACES_ENDPOINT = `${WM_EXPORTER_HOST_BASE}/v1/traces`;
export const WM_EXPORTER_METRICS_ENDPOINT = `${WM_EXPORTER_HOST_BASE}/v1/metrics`;
export const WM_EXPORTER_LOGS_ENDPOINT = `${WM_EXPORTER_HOST_BASE}/v1/logs`;
export const WM_EXPORTER_REQUIRED_KEY = "false";
export const WM_EXPORTER_METRICS_RETRIES = 3;
export const WM_EXPORTER_TRACES_RETRIES = 3;
export const WM_EXPORTER_LOGS_RETRIES = 3;
