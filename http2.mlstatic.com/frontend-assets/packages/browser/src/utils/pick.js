export function pick(source = {}, keys = []) {
  return keys.reduce((acc, key) => {
    // eslint-disable-next-line no-prototype-builtins
    if (source.hasOwnProperty(key)) {
      acc[key] = source[key];
    }

    return acc;
  }, {});
}
