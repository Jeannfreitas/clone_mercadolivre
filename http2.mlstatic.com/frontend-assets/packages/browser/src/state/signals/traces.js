import {
  WM_EXPORTER_COMPRESSION,
  WM_EXPORTER_CONTENT_TYPE,
  WM_EXPORTER_TRACES_RETRIES,
  WM_EXPORTER_REQUIRED_KEY,
  WM_EXPORTER_TRACES_ENDPOINT,
} from "./constants";
import { attributes } from "./attributes";

export const traces = {
  auto_instrument: true,
  load_public_functions: true,
  url: WM_EXPORTER_TRACES_ENDPOINT,
  compression: WM_EXPORTER_COMPRESSION,
  required_key: WM_EXPORTER_REQUIRED_KEY,
  retries: WM_EXPORTER_TRACES_RETRIES,
  headers: {
    "Content-Type": WM_EXPORTER_CONTENT_TYPE,
  },
  sampling: 0.01,
  harvester: false, // Harvester isn't enable for this signal
  resources: {},
  attributes: {
    ...attributes,
  },
};
