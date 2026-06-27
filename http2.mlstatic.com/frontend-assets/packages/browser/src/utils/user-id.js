import { getCookie } from "./cookie";

const getUserId = (alt = null) => {
  const melidataUserId =
    window.melidata_namespace &&
    window.melidata_namespace.actual_track &&
    window.melidata_namespace.actual_track.user &&
    window.melidata_namespace.actual_track.user.user_id;

  const userId = getCookie("orguseridp", melidataUserId);

  return userId && !Number.isNaN(parseInt(userId, 10))
    ? parseInt(userId, 10)
    : alt;
};

const getPath = () => {
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
};

export { getUserId, getPath };
