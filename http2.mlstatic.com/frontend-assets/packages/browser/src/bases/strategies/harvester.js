import { BaseStrategy } from "./base";
import { getConfigurationValue } from "../../state/init";

export class HarvesterStrategy extends BaseStrategy {
  static name = "harvester";

  constructor(aggregator, feature_name) {
    super(aggregator, feature_name);
    this.config = getConfigurationValue(
      `instruments.features.${feature_name}.strategies.harvester`
    );
  }

  run() {
    if (this.running) {
      return;
    }

    this.harvest();
    this.running = true;
  }

  harvest() {
    setTimeout(() => {
      this.aggregator.harvest();
      this.harvest();
    }, this.config?.exportTimeSeconds ?? 1);
  }
}
