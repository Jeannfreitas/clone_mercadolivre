import { FEATURE_NAMES } from "../../features/constants";

export const errorJs = {
  enabled: true,
  auto_instrument: true,
  harvester: false,
  sampling: 1.0,
  features_required: [FEATURE_NAMES.sessionTrace],
  load_public_functions: true,
};
