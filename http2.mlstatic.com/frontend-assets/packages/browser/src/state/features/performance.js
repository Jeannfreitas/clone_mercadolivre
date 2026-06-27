import { FEATURE_NAMES } from "../../features/constants";

export const performance = {
  enabled: true,
  auto_instrument: true,
  harvester: false,
  sampling: 1.0,
  features_required: [FEATURE_NAMES.sessionTrace],
};
