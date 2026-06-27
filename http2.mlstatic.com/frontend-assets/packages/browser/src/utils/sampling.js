export function isSampled(samplingRate = 1.0, internal = false) {
  const crypto = window.crypto || window.msCrypto;
  const array = new Uint32Array(1);
  const randomValue = crypto.getRandomValues(array) % 100;
  const normalizedSamplingRate = samplingRate * 100;

  return randomValue < normalizedSamplingRate || internal;
}
