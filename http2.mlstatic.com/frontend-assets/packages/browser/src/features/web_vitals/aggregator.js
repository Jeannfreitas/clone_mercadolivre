import { Aggregator as AggregatorBase } from "../../bases/aggregator";
import { FEATURE_NAME, METRICS, INITIATIVE_WEB_VITALS } from "./constants";
import { globalScope } from "../../window/browser";
import { getConfigurationValue } from "../../state/init";

export class Aggregator extends AggregatorBase {
  constructor() {
    super({}, FEATURE_NAME);
    this.local_config = getConfigurationValue(
      `instruments.features.${FEATURE_NAME}.mapped_attributes`
    );
    this.buckets = getConfigurationValue(
      `instruments.features.${FEATURE_NAME}.histograms`
    );

    this.sentValues = {};
  }

  getContext() {
    return super.getContext(FEATURE_NAME);
  }

  getSharedContext() {
    return super.getSharedContext();
  }

  makeSnapshot() {
    return super.makeSnapshot(FEATURE_NAME);
  }

  incrementToContext(key, value) {
    super.incrementToContext(FEATURE_NAME, key, value);
  }

  getGlobalScope() {
    return globalScope;
  }

  harvest() {
    const metrics = this.getContext();

    if (!window.WMANS?.startHistogram || !window.WMANS.recordHistogram) {
      return;
    }

    if (!this.local_config || !this.local_config.required) {
      return;
    }

    if (!this.sentValues) {
      this.sentValues = {};
    }

    this.local_config.required.forEach((metricName) => {
      if (!metricName) {
        return;
      }

      const metricKey = metricName.replace(/-/g, "_").toLowerCase();

      const metricValue = metrics[metricKey];

      if (metricValue !== undefined) {
        const currentValues = Array.isArray(metricValue)
          ? metricValue
          : [metricValue];

        if (!this.sentValues[metricKey]) {
          this.sentValues[metricKey] = [];
        }

        let metricBuckets = [];

        try {
          if (this.buckets && this.buckets[metricName]) {
            metricBuckets = this.buckets[metricName].buckets;
          }
          // eslint-disable-next-line no-empty
        } catch (error) {}

        const newValues = currentValues.filter(
          (value) => !this.sentValues[metricKey].includes(value)
        );

        if (newValues.length > 0) {
          newValues.forEach((value) => {
            try {
              const histogram = window.WMANS.startHistogram(
                `${INITIATIVE_WEB_VITALS}.${metricKey}`,
                metricName === METRICS.CLS ? "number" : "ms",
                metricBuckets
              );

              if (histogram) {
                histogram.record(value);

                this.sentValues[metricKey].push(value);
              }
              // eslint-disable-next-line no-empty
            } catch (error) {}
          });
        }
      }
    });
  }
}
