import { METRICS } from "../constants";
import { supportsPerformanceApi } from "../../utils/support";
import { toFixedNumber } from "../../utils/number";

const firstPartyDomain = "http2.mlstatic.com";

const loadDurationInfoMonitor = (aggregator) => {
  if (!supportsPerformanceApi()) {
    return;
  }

  // First party Only
  const resources = window.performance
    .getEntriesByType("resource")
    .filter((entry) => new RegExp(firstPartyDomain).test(entry.name));

  const durationSum = resources.reduce((a, c) => {
    // eslint-disable-next-line no-param-reassign
    a += c.duration;

    return a;
  }, 0);

  aggregator(METRICS.DURATION_SUM, toFixedNumber(durationSum));
  aggregator(METRICS.RESOURCE_SIZE, resources.length);
};

export { loadDurationInfoMonitor };
