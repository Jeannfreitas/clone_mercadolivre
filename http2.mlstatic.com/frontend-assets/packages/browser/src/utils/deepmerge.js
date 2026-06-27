export function deepmerge(target, source) {
  const output = { ...target };
  const keys = Object.keys(source);

  keys.forEach((key) => {
    if (typeof source[key] === "object" && key in target) {
      output[key] = deepmerge(target[key], source[key]);
    } else {
      output[key] = source[key];
    }
  });

  return output;
}
