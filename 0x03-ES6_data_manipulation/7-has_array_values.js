export default function hasValuesFromArray(set, array) {
  // returns a boolean if all the elements in the array exist within the set
  for (let i = 0; i < array.length; i += 1) {
    if (!set.has(array[i])) return false;
  }
  return true;
}
