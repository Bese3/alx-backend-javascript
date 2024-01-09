export default function updateUniqueItems(map) {
  for (const k of map.keys()) {
    if (map.get(k) === 1) {
      map.set(k, 100);
    }
  }
}
