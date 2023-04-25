export default function createInt8TypedArray(length, position, value) {
  // returns a new ArrayBuffer with an Int8 value at a specific position.
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new DataView(new ArrayBuffer(length), 0, length);
  buffer.setUint8(position, value);
  return buffer;
}
