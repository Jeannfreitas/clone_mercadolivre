import { Instrument as InstrumentBase } from "../../bases/instrument";
import { FEATURE_NAME } from "./constants";
import { getWMANS } from "../../window/browser";
import { Aggregator } from "./aggregator";

const WMANS = getWMANS();

export class Instrument extends InstrumentBase {
  constructor() {
    const aggregator = new Aggregator();

    super(aggregator, FEATURE_NAME);
    this.isTraceSent = false;
    this.sendSpan = this.sendSpan.bind(this);

    if (this.auto) {
      this.sendSpan();
    }

    if (this.loadFunctions) {
      this.loadPublicFunctions();
    }
  }

  loadPublicFunctions() {
    WMANS.session_trace = {
      send: () => this.sendSpan(),
    };
  }

  sendSpan() {
    if (this.isTraceSent) {
      return;
    }

    const events = this.aggregator.getEvents();

    if (WMANS.recordSpan) {
      const response = WMANS.recordSpan(FEATURE_NAME, events, {}, true);

      if (response !== false) {
        this.isTraceSent = true;

        return;
      }
    }

    setTimeout(() => {
      this.sendSpan();
    }, 500);
  }
}
