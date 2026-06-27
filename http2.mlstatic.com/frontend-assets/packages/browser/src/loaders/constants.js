import { SIGNAL_NAMES } from "../signals/constants";
import { FEATURE_NAMES } from "../features/constants";

export const loaderPriority = {
  // Signals First
  [SIGNAL_NAMES.context]: 1,
  [SIGNAL_NAMES.traces]: 2,
  [SIGNAL_NAMES.logs]: 3,
  [SIGNAL_NAMES.metrics]: 4,
  // [SIGNAL_NAMES.events]: 5,
  // Features Second
  [FEATURE_NAMES.errorJs]: 6,
  [FEATURE_NAMES.performance]: 8,
  [FEATURE_NAMES.failedLoadResources]: 9,
  [FEATURE_NAMES.resourceTiming]: 10,
  [FEATURE_NAMES.webVitals]: 11,
  [FEATURE_NAMES.sessionReplay]: 12,
  [FEATURE_NAMES.heaviestResources]: 13,
  [FEATURE_NAMES.sessionTrace]: 14,
  [FEATURE_NAMES.domCapture]: 15,
};
