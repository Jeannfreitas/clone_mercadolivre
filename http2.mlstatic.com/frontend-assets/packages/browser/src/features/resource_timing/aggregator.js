import { Aggregator as AggregatorBase } from "../../bases/aggregator";
import { FEATURE_NAME } from "./constants";
import { getConfigurationValue } from "../../state/init";
import { METRICS } from "../../metrics/constants";
import { globalScope } from "../../window/browser";
import { pick } from "../../utils/pick";

export class Aggregator extends AggregatorBase {
  constructor() {
    super({}, FEATURE_NAME);
    this.local_config = getConfigurationValue(
      `instruments.features.${FEATURE_NAME}.mapped_attributes`
    );
  }

  getContext() {
    return super.getContext(FEATURE_NAME);
  }

  makeSnapshot() {
    return super.makeSnapshot(FEATURE_NAME);
  }

  restoreSnapshot(snapshot) {
    super.restoreSnapshot(FEATURE_NAME, snapshot);
  }

  incrementToContext(value) {
    super.incrementToContext(FEATURE_NAME, METRICS.RESOURCE_TIMING, value);
  }

  getSize() {
    const localContext = super.getLocalContext(FEATURE_NAME);

    return localContext[METRICS.RESOURCE_TIMING]?.length ?? 0;
  }

  harvest() {
    if (this.getSize() === 0) {
      return;
    }

    const snapshot = this.makeSnapshot();

    const collection = pick(
      super.getSharedContext(FEATURE_NAME),
      this.local_config.metadata
    );

    if (globalScope.WMANS?.recordSpan) {
      globalScope.WMANS.recordSpan(
        `${FEATURE_NAME}`,
        snapshot[METRICS.RESOURCE_TIMING],
        { ...collection },
        true
      );
    }
  }
}
