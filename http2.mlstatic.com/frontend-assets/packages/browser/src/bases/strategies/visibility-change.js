import { BaseStrategy } from "./base";
import { getConfigurationValue } from "../../state/init";

export class VisibilityChangeStrategy extends BaseStrategy {
  static name = "visibility_change";

  constructor(aggregator, feature_name) {
    super(aggregator, feature_name);

    this.config = getConfigurationValue(
      `instruments.features.${feature_name}.strategies.visibility_change`
    );
    this.eventName = "pageRenderEvent";
  }

  run() {
    if (this.running) {
      return;
    }

    this.listener = {
      type: "visibilitychange",
      callback: () => {
        if (document.visibilityState === "hidden") {
          this.aggregator.harvest();
        }
      },
    };
    document.addEventListener(this.listener.type, this.listener.callback);
    this.running = true;
  }
}
