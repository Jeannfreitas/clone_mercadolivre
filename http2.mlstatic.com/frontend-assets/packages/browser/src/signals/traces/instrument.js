/* eslint-disable no-underscore-dangle */
import { Instrument as InstrumentBase } from "../../bases/instrument";
import { SIGNAL_NAME } from "./constants";
import { getConfigurationValue } from "../../state/init";
import { Aggregator } from "./aggregator";
import { isSampled } from "../../utils/sampling";
import { getWMANS } from "../../window/browser";
import { onPageHide } from "../../utils/on-page-hide";

const WMANS = getWMANS();

export class Instrument extends InstrumentBase {
  constructor() {
    const aggregator = new Aggregator();

    super(aggregator, SIGNAL_NAME);

    this.config = getConfigurationValue(`instruments.signals.${SIGNAL_NAME}`);
    this.otel = getConfigurationValue("otel");
    this.getTracer = this.getTracer.bind(this);
    this.start = this.start.bind(this);
    this.recordSpan = this.recordSpan.bind(this);
    this.recordCustomSpan = this.recordCustomSpan.bind(this);
    this.startSpan = this.startSpan.bind(this);

    if (!this.hasKey) {
      return;
    }

    if (this.auto) {
      this.start();
    }

    if (this.loadFunctions) {
      this.loadPublicFunctions();
    }
  }

  loadPublicFunctions() {
    WMANS.traces = {
      start: () => this.start(),
      getTracer: () => this.getTracer(),
    };
    WMANS.startSpan = (...args) => this.startSpan(...args);
  }

  start() {
    try {
      void import("./module")
        .then(({ Module: Traces }) => {
          this.module = new Traces(
            this.aggregator,
            this.config,
            this.otel,
            onPageHide
          );
          this.processQueue();

          WMANS.recordSpan = (...args) => this.recordSpan(...args);
          WMANS.recordCustomSpan = (...args) => this.recordCustomSpan(...args);
        })
        .catch(() => {
          this.loadLegacyModule(
            [this.aggregator, this.config, this.otel, onPageHide],
            () => {
              this.processQueue();

              WMANS.recordSpan = (...args) => this.recordSpan(...args);
              WMANS.recordCustomSpan = (...args) =>
                this.recordCustomSpan(...args);
            }
          );
        });
    } catch (e) {
      this.loadLegacyModule(
        [this.aggregator, this.config, this.otel, onPageHide],
        () => {
          this.processQueue();

          WMANS.recordSpan = (...args) => this.recordSpan(...args);
          WMANS.recordCustomSpan = (...args) => this.recordCustomSpan(...args);
        }
      );
    }
  }

  getTracer() {
    if (!this.module) {
      return null;
    }

    return this.module.getTracer();
  }

  recordCustomSpan(
    name,
    events = [],
    attributes = {},
    internal = false,
    status = undefined
  ) {
    /* istanbul ignore next */
    if (!isSampled(this.config.sampling, internal)) {
      return;
    }

    if (!this.module?.recordCustomSpan) {
      WMANS.__int.q.push(SIGNAL_NAME, {
        type: "recordCustomSpan",
        attributes: {
          name,
          events,
          attributes,
          internal,
          status,
        },
      });

      return;
    }

    this.module.recordCustomSpan(name, events, attributes, status);
  }

  recordSpan(
    name,
    events = [],
    attributes = {},
    internal = false,
    status = undefined
  ) {
    /* istanbul ignore next */
    if (!isSampled(this.config.sampling, internal)) {
      return true;
    }

    if (!this.module?.recordSpan) {
      WMANS.__int.q.push(SIGNAL_NAME, {
        type: "recordSpan",
        attributes: {
          name,
          events,
          attributes,
          internal,
          status,
        },
      });

      return true;
    }

    return this.module.recordSpan(name, events, attributes, status);
  }

  startSpan(name, attributes = {}, internal = false) {
    /* istanbul ignore next */
    if (!isSampled(this.config.sampling, internal) || !this.module) {
      return null;
    }

    return this.module.startSpan(name, attributes);
  }

  processQueue() {
    const payloads = WMANS.__int.q.pop(SIGNAL_NAME);

    if (!payloads) {
      return;
    }

    payloads.forEach((payload) => {
      switch (payload.type) {
        case "recordSpan":
          this.recordSpan(
            payload.attributes.name,
            payload.attributes.events,
            payload.attributes.attributes,
            payload.attributes.internal,
            payload.attributes.status
          );

          break;
        case "recordCustomSpan":
          this.recordCustomSpan(
            payload.attributes.name,
            payload.attributes.events,
            payload.attributes.attributes,
            payload.attributes.internal,
            payload.attributes.status
          );

          break;

        /* istanbul ignore next */
        default:
          break;
      }
    });
    setTimeout(() => {
      this.processQueue();
    }, 1000);
  }
}
