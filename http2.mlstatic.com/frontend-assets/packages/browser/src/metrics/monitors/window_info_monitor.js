import { METRICS } from "../constants";

const loadWindowInfoMonitor = (aggregator) => {
  const { innerWidth, innerHeight, devicePixelRatio } = window;

  if (innerWidth) {
    aggregator(METRICS.WINDOW_WIDTH, `${innerWidth}`);
  }

  if (innerHeight) {
    aggregator(METRICS.WINDOW_HEIGHT, `${innerHeight}`);
  }

  if (devicePixelRatio) {
    aggregator(METRICS.DEVICE_PIXEL_RATIO, devicePixelRatio);
  }
};

export { loadWindowInfoMonitor };
