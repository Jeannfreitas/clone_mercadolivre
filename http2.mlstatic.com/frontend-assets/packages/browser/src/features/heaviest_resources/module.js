import { METRICS } from "../../metrics/constants";

export class Module {
  constructor(aggregator, config, domains = []) {
    this.aggregator = aggregator;
    this.config = config;
    this.domains = domains;

    if (window?.WMANS?.TMP?.heaviest_resources) {
      delete window.WMANS.TMP.heaviest_resources;
    }
  }

  start() {
    this.resourceObserver = new PerformanceObserver((list) => {
      const seenNames = new Set();
      const filteredList = list
        .getEntries()
        .filter(this.filterEntries(seenNames));

      filteredList.forEach((entry) => this.attach(entry));
    });
    this.resourceObserver.observe({ type: "resource" });
  }

  filterEntries = (seenNames) => (entry) => {
    const fileType = this.getFileType(entry.name);
    const threshold = this.getThreshold(fileType);
    const value = this.getValue(entry);

    if (
      this.isSupportedFileType(fileType) &&
      value > threshold &&
      !seenNames.has(entry.name)
    ) {
      seenNames.add(entry.name);

      return true;
    }

    return false;
  };

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

  getThreshold(fileType) {
    return this.config.thresholdEntries[fileType] || 0;
  }

  isSupportedFileType(fileType) {
    return Object.keys(this.config.fileSupport).includes(fileType);
  }

  // eslint-disable-next-line class-methods-use-this
  getValue(entry) {
    return entry.encodedBodySize && entry.encodedBodySize > 0
      ? entry.encodedBodySize
      : entry.transferSize;
  }

  attach = (resource) => {
    const fileType = this.getFileType(resource.name);
    const threshold = this.getThreshold(fileType);
    const value = this.getValue(resource);

    const { name, initiatorType, duration } = resource;

    let isFirstParty = false;

    if (this.domains && this.domains.length > 0) {
      isFirstParty = this.domains.some((domainPattern) =>
        name.includes(domainPattern)
      );
    }

    const sharedContext = this.aggregator.getSharedContext();

    this.aggregator.incrementToContext({
      name,
      fileType,
      size: value,
      threshold,
      isFirstParty,
      duration,
      platform: sharedContext[METRICS.PLATFORM_ID],
      site: sharedContext[METRICS.SITE_ID],
      device: sharedContext[METRICS.DEVICE],
      resourceType: initiatorType,
    });
  };
}

if (window?.WMANS?.TMP) {
  window.WMANS.TMP.heaviest_resources = Module;
}
