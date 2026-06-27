export class BaseStrategy {
  static name = "base";

  constructor(aggregator, feature_name) {
    this.aggregator = aggregator;
    this.listener = null;
    this.feature_name = feature_name;
    this.running = false;
  }

  run() {
    throw new Error("run() function must be implemented");
  }

  removeListener() {
    if (this.listener) {
      document.removeEventListener(this.listener.type, this.listener.callback);
    }
  }
}
