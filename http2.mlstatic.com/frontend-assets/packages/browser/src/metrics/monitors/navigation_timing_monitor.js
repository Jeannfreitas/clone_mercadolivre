import { METRICS } from "../constants";
import { toFixedNumber } from "../../utils/number";

// eslint-disable-next-line complexity
const loadNavigationTimingMonitor = (aggregator) => {
  const [navigationTiming] = window.performance.getEntriesByType("navigation");

  if (navigationTiming) {
    const {
      domComplete,
      domContentLoadedEventEnd,
      domContentLoadedEventStart,
      domInteractive,
      loadEventEnd,
      loadEventStart,
      redirectCount,
      requestStart,
      responseStart,
      responseEnd,
      fetchStart,
      workerStart,
      transferSize,
      encodedBodySize,
      domainLookupEnd,
      domainLookupStart,
      redirectEnd,
      redirectStart,
      type: navigationType,
    } = navigationTiming;

    aggregator(METRICS.FETCH_TIME, toFixedNumber(responseEnd - fetchStart));
    aggregator(
      METRICS.WORKER_TIME,
      workerStart > 0 ? toFixedNumber(responseEnd - workerStart) : 0
    );
    aggregator(METRICS.TOTAL_TIME, toFixedNumber(responseEnd - requestStart));
    aggregator(
      METRICS.DOWNLOAD_TIME,
      toFixedNumber(responseEnd - responseStart)
    );
    aggregator(
      METRICS.HEADER_SIZE,
      toFixedNumber(transferSize - encodedBodySize || 0)
    );
    aggregator(
      METRICS.DNS_LOOKUP_TIME,
      toFixedNumber(domainLookupEnd - domainLookupStart)
    );
    aggregator(
      METRICS.REDIRECT_TIME,
      toFixedNumber(redirectEnd - redirectStart)
    );

    if (redirectCount) {
      aggregator(METRICS.REDIRECT_COUNT, redirectCount);
    }

    if (domComplete) {
      aggregator(METRICS.DOM_COMPLETE, toFixedNumber(domComplete));
    }

    if (domInteractive) {
      aggregator(METRICS.DOM_INTERACTIVE, toFixedNumber(domInteractive));
    }

    if (domContentLoadedEventEnd) {
      aggregator(
        METRICS.DOM_CONTENT_LOADED_END,
        toFixedNumber(domContentLoadedEventEnd)
      );
    }

    if (domContentLoadedEventStart) {
      aggregator(
        METRICS.DOM_CONTENT_LOADED_START,
        toFixedNumber(domContentLoadedEventStart)
      );
    }

    if (domContentLoadedEventStart && domContentLoadedEventEnd) {
      aggregator(
        METRICS.DOM_CONTENT_LOADED,
        toFixedNumber(domContentLoadedEventEnd - domContentLoadedEventStart)
      );
    }

    if (loadEventEnd) {
      aggregator(METRICS.ONLOAD_END, toFixedNumber(loadEventEnd));
    }

    if (loadEventStart) {
      aggregator(METRICS.ONLOAD_START, toFixedNumber(loadEventStart));
    }

    if (loadEventStart && loadEventEnd) {
      aggregator(METRICS.ONLOAD, toFixedNumber(loadEventEnd - loadEventStart));
    }

    if (requestStart) {
      aggregator(METRICS.REQUEST_START, toFixedNumber(requestStart));
    }

    if (responseStart) {
      aggregator(METRICS.RESPONSE_START, toFixedNumber(responseStart));
    }

    if (responseEnd) {
      aggregator(METRICS.RESPONSE_END, toFixedNumber(responseEnd));
    }

    if (responseStart && responseEnd) {
      aggregator(
        METRICS.RESPONSE_TIME,
        toFixedNumber(responseEnd - responseStart)
      );
    }

    if (navigationType) {
      aggregator(METRICS.NAVIGATION_TYPE, navigationType);
    }
  }
};

export { loadNavigationTimingMonitor };
