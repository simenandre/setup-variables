import { invariant } from './utils';

export function isMatch(value: string, matchValue: string): boolean {
  return value === matchValue || Boolean(value.match(matchValue));
}

export function matcher(
  key: string,
  map: Record<string, string>,
): string {
  const mapKeys = Object.keys(map);
  let m = mapKeys.find(mapKey => isMatch(key, mapKey));

  if (!m && map['_default']) {
    return map['_default'];
  }

  invariant(m, `did not find mapped value for ${key}`);

  return map[m];
}
