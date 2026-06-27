import {
  MAX_BUFFER_SIZE,
  CLEANUP_INTERVAL_MS,
  MIN_PROCESSED_BEFORE_CLEANUP,
} from "./constants";
import { isWebKitBridgeError, buildWebKitBridgeError } from "./webkit-bridge";

let unhandled = [];

const unhandledSubs = new Set();
let cleanupIntervalId = null;
let processedIndex = 0;

export const listenUnhandledErrors = () => {
  // eslint-disable-next-line no-underscore-dangle
  const unhandledManager = window.WMANS.__int.subs.unhandled;

  unhandledManager.push = (err) => {
    if (unhandled.length >= MAX_BUFFER_SIZE) {
      const removeCount = Math.floor(MAX_BUFFER_SIZE / 2);

      unhandled = unhandled.slice(removeCount);
      processedIndex = Math.max(0, processedIndex - removeCount);
    }

    const idx = unhandled.length;

    unhandled.push(err);
    unhandledSubs.forEach((cb) => {
      cb(err, idx);
    });
  };

  unhandledManager.getFrom = (index = 0) => unhandled.slice(index);

  unhandledManager.subscribe = (cb) => {
    unhandledSubs.add(cb);

    return () => unhandledSubs.delete(cb);
  };

  unhandledManager.length = () => unhandled.length;

  unhandledManager.markProcessed = (index) => {
    processedIndex = Math.max(processedIndex, index + 1);
  };

  unhandledManager.cleanup = () => {
    if (processedIndex >= MIN_PROCESSED_BEFORE_CLEANUP) {
      unhandled = unhandled.slice(processedIndex);
      processedIndex = 0;
    }
  };

  unhandledManager.stopCleanup = () => {
    if (cleanupIntervalId !== null) {
      clearInterval(cleanupIntervalId);
      cleanupIntervalId = null;
    }
  };

  cleanupIntervalId = setInterval(() => {
    unhandledManager.cleanup();
  }, CLEANUP_INTERVAL_MS);

  window.addEventListener(
    "unhandledrejection",
    (e) => {
      if (isWebKitBridgeError(e)) {
        unhandledManager.push(buildWebKitBridgeError(e));
        return;
      }
      unhandledManager.push(e);
    },
    !0
  );
};
