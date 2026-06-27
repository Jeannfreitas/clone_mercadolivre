import { otel } from "./otel";
import { features } from "./features";
import { signals } from "./signals";

export const baseConfig = {
  enable: true,
  harvester: {
    enable: true,
    flushTime: 5000,
  },
  service_worker_url: "http://localhost:10001/signal_service_worker.js",
  custom_attributes: {},
  instruments: {
    features,
    signals,
  },
  otel,
};
