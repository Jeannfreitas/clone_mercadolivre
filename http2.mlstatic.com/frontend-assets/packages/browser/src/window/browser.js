export const isBrowserScope =
  typeof window !== "undefined" && !!window.document;

export const globalScope = isBrowserScope ? window : {};

export const loadedAsDeferredBrowserScript =
  globalScope?.document?.readyState === "complete";

export const initiallyHidden = Boolean(
  globalScope?.document?.visibilityState === "hidden"
);

export const webMonitoringAgentNamespace = "WMANS"; // Web Monitoring Agent Name Space
export const webMonitoringAgentNamespaceShortcut = "wm";

export function getWMANS() {
  if (typeof globalScope[webMonitoringAgentNamespaceShortcut] === "undefined") {
    globalScope[webMonitoringAgentNamespaceShortcut] =
      globalScope[webMonitoringAgentNamespace];
  }

  return globalScope[webMonitoringAgentNamespace];
}

export function setInitializedAgent() {
  const wm = getWMANS();

  const initializedAt = {
    ms: performance.now(),
    date: new Date(),
  };

  Object.assign(wm, initializedAt);
}

export function addTempModule(name, module) {
  getWMANS().TMP = getWMANS().TMP || {};
  getWMANS().TMP[name] = module;
}

export function deleteTempModule(name) {
  const tmp = getWMANS().TMP;

  if (tmp && tmp[name]) {
    delete tmp[name];
  }
}
