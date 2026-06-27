import { supportsNavigatorApi } from "../../utils/support";
import { METRICS } from "../constants";

const loadConnectionInformationMonitor = (aggregator) => {
  if (!supportsNavigatorApi()) {
    return;
  }

  const { navigator } = window;

  if (navigator.connection) {
    if (navigator.connection.effectiveType) {
      aggregator(METRICS.NETWORK_TYPE, navigator.connection.effectiveType);
    }

    if (navigator.connection.downlink) {
      aggregator(METRICS.NETWORK_SPEED, navigator.connection.downlink);
    }

    if ("saveData" in navigator.connection) {
      aggregator(METRICS.SAVE_DATA, navigator.connection.saveData);
    }

    if (navigator.connection.rtt) {
      aggregator(METRICS.NETWORK_RTT, navigator.connection.rtt);
    }
  }

  if (navigator.userAgent) {
    aggregator(METRICS.USER_AGENT, navigator.userAgent);
  }
};

export { loadConnectionInformationMonitor };
