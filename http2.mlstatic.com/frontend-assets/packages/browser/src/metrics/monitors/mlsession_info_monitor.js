import { getCookie, setCookie } from "../../utils/cookie";
import { METRICS } from "../constants";
import { getUUID } from "../../utils/uuid";

const maxAge = 1000 * 60 * 30; // would expire after 30 minutes

const loadMlSessionInfoMonitor = (aggregator) => {
  try {
    const cookie = getCookie(METRICS.MLDATA_SESSION_ID);

    if (!cookie) {
      const uuid = getUUID();

      setCookie(METRICS.MLDATA_SESSION_ID, uuid, { "max-age": maxAge });

      aggregator(METRICS.SESSION_ID, uuid);

      return;
    }

    aggregator(METRICS.SESSION_ID, cookie);
  } catch (e) {
    // silent-catch
  }
};

export { loadMlSessionInfoMonitor };
