import { sessionReplay } from "./session_replay";
import { sessionTrace } from "./session_trace";
import { webVitals } from "./web_vitals";
import { resourceTiming } from "./resource_timing";
import { failedLoadResources } from "./failed_load_resources";
import { heaviestResources } from "./heaviest_resources";
import { domCapture } from "./dom_capture";
import { errorJs } from "./error_js";
import { performance } from "./performance";

export const features = {
  session_trace: sessionTrace,
  session_replay: sessionReplay,
  web_vitals: webVitals,
  resource_timing: resourceTiming,
  failed_load_resources: failedLoadResources,
  heaviest_resources: heaviestResources,
  dom_capture: domCapture,
  error_js: errorJs,
  performance,
};
