export function isSafeExternalUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

export function externalLinkProps(value) {
  return isSafeExternalUrl(value)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
}
