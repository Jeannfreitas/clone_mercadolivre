import { supportsNavigatorApi } from "../../utils/support";
import { METRICS } from "../constants";

const loadDeviceInformationMonitor = (aggregator) => {
  if (supportsNavigatorApi()) {
    if (window.navigator.deviceMemory) {
      aggregator(METRICS.RAM_SIZE, window.navigator.deviceMemory);
    }

    if (window.navigator.hardwareConcurrency) {
      aggregator(METRICS.CPU_CORES, window.navigator.hardwareConcurrency);
    }
  }
};

export { loadDeviceInformationMonitor };
