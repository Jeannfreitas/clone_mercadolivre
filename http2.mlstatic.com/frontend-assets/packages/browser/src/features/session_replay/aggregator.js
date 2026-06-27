import { Aggregator as AggregatorBase } from "../../bases/aggregator";
import { FEATURE_NAME } from "./constants";
import { METRICS } from "../../metrics/constants";
import { pick } from "../../utils/pick";
import { postWithFetch } from "../../utils/send";
import { getConfigurationValue } from "../../state/init";
import { isGetter } from "../../utils/object";
import { getSessionReplayEndpoint } from "../../utils/endpoints";

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
    const snapshot = this.getContext(FEATURE_NAME);

    super.clearSubContext(FEATURE_NAME, METRICS.SESSION_REPLAY_ASSETS);

    return snapshot;
  }

  incrementAssets(value) {
    super.incrementToContext(
      FEATURE_NAME,
      METRICS.SESSION_REPLAY_ASSETS,
      value
    );
    this.runStrategies();
  }

  addCustomAttribute(value) {
    super.incrementToContext(FEATURE_NAME, METRICS.CUSTOM_ATTRIBUTES, value);
  }

  /* extract only the shared metrics that are selected in metadata config */
  buildMetadataFromContext() {
    const collection = pick(
      super.getSharedContext(FEATURE_NAME),
      this.local_config.metadata
    );

    if (!Object.keys(collection).length) {
      throw new Error("Metrics not found");
    }

    return {
      name: FEATURE_NAME,
      data: collection,
    };
  }

  /* return the size of session_replay_assets payload */
  getSize() {
    const localContext = super.getLocalContext(FEATURE_NAME);

    return localContext[METRICS.SESSION_REPLAY_ASSETS]?.length ?? 0;
  }

  harvest() {
    if (this.getSize() === 0) {
      return;
    }

    const snapshot = this.makeSnapshot();
    const payload = this.buildPayload(snapshot);

    const endpoint = getSessionReplayEndpoint(snapshot[METRICS.SITE_ID]);

    postWithFetch(`${endpoint}`, JSON.stringify(payload), false);
  }

  buildPayload(snapshot) {
    const payload = Object.entries(this.local_config.headers).reduce(
      (acc, [key, value]) => {
        if (isGetter(this.local_config.headers, key)) {
          acc[key] = value;
        } else {
          acc[key] = super.getSharedContext(FEATURE_NAME)[value];
        }

        return acc;
      },
      {}
    );

    if (snapshot[METRICS.CUSTOM_ATTRIBUTES]) {
      snapshot[METRICS.CUSTOM_ATTRIBUTES].forEach((element) => {
        payload[element.key] = element.value;
      });
    }

    payload.asset = snapshot[METRICS.SESSION_REPLAY_ASSETS];

    return { data: payload };
  }
}
