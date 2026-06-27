import { FEATURE_NAMES } from "../constants";

export const FEATURE_NAME = FEATURE_NAMES.webVitals;

export const METRICS = {
  LCP: "lcp",
  INP: "inp",
  CLS: "cls",
  FCP: "fcp",
  TTFB: "ttfb",
  FID: "fid",
  TIME_TO_FIRST_BYTE: "time_to_first_byte",
  RESOURCE_LOAD_DELAY: "resource_load_delay",
  RESOURCE_LOAD_TIME: "resource_load_time",
  ELEMENT_RENDER_DELAY: "element_render_delay",
  INP_EVENT_TIME: "inp_event_time",
  LARGEST_SHIFT_VALUE: "largest_shift_value",
  FIRST_BYTE_TO_FCP: "first_byte_to_fcp",
  TIME_TO_FIRST_BYTE_TO_FCP: "time_to_first_byte_to_fcp",
  WAITING_TIME: "waiting_time",
  CONNECTION_TIME: "connection_time",
  REQUEST_TIME: "request_time",
  EVENT_TIME_FID: "event_time_fid",
  DNS_LOOKUP_TIME: "dns_lookup_time",
  CPU_CORES: "cpu_cores",
  RAM_SIZE: "ram_size",
  NETWORK_RTT: "network_rtt",
  NETWORK_SPEED: "network_speed",
  NAVIGATION_TYPE: "navigation-type", // we need '-' instead of '_' to match the shared context navigation type
  NAVIGATION_TYPE_PUSH: "navigation_type_push",
  NAVIGATION_TYPE_RELOAD: "navigation_type_reload",
  NAVIGATION_TYPE_BACK_FORWARD: "navigation_type_back_forward",
  NAVIGATION_TYPE_PRERENDER: "navigation_type_prerender",
  NAVIGATION_TYPE_PREFETCH: "navigation_type_prefetch",
  DEVICE_PIXEL_RATIO: "device_pixel_ratio",
};

export const INITIATIVE_WEB_VITALS = "web-vitals";
export const INITIATIVE_PERFORMANCE = "performance";
