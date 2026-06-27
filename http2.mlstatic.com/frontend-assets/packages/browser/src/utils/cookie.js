export function getCookie(name, alt = null) {
  // eslint-disable-next-line security/detect-non-literal-regexp
  const match = new RegExp(`(^| )${name}=([^;]+)`).exec(document.cookie);

  return match ? match[2] : alt;
}

export function setCookie(name, value, attrs = {}) {
  document.cookie = `${name}=${value}; ${Object.keys(attrs)
    .map((key) => `${key}=${attrs[key]}`)
    .join("; ")}`;
}
