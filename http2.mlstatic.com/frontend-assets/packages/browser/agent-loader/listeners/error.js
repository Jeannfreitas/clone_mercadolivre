import {
  MAX_BUFFER_SIZE,
  CLEANUP_INTERVAL_MS,
  MIN_PROCESSED_BEFORE_CLEANUP,
} from "./constants";
import { isWebKitBridgeError, buildWebKitBridgeError } from "./webkit-bridge";

let errors = [];

const errorSubs = new Set();

let cleanupIntervalId = null;
let processedIndex = 0;

export const listenErrors = () => {
  // eslint-disable-next-line no-underscore-dangle
  const errorManager = window.WMANS.__int.subs.error;

  errorManager.push = (err) => {
    if (errors.length >= MAX_BUFFER_SIZE) {
      const removeCount = Math.floor(MAX_BUFFER_SIZE / 2);

      errors = errors.slice(removeCount);
      processedIndex = Math.max(0, processedIndex - removeCount);
    }

    const idx = errors.length;

    errors.push(err);
    errorSubs.forEach((cb) => {
      cb(err, idx);
    });
  };

  errorManager.getFrom = (index = 0) => errors.slice(index);

  errorManager.subscribe = (cb) => {
    errorSubs.add(cb);

    return () => errorSubs.delete(cb);
  };

  errorManager.length = () => errors.length;

  errorManager.markProcessed = (index) => {
    processedIndex = Math.max(processedIndex, index + 1);
  };

  errorManager.cleanup = () => {
    if (processedIndex >= MIN_PROCESSED_BEFORE_CLEANUP) {
      errors = errors.slice(processedIndex);
      processedIndex = 0;
    }
  };

  errorManager.stopCleanup = () => {
    if (cleanupIntervalId !== null) {
      clearInterval(cleanupIntervalId);
      cleanupIntervalId = null;
    }
  };

  cleanupIntervalId = setInterval(() => {
    errorManager.cleanup();
  }, CLEANUP_INTERVAL_MS);

  window.addEventListener(
    "error",
    (e) => {
      if (isWebKitBridgeError(e)) {
        errorManager.push(buildWebKitBridgeError(e));

        return;
      }

      errorManager.push(e);
    },
    !0
  );
};
