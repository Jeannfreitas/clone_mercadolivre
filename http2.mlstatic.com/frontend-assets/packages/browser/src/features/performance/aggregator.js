import { Aggregator as AggregatorBase } from "../../bases/aggregator";
import { FEATURE_NAME } from "./constants";

export class Aggregator extends AggregatorBase {
  constructor() {
    super({}, FEATURE_NAME);
  }
}
