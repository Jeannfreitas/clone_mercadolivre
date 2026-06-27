import { getUserId, getPath } from "../../utils/user-id";
import { METRICS } from "../constants";

const loadSettingsMonitor = (aggregator) => {
  const viewName = getPath();

  if (viewName) {
    aggregator(METRICS.VIEW_NAME, viewName);
  }

  try {
    const userId = getUserId();

    if (userId) {
      aggregator(METRICS.USER_ID, parseInt(userId, 10));
    }
  } catch (e) {
    // silent-catch
  }
};

export { loadSettingsMonitor };
