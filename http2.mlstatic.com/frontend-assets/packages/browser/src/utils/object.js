export function isGetter(obj, key) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, key);

  return !!descriptor && typeof descriptor.get === "function";
}
