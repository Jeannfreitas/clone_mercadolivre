import { Instrument as InstrumentBase } from "../../bases/instrument";
import { FEATURE_NAME } from "./constants";
import { Aggregator } from "./aggregator";
import { getWMANS } from "../../window/browser";

const WMANS = getWMANS();

export class Instrument extends InstrumentBase {
  constructor() {
    const aggregator = new Aggregator();

    super(aggregator, FEATURE_NAME);
    this.start = this.start.bind(this);

    /* istanbul ignore else */
    if (this.loadFunctions) {
      this.loadPublicFunctions();
    }

    if (this.auto) {
      this.start();
    }
  }

  loadPublicFunctions() {
    WMANS.dom_capture = {
      start: () => this.start(),
    };
  }

  start() {
    try {
      void import("./module")
        .then(({ Module: DomCapture }) => {
          this.module = new DomCapture(this.aggregator);
          Object.assign(this, this.module);
          this.module.start();
        })
        .catch(() => {
          this.loadLegacyModule([this.aggregator], () => this.startModule());
        });
    } catch (e) {
      this.loadLegacyModule([this.aggregator], () => this.startModule());
    }
  }

  startModule() {
    this.module.start();
  }
}
