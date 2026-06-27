/**
 * Utility functions for listening to browser lifecycle events
 */

/**
 * Register a callback for when DOM is ready
 * @param {Function} callback - Function to call when DOM is ready
 */
export function onDOMContentLoaded(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, { once: true });
  } else {
    // DOM is already loaded
    callback({ target: document });
  }
}

/**
 * Register a callback for when window fully loads
 * @param {Function} callback - Function to call when window loads
 */
export function onWindowLoad(callback) {
  if (document.readyState === "complete") {
    callback({ target: window });
  } else {
    window.addEventListener("load", callback, { once: true });
  }
}

/**
 * Register a callback for popstate/back-forward navigation
 * @param {Function} callback - Function to call on popstate
 */
export function onPopstateChange(callback) {
  window.addEventListener("popstate", callback);
}
