export function isBrowserEnvironment() {
  return typeof window !== "undefined";
}

export function supportsFetchApi() {
  return "fetch" in window;
}

export function supportsNavigatorApi() {
  return "navigator" in window;
}

export function supportsSendBeaconApi() {
  return supportsNavigatorApi() && "sendBeacon" in window.navigator;
}

export function supportsPerformanceApi() {
  return "performance" in window;
}

export function supportsMatchMediaApi() {
  return isBrowserEnvironment() && typeof window.matchMedia !== "undefined";
}

export function supportsEnvironment() {
  return isBrowserEnvironment();
}

export function supportsBeaconOrFetch() {
  return supportsSendBeaconApi() || supportsFetchApi();
}

export function supportsPreloadState() {
  return isBrowserEnvironment() && "__PRELOADED_STATE__" in window;
}

export function supportsWeakSet() {
  return "WeakSet" in window;
}
