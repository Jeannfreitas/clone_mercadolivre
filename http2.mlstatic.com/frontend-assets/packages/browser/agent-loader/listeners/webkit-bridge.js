/**
 * Returns true if the window error event originated from the native WebKit bridge.
 * Detection uses two signals (either is sufficient):
 *   1. error.name === 'NordicNativeActionError'
 *   2. message is a JSON string with a known webkit bridge error code
 *
 * @param {PromiseRejectionEvent} error
 * @returns {boolean}
 */
export function isWebKitBridgeError(error) {
  if (!error?.code && !error?.reason?.code) {
    return false;
  }

  if (error.code === "native_code" || error.code === "timeout_code") {
    return true;
  }

  if (
    error.reason?.code === "native_code" ||
    error.reason?.code === "timeout_code"
  ) {
    return true;
  }

  return false;
}

/**
 * Builds an enriched event-like object from a WebKit bridge ErrorEvent.
 * The webkitBridgeError field exposes the parsed { code, data } payload.
 * Falls back to { code: 'native_code', data: null } when the message is not
 * parseable (e.g. detected only via error.name).
 *
 * @param {ErrorEvent} event
 * @returns {object}
 */
export function buildWebKitBridgeError(event) {
  return {
    filename: "webkit-bridge",
    message: JSON.stringify(event.data ?? event.reason?.data),
    lineno: event.lineno ?? event.reason?.lineno,
    colno: event.colno ?? event.reason?.colno,
    webkitBridgeError: event.data ?? event.reason?.data,
  };
}
