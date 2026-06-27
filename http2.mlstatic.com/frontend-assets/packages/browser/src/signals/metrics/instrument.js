/* eslint-disable no-underscore-dangle */
import { Instrument as InstrumentBase } from "../../bases/instrument";
import { SIGNAL_NAME } from "./constants";
import { getWMANS } from "../../window/browser";
import { getConfigurationValue } from "../../state/init";
import { Aggregator } from "./aggregator";
import { isSampled } from "../../utils/sampling";
import { onPageHide } from "../../utils/on-page-hide";

const WMANS = getWMANS();

export class Instrument extends InstrumentBase {
  constructor() {
    const aggregator = new Aggregator();

    super(aggregator, SIGNAL_NAME);
    this.config = getConfigurationValue(`instruments.signals.${SIGNAL_NAME}`);
    this.otel = getConfigurationValue("otel");
    this.start = this.start.bind(this);
    this.recordCount = this.recordCount.bind(this);
    this.recordHistogram = this.recordHistogram.bind(this);
    this.startHistogram = this.startHistogram.bind(this);
    this.attachMeterProvider = this.attachMeterProvider.bind(this);

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
    WMANS.metrics = {
      start: () => this.start(),
      attachMeterProvider: (...args) => this.attachMeterProvider(...args),
    };
    WMANS.startHistogram = (...args) => this.startHistogram(...args);
  }

  start() {
    try {
      void import("./module")
        .then(({ Module: Metrics }) => {
          this.module = new Metrics(
            this.aggregator,
            this.config,
            this.otel,
            onPageHide
          );
          this.processQueue();

          WMANS.recordCount = (...args) => this.recordCount(...args);
          WMANS.recordHistogram = (...args) => this.recordHistogram(...args);
        })
        .catch(() => {
          this.loadLegacyModule(
            [this.aggregator, this.config, this.otel, onPageHide],
            () => {
              this.processQueue();

              WMANS.recordCount = (...args) => this.recordCount(...args);
              WMANS.recordHistogram = (...args) =>
                this.recordHistogram(...args);
            }
          );
        });
    } catch (e) {
      this.loadLegacyModule(
        [this.aggregator, this.config, this.otel, onPageHide],
        () => {
          this.processQueue();

          WMANS.recordCount = (...args) => this.recordCount(...args);
          WMANS.recordHistogram = (...args) => this.recordHistogram(...args);
        }
      );
    }
  }

  recordCount(
    name,
    value = 1,
    unit = null,
    tags = {},
    exporterConfig = null,
    internal = false
  ) {
    if (!isSampled(this.config.sampling, internal)) {
      return;
    }

    if (!this.module) {
      WMANS.__int.q.push(SIGNAL_NAME, {
        type: "recordCount",
        attributes: {
          name,
          value,
          unit,
          tags,
          exporterConfig,
          internal,
        },
      });

      return;
    }

    this.module.recordCount(name, value, unit, tags, exporterConfig);
  }

  recordHistogram(
    name,
    value = 1,
    unit = null,
    tags = {},
    exporterConfig = null,
    internal = false
  ) {
    if (!isSampled(this.config.sampling, internal)) {
      return;
    }

    if (!this.module) {
      WMANS.__int.q.push(SIGNAL_NAME, {
        type: "recordHistogram",
        attributes: {
          name,
          value,
          unit,
          tags,
          exporterConfig,
          internal,
        },
      });

      return;
    }

    this.module.recordHistogram(name, value, unit, tags, exporterConfig);
  }

  startHistogram(name, unit, buckets, internal = false) {
    if (!isSampled(this.config.sampling, internal) || !this.module) {
      return null;
    }

    return this.module.startHistogram(name, unit, buckets);
  }

  createGauge(name, unit = null, callback = () => {}, internal = false) {
    if (!isSampled(this.config.sampling, internal) || !this.module) {
      return null;
    }

    return this.module.createGauge(name, unit, callback);
  }

  attachMeterProvider(name, config) {
    if (!this.module) {
      WMANS.__int.q.push(SIGNAL_NAME, {
        type: "attachMeterProvider",
        attributes: {
          name,
          config,
        },
      });

      return;
    }

    this.module.attachMeterProvider(name, config);
  }

  processQueue() {
    const payloads = WMANS.__int.q.pop(SIGNAL_NAME);

    if (!payloads) {
      return;
    }

    payloads.forEach((payload) => {
      switch (payload.type) {
        case "recordCount":
          this.recordCount(
            payload.attributes.name,
            payload.attributes.value,
            payload.attributes.unit,
            payload.attributes.tags,
            payload.attributes.exporterConfig,
            payload.attributes.internal
          );

          break;
        case "recordHistogram":
          this.recordHistogram(
            payload.attributes.name,
            payload.attributes.value,
            payload.attributes.unit,
            payload.attributes.tags,
            payload.attributes.exporterConfig,
            payload.attributes.internal
          );

          break;
        case "attachMeterProvider":
          this.attachMeterProvider(
            payload.attributes.name,
            payload.attributes.config
          );

          break;

        default:
          break;
      }
    });
  }
}
