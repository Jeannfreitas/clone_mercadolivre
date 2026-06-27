export class Harvester {
  subscribers = [];

  config = {};

  constructor(config) {
    this.config = { ...this.config, ...config };

    if (this.config.enable) {
      this.start();
    }
  }

  start() {
    this.tickerTimeout = setTimeout(() => {
      this.harvest();
      this.start();
    }, this.config.flushTime);
  }

  harvest() {
    this.subscribers.forEach((herb) => {
      if (herb.harvest && typeof herb.harvest === "function") {
        herb.harvest();
      }
    });
  }

  subscribe(herb) {
    if (herb !== null) {
      this.subscribers.push(herb);
    }
  }
}
