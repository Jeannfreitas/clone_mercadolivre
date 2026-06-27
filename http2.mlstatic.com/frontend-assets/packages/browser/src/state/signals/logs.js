import {
  WM_EXPORTER_COMPRESSION,
  WM_EXPORTER_CONTENT_TYPE,
  WM_EXPORTER_LOGS_ENDPOINT,
  WM_EXPORTER_LOGS_RETRIES,
  WM_EXPORTER_REQUIRED_KEY,
} from "./constants";
import { attributes } from "./attributes";

export const logs = {
  auto_instrument: true,
  load_public_functions: true,
  sampling: 1.0,
  url: WM_EXPORTER_LOGS_ENDPOINT,
  compression: WM_EXPORTER_COMPRESSION,
  required_key: WM_EXPORTER_REQUIRED_KEY,
  retries: WM_EXPORTER_LOGS_RETRIES,
  headers: {
    "Content-Type": WM_EXPORTER_CONTENT_TYPE,
  },
  harvester: true,
  resources: {},
  attributes: {
    ...attributes,
  },
};
