import {
  MainQueue,
  listenUnhandledErrors,
  listenErrors,
  initWMANS,
  handleNR,
} from "./agent-loader";

if (!window?.WMANS) {
  (function () {
    initWMANS(MainQueue);
    listenUnhandledErrors();
    listenErrors();
    handleNR();
    try {
      void import("./src")
        .then(({ Agent }) => {
          // eslint-disable-next-line no-new
          new Agent();
        })
        .catch(() => {
          // silent error
        });
    } catch (e) {
      const script = document.createElement("script");

      script.src = `https://http2.mlstatic.com/frontend-assets/web-monitoring/__webMonitoringVersion__/bases.min.js`;
      script.type = "module";
      script.onload = () => {
        if (window.WMANS.TMP?.agent) {
          const Module = window.WMANS.TMP.agent;

          this.module = new Module();
        }
      };
      document.head.appendChild(script);
    }
  })();
}
