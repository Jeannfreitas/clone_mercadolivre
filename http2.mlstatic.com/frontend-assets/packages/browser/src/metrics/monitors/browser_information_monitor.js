import { extractD2id } from "../../utils/d2id";
import { METRICS } from "../constants";
import {
  supportsEnvironment,
  supportsMatchMediaApi,
} from "../../utils/support";

const loadBrowserInformationMonitor = (aggregator) => {
  try {
    const d2id = extractD2id(
      typeof document !== "undefined" && document.cookie
    );

    if (d2id) {
      aggregator(METRICS.D2ID, `${d2id}`);
    }
  } catch (e) {
    // silent-catch
  }

  if (supportsEnvironment()) {
    aggregator(
      METRICS.URL,
      `${window.location.origin}${window.location.pathname}`
    );
  }

  if (supportsMatchMediaApi()) {
    aggregator(
      METRICS.DARK_MODE,
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    const isReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    aggregator(METRICS.REDUCED_MOTION, isReduced);

    // https://github.com/w3c/csswg-drafts/issues/6036
    const contrastPrefers =
      window.matchMedia(
        "(prefers-contrast: custom), (prefers-contrast: less), (prefers-contrast: more)"
      ).matches || window.matchMedia("(forced-colors: active)").matches;

    aggregator(METRICS.REDUCED_COLOR, contrastPrefers);
  }
};

export { loadBrowserInformationMonitor };
