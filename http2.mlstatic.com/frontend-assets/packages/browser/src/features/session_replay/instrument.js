/* eslint-disable no-underscore-dangle */
import { Instrument as InstrumentBase } from "../../bases/instrument";
import { FEATURE_NAME } from "./constants";
import { Aggregator } from "./aggregator";
import { getConfigurationValue } from "../../state/init";
import { getWMANS } from "../../window/browser";

const WMANS = getWMANS();

export class Instrument extends InstrumentBase {
  constructor() {
    const aggregator = new Aggregator();

    super(aggregator, FEATURE_NAME);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.flush = this.flush.bind(this);
    this.addMetadata = this.addMetadata.bind(this);
    this.queue = WMANS.__int.q;

    this.config = getConfigurationValue(
      `instruments.features.${FEATURE_NAME}.recording`
    );

    this.custom_attributes = getConfigurationValue(
      `instruments.features.${FEATURE_NAME}.custom_attributes`
    );

    if (this.auto) {
      this.start();
    }
    if (this.loadFunctions) {
      this.loadPublicFunctions();
    }
  }

  loadPublicFunctions() {
    WMANS.session_replay = {
      start: () => this.start(),
      addMetadata: (key, value) => this.addMetadata(key, value),
      stop: () => this.stop(),
      pause: () => this.pause(),
      resume: () => this.resume(),
    };

    if (this.loadFunctions) {
      WMANS.stopRecording = () => this.stop();
      WMANS.pauseRecording = () => this.pause();
      WMANS.resumeRecording = () => this.resume();
    }
  }

  start() {
    try {
      void import("./module")
        .then(({ Module: SessionReplay }) => {
          this.module = new SessionReplay(
            this.aggregator,
            this.config,
            this.custom_attributes
          );
          this.processQueue();
          this.loadPublicFunctions();
          this.record();
        })
        .catch(() => {
          this.loadLegacyModule(
            [this.aggregator, this.config, this.custom_attributes],
            () => {
              this.processQueue();
              this.record();
            }
          );
        });
    } catch (e) {
      this.loadLegacyModule(
        [this.aggregator, this.config, this.custom_attributes],
        () => {
          this.processQueue();
          this.record();
        }
      );
    }
  }

  addMetadata(key, value) {
    this.aggregator.addCustomAttribute({ key, value });
  }

  record() {
    if (!this.module) {
      this.start();

      return;
    }

    this.module.record();
  }

  stop() {
    if (!this.module) {
      return;
    }

    this.module.stop();
  }

  pause() {
    if (!this.module) {
      return;
    }

    this.module.pause();
  }

  resume() {
    if (!this.module) {
      return;
    }

    this.module.resume();
  }

  flush() {
    if (!this.module) {
      return;
    }

    this.module.flush();
  }

  processQueue() {
    const payloads = WMANS.__int.q.pop(FEATURE_NAME);

    if (!payloads) {
      return;
    }

    payloads.forEach((payload) => {
      switch (payload.type) {
        case "start":
          this.start();

          break;
        case "addMetadata":
          this.addMetadata(payload.attributes.key, payload.attributes.value);

          break;

        default:
          break;
      }
    });
  }
}
