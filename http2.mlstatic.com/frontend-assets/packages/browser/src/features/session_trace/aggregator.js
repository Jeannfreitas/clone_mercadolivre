import { Aggregator as AggregatorBase } from "../../bases/aggregator";
import { FEATURE_NAME } from "./constants";

export class Aggregator extends AggregatorBase {
  constructor() {
    super({}, FEATURE_NAME);
  }

  getEvents() {
    const data = this.getSharedContext();
    const events = [];

    Object.keys(data).forEach((key) => {
      events.push({
        name: key,
        attributes: {
          name: key,
          value: data[key],
        },
      });
    });

    return events;
  }
}
