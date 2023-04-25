export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw new Error('You need to pass an array');
  }
  return new Set(array);
}
