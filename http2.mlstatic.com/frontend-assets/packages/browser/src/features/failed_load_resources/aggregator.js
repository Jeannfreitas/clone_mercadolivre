import { Aggregator as AggregatorBase } from "../../bases/aggregator";
import { FEATURE_NAME } from "./constants";
import { METRICS } from "../../metrics/constants";
import { globalScope } from "../../window/browser";
import { pick } from "../../utils/pick";
import { getConfigurationValue } from "../../state/init";

export class Aggregator extends AggregatorBase {
  constructor() {
    super({}, FEATURE_NAME);

    this.local_config = getConfigurationValue(
      `instruments.features.${FEATURE_NAME}.mapped_attributes`
    );
  }

  incrementToContext(value) {
    super.incrementToContext(FEATURE_NAME, METRICS.AVAILABILITY_FAILURE, value);
  }

  /* return the size of session_replay payload */
  getSize() {
    const localContext = super.getLocalContext(FEATURE_NAME);

    return localContext[METRICS.AVAILABILITY_FAILURE]?.length ?? 0;
  }

  makeSnapshot() {
    return super.makeSnapshot(FEATURE_NAME);
  }

  harvest() {
    if (this.getSize() === 0) {
      return;
    }

    const snapshot = this.makeSnapshot();
    const data = snapshot[METRICS.AVAILABILITY_FAILURE];

    const collection = pick(
      super.getSharedContext(FEATURE_NAME),
      this.local_config.metadata
    );

    this.send(collection, data);
  }

  send(collection, data) {
    if (globalScope.WMANS?.recordSpan) {
      globalScope.WMANS.recordSpan(
        `${FEATURE_NAME}`,
        data,
        { ...collection },
        true,
        {
          code: 2, // is Error code https://open-telemetry.github.io/opentelemetry-js/enums/_opentelemetry_api.SpanStatusCode.html
          message: "Failed to load resource",
        }
      );
    }
  }
}
