import { BaseStrategy } from "./base";
import { getConfigurationValue } from "../../state/init";

export class PayloadStrategy extends BaseStrategy {
  static name = "payload";

  constructor(aggregator, feature_name) {
    super(aggregator, feature_name);

    this.config = getConfigurationValue(
      `instruments.features.${feature_name}.strategies.payload`
    );
  }

  run() {
    if (this.aggregator.getSize() >= (this.config?.exportBufferSize ?? 0)) {
      this.aggregator.harvest();
    }
  }
}
