import { getConfigurationValue } from "../state/init";
import { INTERNAL_ERRORS } from "./constants";

export function isEnabled(name) {
  return getConfigurationValue(`instruments.features.${name}.enabled`) === true;
}

export function hasAutoInstrumentation(name) {
  return (
    getConfigurationValue(`instruments.features.${name}.autoInstrument`) ===
    true
  );
}

export const isInternalError = (e) =>
  INTERNAL_ERRORS.some(
    (error) =>
      (e.message || "").includes(error) ||
      (e.error?.stack || e.stack || "").includes(error)
  );
