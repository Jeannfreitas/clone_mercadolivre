export function getSessionReplayEndpoint(siteId) {
  const availableLocations = ["mla", "mlb", "mlm"];
  const defaultLocation = "rola";

  let finalLocation = defaultLocation;

  if (siteId) {
    finalLocation = availableLocations.some(
      (location) => location.toLowerCase() === siteId.toLowerCase()
    )
      ? siteId.toLowerCase()
      : defaultLocation;
  }

  return `__eventsDomain__/v1/media-storage-service/session-replay-admin.session-replay-store-${finalLocation}/assets`;
}
