import { METRICS } from "../../metrics/constants";
import { getCookie } from "../../utils/cookie";
import { FEATURE_NAMES } from "../../features/constants";

export const domCapture = {
  enabled: false,
  auto_instrument: false,
  harvester: false,
  endpoint: "https://events.mercadolibre.com/dom",
  sampling: 0.01,
  features_required: [FEATURE_NAMES.sessionTrace],
  mapped_attributes: {
    metadata: [
      METRICS.RAM_SIZE,
      METRICS.CPU_CORES,
      METRICS.NETWORK_TYPE,
      METRICS.NETWORK_SPEED,
      METRICS.USER_AGENT,
      METRICS.SAVE_DATA,
      METRICS.NETWORK_RTT,
      METRICS.D2ID,
      METRICS.URL,
      METRICS.DARK_MODE,
      METRICS.SESSION_ID,
      METRICS.WINDOW_WIDTH,
      METRICS.WINDOW_HEIGHT,
      METRICS.PLATFORM_ID,
      METRICS.SITE_ID,
      METRICS.APP_NAME,
      METRICS.DEVICE,
      METRICS.WEBVIEW,
      METRICS.SCOPE_NAME,
      METRICS.SESSION_ID,
      METRICS.TRACEABILITY_ID,
      METRICS.MLDATA_SESSION_ID,
      METRICS.CLIENT_NAME,
      METRICS.CLIENT_VERSION,
    ],
    headers: {
      get user_id() {
        const melidataUserId =
          window.melidata_namespace &&
          window.melidata_namespace.actual_track &&
          window.melidata_namespace.actual_track.user &&
          window.melidata_namespace.actual_track.user.user_id;

        try {
          const userId = getCookie("orguseridp", melidataUserId);

          return parseInt(userId, 10) || null;
        } catch (_) {
          return null;
        }
      },
      get view_name() {
        const trackPath =
          window.melidata_namespace &&
          window.melidata_namespace.actual_track &&
          window.melidata_namespace.actual_track.path
            ? window.melidata_namespace.actual_track.path
            : null;

        if (trackPath) {
          return trackPath;
        }

        let floxPath = null;

        try {
          floxPath = floxSearch(window.__PRELOADED_STATE__.floxResponse);
        } catch (ex) {
          /* empty */
        }

        const windowPathName = window.location.pathname || null;

        return floxPath || windowPathName;
      },
      view_id: METRICS.REQUEST_ID,
      get mime_type() {
        return "multipart/form-data";
      },
    },
  },
};
