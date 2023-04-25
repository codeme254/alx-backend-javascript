export default function updateUniqueItems(map) {
  // returns an updated map for all items with initial quantity at 1.
  if (map instanceof Map) {
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
    return map;
  }
  throw new Error('Cannot process');
}
