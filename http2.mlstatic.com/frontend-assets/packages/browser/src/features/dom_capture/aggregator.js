import { Aggregator as AggregatorBase } from "../../bases/aggregator";
import { getConfigurationValue } from "../../state/init";
import { isGetter } from "../../utils/object";
import { FEATURE_NAME } from "./constants";
import { pick } from "../../utils/pick";
import { METRICS } from "../../metrics/constants";

export class Aggregator extends AggregatorBase {
  constructor() {
    super({}, FEATURE_NAME);
    this.endpoint = getConfigurationValue(
      `instruments.features.${FEATURE_NAME}.endpoint`
    );
    this.local_config = getConfigurationValue(
      `instruments.features.${FEATURE_NAME}.mapped_attributes`
    );
  }

  getContext() {
    return super.getContext(FEATURE_NAME);
  }

  getHeaders() {
    return this.local_config.headers;
  }

  buildPayload() {
    const sharedContext = super.getSharedContext(FEATURE_NAME);
    const payload = Object.entries(this.local_config.headers).reduce(
      (acc, [key, value]) => {
        if (isGetter(this.local_config.headers, key)) {
          acc[key] = value;
        } else {
          acc[key] = sharedContext[value];
        }

        return acc;
      },
      {}
    );

    return { data: payload };
  }

  buildMetadataFromContext() {
    const sharedContext = super.getSharedContext(FEATURE_NAME);
    const collection = pick(sharedContext, this.local_config.metadata);

    collection.client_name = sharedContext[METRICS.LIBRARY_NAME];
    collection.client_version = sharedContext[METRICS.LIBRARY_VERSION];

    if (typeof collection.device === "string") {
      collection.device = collection.device.startsWith("/")
        ? collection.device.slice(1)
        : collection.device;
    }

    if (!Object.keys(collection).length) {
      throw new Error("Metrics not found");
    }

    return {
      name: FEATURE_NAME,
      data: collection,
    };
  }
}
