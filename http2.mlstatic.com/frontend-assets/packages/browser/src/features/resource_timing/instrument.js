import { Instrument as InstrumentBase } from "../../bases/instrument";
import { FEATURE_NAME } from "./constants";
import { getWMANS } from "../../window/browser";
import { Aggregator } from "./aggregator";
import { getConfigurationValue } from "../../state/init";
import { FIRST_PARTY_DOMAIN_PATTERNS } from "../../utils/mercado-domains";

const WMANS = getWMANS();

export class Instrument extends InstrumentBase {
  constructor() {
    const aggregator = new Aggregator();

    super(aggregator, FEATURE_NAME);
    this.start = this.start.bind(this);
    this.meliDomains = FIRST_PARTY_DOMAIN_PATTERNS;
    this.config = getConfigurationValue(
      `instruments.features.${FEATURE_NAME}.mapped_attributes`
    );

    if (this.auto) {
      this.start();
    }

    if (this.loadFunctions) {
      this.loadPublicFunctions();
    }
  }

  loadPublicFunctions() {
    WMANS.resource_timing = {
      start: () => this.start(),
    };
  }

  start() {
    try {
      void import("./module")
        .then(({ Module: ResourceTiming }) => {
          this.module = new ResourceTiming(
            this.aggregator,
            this.config,
            this.meliDomains
          );
          this.module.start();
        })
        .catch(() => {
          this.loadLegacyModule(
            [this.aggregator, this.config, this.meliDomains],
            () => this.startModule()
          );
        });
    } catch (e) {
      this.loadLegacyModule(
        [this.aggregator, this.config, this.meliDomains],
        () => this.startModule()
      );
    }
  }

  startModule() {
    this.module.start();
  }
}
