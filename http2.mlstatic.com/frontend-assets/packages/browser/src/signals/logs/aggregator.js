import { Aggregator as AggregatorBase } from "../../bases/aggregator";
import { SIGNAL_NAME, KEY } from "./constants";

export class Aggregator extends AggregatorBase {
  static selectedExporter = "default";

  constructor() {
    super({}, SIGNAL_NAME);
    this.exporters = {};
  }

  addExporter(name, exporter) {
    if (this.exporters[name]) {
      return;
    }

    this.exporters[name] = exporter;
  }

  addInternal(internal) {
    this.internal = internal;
  }

  setSelectedExporter(exporter) {
    Aggregator.selectedExporter = exporter;
  }

  onEmit(logRecord) {
    if (Object.keys(this.exporters).length === 0) {
      return;
    }

    this.incrementToContext(
      SIGNAL_NAME,
      `${KEY}-${Aggregator.selectedExporter}`,
      logRecord
    );
  }

  forceFlush() {
    if (Object.keys(this.exporters).length === 0) {
      return;
    }

    this.harvest();
  }

  shutdown() {
    this.forceFlush();
  }

  harvest() {
    const localContext = super.getLocalContext(SIGNAL_NAME);
    const exporterNames = Object.keys(this.exporters);

    super.clearContext(SIGNAL_NAME);

    exporterNames.forEach((exporterName) => {
      if (
        !localContext?.[`${KEY}-${exporterName}`] ||
        localContext[`${KEY}-${exporterName}`].length === 0
      ) {
        return;
      }

      // eslint-disable-next-line no-underscore-dangle
      void this.internal._export(
        this.exporters[exporterName],
        localContext[`${KEY}-${exporterName}`]
      );
    });
  }
}
