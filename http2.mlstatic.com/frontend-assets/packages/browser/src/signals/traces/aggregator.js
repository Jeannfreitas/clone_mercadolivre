import { Aggregator as AggregatorBase } from "../../bases/aggregator";
import { SIGNAL_NAME } from "./constants";

export class Aggregator extends AggregatorBase {
  constructor() {
    super({}, SIGNAL_NAME);
  }
}
