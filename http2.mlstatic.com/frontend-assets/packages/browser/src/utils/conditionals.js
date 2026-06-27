export function isNil(value) {
  return (
    value === null ||
    value === undefined ||
    value === "null" ||
    value === "undefined" ||
    value === ""
  );
}
