import { METRICS } from "../../metrics/constants";
import { getCookie } from "../../utils/cookie";

export const attributes = {
  "service.name": METRICS.SERVICE_NAME,
  get "location.url"() {
    const { location } = window;

    return `${location.origin}${location.pathname}`;
  },
  get "location.origin"() {
    const { location } = window;

    return location.origin;
  },
  "location.pathname": METRICS.PATH,
  d2id: METRICS.D2ID,
  "frontend-session-id": METRICS.SESSION_ID,
  get "melidata.userId"() {
    const melidataUserId =
      window.melidata_namespace &&
      window.melidata_namespace.actual_track &&
      window.melidata_namespace.actual_track.user &&
      window.melidata_namespace.actual_track.user.user_id;

    try {
      const userId = getCookie("orguseridp", melidataUserId);

      return parseInt(userId, 10) || null;
    } catch (e) {
      // silent catch when cookies isn't available
      return null;
    }
  },
};
