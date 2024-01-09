export default function hasValuesFromArray(se, arr) {
  for (const elem of arr) {
    if (!se.has(elem)) return false;
  }
  return true;
}
