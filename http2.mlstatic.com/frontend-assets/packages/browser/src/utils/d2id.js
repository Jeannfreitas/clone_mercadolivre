const D2ID_REGEXP =
  /(?:_d2id=)([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})/;

export function extractD2id(cookies) {
  if (!cookies) {
    return null;
  }

  const match = cookies.match(D2ID_REGEXP);

  return match ? match[1] : match;
}
