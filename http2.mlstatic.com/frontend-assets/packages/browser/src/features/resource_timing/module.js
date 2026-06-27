import { METRICS } from "../../metrics/constants";

export class Module {
  constructor(aggregator, config, domains = []) {
    this.aggregator = aggregator;
    this.config = config;
    this.domains = domains;

    if (window?.WMANS?.TMP?.resource_timing) {
      delete window.WMANS.TMP.resource_timing;
    }
  }

  start() {
    this.resourceObserver = new PerformanceObserver((list) => {
      const filteredList = list
        .getEntries()
        .filter((entry) =>
          this.config.metricSupport.includes(entry.initiatorType)
        );

      filteredList.forEach((entry) => this.attach(entry));
    });
    this.resourceObserver.observe({ type: "resource" });
  }

  attach(resource) {
    const { name, duration, startTime, initiatorType } = resource;
    const sharedContext = this.aggregator.getSharedContext();

    const attributes = {
      name,
      duration,
      startTime,
      initiatorType,
      fileType: this.getFileType(resource.name),
      size: this.getValue(resource),
      platform: sharedContext[METRICS.PLATFORM_ID],
      site: sharedContext[METRICS.SITE_ID],
      device: sharedContext[METRICS.DEVICE],
    };

    if (this.domains && this.domains.length > 0) {
      attributes.isFirstParty = this.domains.some((domainPattern) =>
        name.includes(domainPattern)
      );
    }

    this.aggregator.incrementToContext({
      name,
      attributes,
      startTime,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getValue(entry) {
    return entry.encodedBodySize && entry.encodedBodySize > 0
      ? entry.encodedBodySize
      : entry.transferSize;
  }

  getFileType(fileName) {
    let pathname = fileName;

    try {
      pathname = new URL(fileName).pathname;
    } catch (e) {
      // silent-catch
    }

    const extension = pathname
      .substring(pathname.lastIndexOf(".") + 1)
      .toLowerCase();

    return Object.keys(this.config.fileSupport).find((type) =>
      this.config.fileSupport[type].includes(extension)
    );
  }
}

if (window?.WMANS?.TMP) {
  window.WMANS.TMP.resource_timing = Module;
}
