import { baseConfig } from "./base_config";
import { deepmerge } from "../utils/deepmerge";
import { globalScope } from "../window/browser";
import { isNil } from "../utils/conditionals";

let config = {};

export function initConfiguration(thisScope) {
  let clientConfig = {};

  // Test env
  // eslint-disable-next-line no-underscore-dangle
  if (globalScope.__wminit) {
    // eslint-disable-next-line no-underscore-dangle
    clientConfig = globalScope.__wminit;
  } else {
    console.error(
      "%c ⚠️No configuration found in window.__wminit, please read the Documentation ⚠️",
      "color: red;"
    );
  }

  if (globalScope.WMANS && globalScope.WMANS.config) {
    clientConfig = globalScope.WMANS.config;
  }

  config = deepmerge({}, baseConfig);
  config = deepmerge(config, clientConfig);
  thisScope.config = config;
  window.CONFIG = config;
}

// ToDo: Update or Override configuration
export function setConfiguration(id, value) {
  // ToDo: Enhance with validations
  config[id] = value;
}

export function getConfiguration(id) {
  // ToDo: Enhance with validations
  return config[id];
}

export function getConfigurationValue(path) {
  let val = config;

  if (val) {
    const parts = path.split(".");

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < parts.length - 1; i++) {
      val = val[parts[i]];

      if (typeof val !== "object") {
        return null;
      }
    }

    val = val[parts[parts.length - 1]];
  }

  return val;
}

export function isEnabled(name) {
  return (
    getConfigurationValue(`instruments.features.${name}.enabled`) === true ||
    getConfigurationValue(`instruments.signals.${name}.enabled`) === true ||
    getConfigurationValue(`instruments.features.${name}.enabled`) === "true" ||
    getConfigurationValue(`instruments.signals.${name}.enabled`) === "true"
  );
}

export function hasAutoInstrumentation(name) {
  return (
    getConfigurationValue(`instruments.features.${name}.auto_instrument`) ===
      true ||
    getConfigurationValue(`instruments.signals.${name}.auto_instrument`) ===
      true ||
    getConfigurationValue(`instruments.features.${name}.auto_instrument`) ===
      "true" ||
    getConfigurationValue(`instruments.signals.${name}.auto_instrument`) ===
      "true"
  );
}

export function hasKey(name) {
  const key =
    getConfigurationValue(`instruments.features.${name}.headers.api-key`) ||
    getConfigurationValue(`instruments.signals.${name}.headers.api-key`);

  return (
    !isNil(key) ||
    getConfigurationValue(`instruments.features.${name}.required_key`) ===
      "false" ||
    getConfigurationValue(`instruments.signals.${name}.required_key`) ===
      "false"
  );
}

export function hasLoadPublicFunctions(name) {
  return (
    getConfigurationValue(
      `instruments.features.${name}.load_public_functions`
    ) === true ||
    getConfigurationValue(
      `instruments.signals.${name}.load_public_functions`
    ) === true ||
    getConfigurationValue(
      `instruments.features.${name}.load_public_functions`
    ) === "true" ||
    getConfigurationValue(
      `instruments.signals.${name}.load_public_functions`
    ) === "true"
  );
}

export function getRequiredFeatures(name) {
  return (
    getConfigurationValue(`instruments.features.${name}.features_required`) ||
    getConfigurationValue(`instruments.signals.${name}.features_required`)
  );
}

export function getIndexedAttributes() {
  return {
    application: getConfigurationValue("custom_attributes.application"),
    scope: getConfigurationValue("custom_attributes.scope"),
    criticality_scope:
      getConfigurationValue("custom_attributes.criticality") ?? "test",
    site: getConfigurationValue("custom_attributes.site"),
    "lib-version": "__webMonitoringVersion__",
  };
}
