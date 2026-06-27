import { HarvesterStrategy } from "./strategies/harvester";
import { PayloadStrategy } from "./strategies/payload";
import { VisibilityChangeStrategy } from "./strategies/visibility-change";
import { getConfiguration, isEnabled } from "../state/init";
import { getWMANS, globalScope } from "../window/browser";
import { loadDeviceInformationMonitor } from "../metrics/monitors/device_information_monitor";
import { loadConnectionInformationMonitor } from "../metrics/monitors/conection_information_monitor";
import { loadBrowserInformationMonitor } from "../metrics/monitors/browser_information_monitor";
import { loadMlSessionInfoMonitor } from "../metrics/monitors/mlsession_info_monitor";
import { loadNavigationTimingMonitor } from "../metrics/monitors/navigation_timing_monitor";
import { loadDocumentContentMonitor } from "../metrics/monitors/document_content_monitor";
import { loadDurationInfoMonitor } from "../metrics/monitors/duration_info_monitor";
import { loadWindowInfoMonitor } from "../metrics/monitors/window_info_monitor";
import { loadSettingsMonitor } from "../metrics/monitors/settings_info_monitor";
import { loadPixelInfoMonitor } from "../metrics/monitors/pixel_info_monitor";
import { METRICS } from "../metrics/constants";
import { tracker } from "../utils/tracker";

const WMANS = getWMANS();

const availableStrategies = [
  HarvesterStrategy,
  PayloadStrategy,
  VisibilityChangeStrategy,
];

export class Aggregator {
  static model = {
    sharedContext: {},
    context: {},
  };

  static monitorLoadedStatus = false;

  static loadedCustomAttributes = false;

  static loadedPublicFunction = false;

  strategies = [];

  constructor(context, instrumentName) {
    try {
      if (context !== null && typeof context !== "object") {
        return;
      }

      Aggregator.model.context[instrumentName] = {};
      Object.entries(context).forEach(([key, value]) => {
        if (Object.keys(Aggregator.model.sharedContext).includes(key)) {
          Aggregator.model.sharedContext[key] = value;
        } else {
          Aggregator.model.context[instrumentName][key] = value;
        }
      });

      this.loadStrategies(instrumentName);

      if (!Aggregator.loadedCustomAttributes) {
        this.loadCustomAttributes();
        Aggregator.loadedCustomAttributes = true;
      }

      if (!Aggregator.monitorLoadedStatus) {
        this.loadMonitors();
        Aggregator.monitorLoadedStatus = true;
      }

      if (!Aggregator.loadedPublicFunction) {
        this.loadPublicFunctions();
        Aggregator.loadedPublicFunction = true;
      }
    } catch (e) {
      tracker("internal", "aggregator_error", {
        error: e.message || "unknown error",
        instrumentName,
      });
    }
  }

  loadStrategies(instrumentName) {
    const strategiesToLoad = availableStrategies.filter((strategy) =>
      isEnabled(`${instrumentName}.strategies.${strategy.name}`)
    );

    strategiesToLoad.forEach((Strategy) => {
      this.strategies.push(new Strategy(this, instrumentName));
    });
  }

  loadCustomAttributes() {
    const attributes = getConfiguration("custom_attributes");

    Object.keys(attributes).forEach((key) => {
      Aggregator.model.sharedContext[key] = attributes[key];
    });
  }

  loadPublicFunctions() {
    if (globalScope.WMANS) {
      this.processQueue();
      globalScope.WMANS.setCustomAttributes = (attributes) => {
        Object.keys(attributes).forEach((key) => {
          this.setCustomAttribute(key, attributes[key]);
        });
      };

      globalScope.WMANS.setCustomAttribute = (key, value) =>
        this.setCustomAttribute(key, value);

      globalScope.WMANS.getContext = () => Aggregator.model;
      globalScope.WMANS.addRelease = (name, version) =>
        this.addRelease(name, version);
      globalScope.WMANS.addExperiment = (key, value) =>
        this.addExperiment(key, value);
    }
  }

  loadMonitors() {
    this.addToSharedContext(METRICS.LIBRARY_NAME, "__webMonitoringName__");
    this.addToSharedContext(
      METRICS.LIBRARY_VERSION,
      "__webMonitoringVersion__"
    );
    loadDeviceInformationMonitor((key, value) =>
      this.addToSharedContext(key, value)
    );
    loadConnectionInformationMonitor((key, value) =>
      this.addToSharedContext(key, value)
    );
    loadBrowserInformationMonitor((key, value) =>
      this.addToSharedContext(key, value)
    );
    loadMlSessionInfoMonitor((key, value) =>
      this.addToSharedContext(key, value)
    );
    loadNavigationTimingMonitor((key, value) =>
      this.addToSharedContext(key, value)
    );
    loadDocumentContentMonitor((key, value) =>
      this.addToSharedContext(key, value)
    );
    loadDurationInfoMonitor((key, value) =>
      this.addToSharedContext(key, value)
    );
    loadWindowInfoMonitor((key, value) => this.addToSharedContext(key, value));
    loadSettingsMonitor((key, value) => this.addToSharedContext(key, value));
    loadPixelInfoMonitor((key, value) => this.addToSharedContext(key, value));
  }

  getContext(instrumentName) {
    return {
      ...Aggregator.model.sharedContext,
      ...Aggregator.model.context[instrumentName],
    };
  }

  getSharedContext() {
    return Aggregator.model.sharedContext;
  }

  getLocalContext(instrumentName) {
    return Aggregator.model.context[instrumentName];
  }

  addToSharedContext(key, value) {
    Aggregator.model.sharedContext[key] = value;
  }

  addToContext(instrumentName, key, value) {
    Aggregator.model.context[instrumentName][key] = value;
  }

  incrementToContext(instrumentName, key, value) {
    if (!Aggregator.model.context[instrumentName][key]) {
      Aggregator.model.context[instrumentName][key] = [];
    }

    Aggregator.model.context[instrumentName][key].push(value);
  }

  makeSnapshot(instrumentName) {
    const snapshot = this.getContext(instrumentName);

    this.clearContext(instrumentName);

    return snapshot;
  }

  restoreSnapshot(instrumentName, snapshot) {
    Object.entries(snapshot).forEach(([key, value]) => {
      this.addToContext(instrumentName, key, value);
    });
  }

  getSize(instrumentName) {
    return Aggregator.model.context[instrumentName];
  }

  addStrategy(strategy) {
    this.strategies.push(strategy);
    strategy.run();
  }

  runStrategies() {
    this.strategies.forEach((strategy) => strategy.run());
  }

  clearContext(instrumentName) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete Aggregator.model.context[instrumentName];
    Aggregator.model.context[instrumentName] = {};
  }

  clearSubContext(instrumentName, key) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete Aggregator.model.context[instrumentName][key];
  }

  setCustomAttribute(key, value) {
    Aggregator.model.sharedContext.custom_attributes =
      Aggregator.model.sharedContext.custom_attributes ?? [];
    Aggregator.model.sharedContext.custom_attributes.push({
      key,
      value,
    });
  }

  harvest() {}

  addRelease(name, version) {
    Aggregator.model.sharedContext.releases =
      Aggregator.model.sharedContext.releases ?? [];
    Aggregator.model.sharedContext.releases.push({
      name,
      version,
    });
  }

  addExperiment(key, value) {
    Aggregator.model.sharedContext.experiments =
      Aggregator.model.sharedContext.experiments ?? [];
    Aggregator.model.sharedContext.experiments.push({
      key,
      value,
    });
  }

  getReleases() {
    const { releases } = Aggregator.model.sharedContext;

    return (releases ?? []).reduce((acc, release) => {
      acc[`releases.${release.name}`] = release.version;

      return acc;
    }, {});
  }

  getExperiments() {
    const { experiments } = Aggregator.model.sharedContext;

    return (experiments ?? []).reduce((acc, exp) => {
      acc[`experiments.${exp.key}`] = exp.value;

      return acc;
    }, {});
  }

  getCustomAttributes() {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { custom_attributes } = Aggregator.model.sharedContext;

    return (custom_attributes ?? []).reduce((acc, exp) => {
      acc[exp.key] = exp.value;

      return acc;
    }, {});
  }

  processQueue() {
    // eslint-disable-next-line no-underscore-dangle
    const payloads = WMANS.__int.q.pop("Aggregator");

    if (!payloads) {
      return;
    }

    payloads.forEach((payload) => {
      switch (payload.type) {
        case "addRelease":
          this.addRelease(payload.name, payload.version);

          break;
        case "addExperiment":
          this.addExperiment(payload.key, payload.value);

          break;
        case "setCustomAttribute":
          this.setCustomAttribute(payload.key, payload.value);

          break;
        case "setCustomAttributes":
          Object.keys(payload.object ?? {}).forEach((key) => {
            this.setCustomAttribute(key, payload.object[key]);
          });

          break;

        default:
          break;
      }
    });
  }
}
