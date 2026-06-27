import { METRICS } from "../constants";
import { supportsFetchApi } from "../../utils/support";
import { getWithFetch } from "../../utils/send";

const xCDN = {
  g: "google",
  a: "akamai",
};

const loadPixelInfoMonitor = (aggregator) => {
  if (!supportsFetchApi()) {
    return;
  }

  try {
    const fetchInit = performance.now();

    getWithFetch("https://http2.mlstatic.com/cdn/ping.gif")
      .then((res) => {
        const fetchEnd = performance.now();
        const fetchDuration = fetchEnd - fetchInit;

        aggregator(METRICS.CDN_FETCH_DURATION, fetchDuration);

        if (res.headers.has("x-cdn")) {
          const cdn = res.headers.get("x-cdn");

          aggregator(METRICS.X_CDN, xCDN[cdn]);
        }
      })
      .catch(() => {
        window.WMANS?.recordCount(
          "performance.cdn.error",
          1,
          "times",
          {},
          null,
          true
        );
      });
  } catch (e) {
    // silent: window.fetch threw synchronously (e.g. patched by extension)
  }
};

export { loadPixelInfoMonitor };
