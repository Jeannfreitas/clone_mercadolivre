import { METRICS } from "../../metrics/constants";
import { getCookie } from "../../utils/cookie";
import { FEATURE_NAMES } from "../../features/constants";

export const sessionReplay = {
  enabled: false,
  auto_instrument: false,
  load_public_functions: true,
  sampling: 1.0,
  endpoint:
    "__eventsDomain__/v1/media-storage-service/session-replay-admin.session-replay-store-rola/assets",
  harvester: false,
  features_required: [FEATURE_NAMES.sessionTrace],
  mapped_attributes: {
    metadata: [
      METRICS.WINDOW_DOM,
      METRICS.WINDOW_WIDTH,
      METRICS.WINDOW_HEIGHT,
      METRICS.RAM_SIZE,
      METRICS.CPU_CORES,
      METRICS.USER_AGENT,
      METRICS.DARK_MODE,
      METRICS.REDUCED_MOTION,
      METRICS.REDUCED_COLOR,
      METRICS.URL,
      METRICS.APP_NAME,
      METRICS.SCOPE_NAME,
      METRICS.DEVICE,
      METRICS.PLATFORM_ID,
      METRICS.SITE_ID,
      METRICS.WEBVIEW,
      METRICS.REQUEST_ID,
      METRICS.VIEW_NAME,
      METRICS.SESSION_ID,
      METRICS.TRACEABILITY_ID,
      METRICS.CUSTOM_ATTRIBUTES,
      METRICS.LIBRARY_NAME,
      METRICS.LIBRARY_VERSION,
    ],
    headers: {
      session_id: METRICS.SESSION_ID,
      /* istanbul ignore next */
      get user_id() {
        const melidataUserId =
          window.melidata_namespace &&
          window.melidata_namespace.actual_track &&
          window.melidata_namespace.actual_track.user &&
          window.melidata_namespace.actual_track.user.user_id;

        const userId = getCookie("orguseridp", melidataUserId);

        return parseInt(userId, 10) || null;
      },
      /* istanbul ignore next */
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
      app_name: METRICS.APP_NAME,
      fury_context_name: METRICS.SCOPE_NAME,
      get mime_type() {
        return "application/json";
      },
      traceability_id: METRICS.TRACEABILITY_ID,
      metadata: METRICS.CUSTOM_ATTRIBUTES,
      device_platform: METRICS.DEVICE,
      get device_timestamp() {
        return Date.now();
      },
    },
  },
  strategies: {
    payload: {
      enabled: true,
      exportBufferSize: 50,
    },
    harvester: {
      enabled: false,
      exportTimeSeconds: 1500,
    },
    visibility_change: {
      enabled: true,
    },
  },
  recording: {
    inlineStylesheet: true,
    recordCanvas: true,
    recordCrossOriginIframes: false,
    maskTextClass:
      /(ml-mask|rr-mask|nav-header-username|user-badge-title|payment-card-component)/,
    blockClass: /(ml-block|rr-block)/,
    maskInputOptions: {
      date: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true,
      textarea: true,
      select: true,
      password: true,
    },
  },
};
