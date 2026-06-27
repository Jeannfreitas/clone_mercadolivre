import { Instrument as InstrumentBase } from "../../bases/instrument";
import { FEATURE_NAME } from "./constants";
import { getWMANS } from "../../window/browser";
import { Aggregator } from "./aggregator";
import { getConfigurationValue } from "../../state/init";

const WMANS = getWMANS();

export class Instrument extends InstrumentBase {
  constructor() {
    const aggregator = new Aggregator();

    super(aggregator, FEATURE_NAME);
    this.start = this.start.bind(this);

    this.config = getConfigurationValue(`instruments.features.${FEATURE_NAME}`);

    if (this.auto) {
      this.start();
    }

    if (this.loadFunctions) {
      this.loadPublicFunctions();
    }
  }

  loadPublicFunctions() {
    WMANS.web_vitals = {
      start: () => this.start(),
    };
  }

  start() {
    try {
      void import("./module")
        .then(({ Module: WebVitals }) => {
          this.module = new WebVitals(this.aggregator, this.config);
          this.startModule();
        })
        .catch(() => {
          this.loadLegacyModule([this.aggregator, this.config], () =>
            this.startModule()
          );
        });
    } catch (e) {
      this.loadLegacyModule([this.aggregator, this.config], () =>
        this.startModule()
      );
    }
  }

  startModule() {
    this.module.start();
  }
}
