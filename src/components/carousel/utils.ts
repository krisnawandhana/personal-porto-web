export function truncate(str?: string, max = 140) {
  if (!str) return "";
  return str.length > max ? str.slice(0, max - 1) + "…" : str;
}
