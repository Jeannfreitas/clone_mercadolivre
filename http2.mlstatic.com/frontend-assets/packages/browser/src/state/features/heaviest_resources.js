import { FEATURE_NAMES } from "../../features/constants";
import { METRICS } from "../../metrics/constants";

export const heaviestResources = {
  enabled: true,
  auto_instrument: true,
  harvester: true,
  sampling: 1.0,
  features_required: [FEATURE_NAMES.sessionTrace],
  mapped_attributes: {
    metadata: [METRICS.SITE_ID, METRICS.PLATFORM_ID, METRICS.DEVICE],
    fileSupport: {
      img: [
        "apng",
        "avif",
        "gif",
        "jpg",
        "jpeg",
        "jfif",
        "pjpeg",
        "pjp",
        "png",
        "svg",
        "webp",
      ],
      script: ["js"],
      style: ["css"],
    },
    thresholdEntries: {
      img: 250000,
      script: 170000,
      style: 50000,
    },
  },
  strategies: {
    visibility_change: { enabled: true },
  },
};
