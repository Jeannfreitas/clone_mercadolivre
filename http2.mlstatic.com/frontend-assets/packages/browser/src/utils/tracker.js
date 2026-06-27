import { getIndexedAttributes } from "../state/init";
import { getWMANS } from "../window/browser";

const WMANS = getWMANS();

export const tracker = (name, event, tags = {}) => {
  const indexedAttributes = getIndexedAttributes();
  if (WMANS?.recordCount) {
    WMANS.recordCount(
      `${name}.${event}`,
      1,
      "number",
      {
        ...indexedAttributes,
        ...tags,
      },
      null, // Match test expectations
      true
    );
  }
};
