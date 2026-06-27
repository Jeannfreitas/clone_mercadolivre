import {
  getRequiredFeatures,
  hasAutoInstrumentation,
  hasLoadPublicFunctions,
  hasKey,
} from "../state/init";
import { globalScope, getWMANS } from "../window/browser";
import { FEATURE_NAMES } from "../features/constants";
import { getModulePath } from "./utils";
import { SCRIPT_TAG_NAME, SCRIPT_TYPE_NAME } from "./constants";
import { tracker } from "../utils/tracker";

const WMANS = getWMANS();

export class Instrument {
  constructor(aggregator, featureName) {
    this.aggregator = aggregator;
    this.featureName = featureName;

    this.module = null;
    this.events = null;

    this.auto = hasAutoInstrumentation(featureName);
    this.loadFunctions = hasLoadPublicFunctions(featureName);
    this.requiredFeatures = getRequiredFeatures(featureName) ?? [];
    this.hasKey = hasKey(featureName);
    this.executeRequiredFeatures();
  }

  getAggregator() {
    return this.aggregator;
  }

  executeRequiredFeatures() {
    const requires = {
      [FEATURE_NAMES.sessionTrace]: globalScope?.WMANS?.session_trace?.send,
    };

    // eslint-disable-next-line no-restricted-syntax
    for (const required of this.requiredFeatures) {
      if (requires[required] && typeof requires[required] === "function") {
        try {
          requires[required]();
        } catch (_) {
          tracker("internal", "required_features.failed");
        }
      }
    }
  }

  onLoadFunction(params, cb) {
    return () => {
      if ((WMANS.TMP || {})[this.featureName]) {
        const Module = WMANS.TMP[this.featureName];

        this.module = new Module(...params);

        if (cb) {
          cb();
        }
      }
    };
  }

  loadLegacyModule(params, cb) {
    const script = document.createElement(SCRIPT_TAG_NAME);

    script.src = getModulePath(this.featureName);
    script.type = SCRIPT_TYPE_NAME;
    script.onload = this.onLoadFunction(params, cb);
    document.head.appendChild(script);
  }
}
