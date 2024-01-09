export default function cleanSet(set, startString) {
  if (!set || !startString) {
    return '';
  }
  const allPart = [];
  for (const elem of set.values()) {
    if (typeof elem === 'string' && elem.startsWith(startString)) {
      const sub = elem.substring(startString.length);
      if (sub && sub !== elem) {
        allPart.push(sub);
      }
    }
  }
  return allPart.join('-');
}
