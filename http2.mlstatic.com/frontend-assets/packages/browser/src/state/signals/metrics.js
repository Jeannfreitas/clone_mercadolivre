import {
  WM_EXPORTER_COMPRESSION,
  WM_EXPORTER_CONTENT_TYPE,
  WM_EXPORTER_METRICS_ENDPOINT,
  WM_EXPORTER_REQUIRED_KEY,
  WM_EXPORTER_METRICS_RETRIES,
} from "./constants";

export const metrics = {
  auto_instrument: true,
  load_public_functions: true,
  sampling: 1.0,
  url: WM_EXPORTER_METRICS_ENDPOINT,
  compression: WM_EXPORTER_COMPRESSION,
  required_key: WM_EXPORTER_REQUIRED_KEY,
  retries: WM_EXPORTER_METRICS_RETRIES,
  headers: {
    "Content-Type": WM_EXPORTER_CONTENT_TYPE,
  },
  harvester: false,
  resources: {},
  attributes: {},
};
