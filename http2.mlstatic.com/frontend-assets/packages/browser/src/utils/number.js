const BIGQUERY_MAX_DECIMALS = 6;

export function toFixedNumber(value, fractionDigits = BIGQUERY_MAX_DECIMALS) {
  if (
    Number.isNaN(value) ||
    !value ||
    Number.isInteger(value) ||
    typeof value === "string"
  ) {
    return value;
  }

  return parseFloat(value.toFixed(fractionDigits));
}
