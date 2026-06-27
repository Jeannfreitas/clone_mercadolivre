export function postWithFetch(url, payload, keepalive = true) {
  window
    .fetch(url, {
      method: "POST",
      body: payload,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      keepalive,
    })
    .then(async (response) => response.text())
    .catch((error) => error);
}

export async function getWithFetch(url, options = {}) {
  return window.fetch(url, options);
}

export function beaconWithFetchFallback(url, payload) {
  const payloadString = JSON.stringify(payload);

  if (
    !(
      window.navigator &&
      window.navigator.sendBeacon &&
      window.navigator.sendBeacon(url, payloadString)
    )
  ) {
    postWithFetch(url, payloadString);
  }
}
