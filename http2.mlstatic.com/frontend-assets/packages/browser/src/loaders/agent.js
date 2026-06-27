import { AgentBase } from "../bases/agent";
import {
  initConfiguration as configure,
  getConfigurationValue,
  isEnabled,
} from "../state/init";
import { setInitializedAgent } from "../window/browser";
import { loaderPriority } from "./constants";
import { Instrument as SignalTraces } from "../signals/traces";
import { Instrument as SignalMetrics } from "../signals/metrics";
import { Instrument as InstrumentSessionReplay } from "../features/session_replay";
import { Instrument as InstrumentDomCapture } from "../features/dom_capture";
import { Instrument as InstrumentWebVitals } from "../features/web_vitals";
import { Instrument as InstrumentResourceTiming } from "../features/resource_timing";
import { Instrument as InstrumentSessionTrace } from "../features/session_trace";
import { Instrument as InstrumentHeaviestResources } from "../features/heaviest_resources";
import { Instrument as InstrumentFailedLoadResources } from "../features/failed_load_resources";
import { Instrument as InstrumentErrorJs } from "../features/error_js";
import { Instrument as InstrumentPerformance } from "../features/performance";
import { Instrument as SignalsLogs } from "../signals/logs";
import { Harvester } from "./harvester";
import { registerServiceWorker } from "../worker";
import { tracker } from "../utils/tracker";
import { FEATURE_NAMES } from "../features/constants";
import { SIGNAL_NAMES } from "../signals/constants";

export const availableInstruments = {
  [FEATURE_NAMES.webVitals]: InstrumentWebVitals,
  [FEATURE_NAMES.resourceTiming]: InstrumentResourceTiming,
  [FEATURE_NAMES.sessionReplay]: InstrumentSessionReplay,
  [FEATURE_NAMES.sessionTrace]: InstrumentSessionTrace,
  [FEATURE_NAMES.heaviestResources]: InstrumentHeaviestResources,
  [FEATURE_NAMES.failedLoadResources]: InstrumentFailedLoadResources,
  [FEATURE_NAMES.domCapture]: InstrumentDomCapture,
  [FEATURE_NAMES.errorJs]: InstrumentErrorJs,
  [FEATURE_NAMES.performance]: InstrumentPerformance,
};

export const signals = {
  [SIGNAL_NAMES.traces]: SignalTraces,
  [SIGNAL_NAMES.metrics]: SignalMetrics,
  [SIGNAL_NAMES.logs]: SignalsLogs,
};

export class Agent extends AgentBase {
  constructor() {
    super();
    this.instruments = {};

    setInitializedAgent();
    configure(this);

    this.start();

    tracker("internal", "agent_loaded");

    if (window?.WMANS?.TMP?.agent) {
      delete window.WMANS.TMP.agent;
    }
  }

  start() {
    this.initHarvester();
    this.initFeatures();

    return true;
  }

  initFeatures() {
    const signalsOrder = Object.keys(signals).sort(
      (a, b) => loaderPriority[a] - loaderPriority[b]
    );

    signalsOrder.forEach((signalName) => {
      try {
        const Signal = signals[signalName];

        this.instruments[signalName] = new Signal();

        if (
          getConfigurationValue(`instruments.signals.${signalName}.harvester`)
        ) {
          this.harvester.subscribe(
            this.instruments[signalName].getAggregator()
          );
        }
      } catch (error) {
        tracker("internal", "signal_init_error", {
          signal: signalName,
          error: error?.message || "Unknown error",
        });
      }
    });

    const instrumentsOrder = Object.keys(availableInstruments).sort(
      (a, b) => loaderPriority[a] - loaderPriority[b]
    );

    instrumentsOrder.forEach((instrumentName) => {
      if (!isEnabled(instrumentName)) {
        return;
      }

      try {
        const Instrument = availableInstruments[instrumentName];

        this.instruments[instrumentName] = new Instrument();

        if (
          getConfigurationValue(
            `instruments.features.${instrumentName}.harvester`
          )
        ) {
          this.harvester.subscribe(
            this.instruments[instrumentName].getAggregator()
          );
        }
      } catch (error) {
        tracker("internal", "feature_init_error", {
          feature: instrumentName,
          error: error?.message || "Unknown error",
        });
      }
    });
  }

  initHarvester() {
    this.harvester = new Harvester(this.config.harvester);
  }

  registerWorker() {
    registerServiceWorker({
      url: getConfigurationValue("service_worker_url"),
      scope: "/wm-agent/v1/",
      onSuccess: (registration) => {
        console.log(
          `Service Worker registrado con scope: ${registration.scope}`
        );
      },
      onError: (error) => {
        console.error("Error al registrar el Service Worker:", error);
      },
    })
      .then(() => {})
      .catch(() => {});
  }
}

if (window?.WMANS?.TMP) {
  window.WMANS.TMP.agent = Agent;
}
