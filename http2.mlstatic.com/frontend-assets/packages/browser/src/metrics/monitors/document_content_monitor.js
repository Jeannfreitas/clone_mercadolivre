import { supportsPreloadState, supportsWeakSet } from "../../utils/support";
import { METRICS } from "../constants";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value#examples
const getCircularReplacer = () => {
  const seen = new WeakSet();

  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }

      seen.add(value);
    }

    // eslint-disable-next-line consistent-return
    return value;
  };
};

const loadDocumentContentMonitor = (aggregator) => {
  try {
    if (supportsPreloadState() && supportsWeakSet()) {
      const psString = JSON.stringify(
        window.__PRELOADED_STATE__,
        getCircularReplacer()
      );

      aggregator(METRICS.INITIAL_CONTENT_SIZE, psString.length);
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
};

export { loadDocumentContentMonitor };
