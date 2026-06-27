const callbacks = [];

let fired = false;

function runCallbacks() {
  // Idempotent: avoid double-firing when visibilitychange + pagehide overlap.
  if (fired) {
    return;
  }

  fired = true;
  callbacks.forEach((cb) => {
    try {
      cb();
    } catch (_) {
      // Silent catch: one failing signal must not block others
    }
  });
}

/**
 * Register a callback to execute when the page becomes hidden or is being unloaded.
 *
 * Listens to both `visibilitychange` (document) and `pagehide` (window) — required
 * because iOS Safari and some bfcache transitions do not reliably fire
 * `visibilitychange→hidden`. Using both maximizes flush coverage. Callbacks are
 * de-duplicated via the `fired` flag so they execute at most once per page lifecycle.
 *
 * Each callback is isolated by try/catch to prevent one failing callback from
 * blocking others.
 *
 * @param {Function} callback - Function to call when the page is hidden / unloading.
 */
export function onPageHide(callback) {
  if (callbacks.length === 0) {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        runCallbacks();
      }
    });

    // `pagehide` covers iOS Safari + bfcache cases where visibilitychange does not fire.
    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("pagehide", runCallbacks);
    }
  }

  callbacks.push(callback);
}
