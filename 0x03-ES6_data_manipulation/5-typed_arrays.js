export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    return new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8 = new DataView(buffer, 0, length);
  int8.setInt8(position, value);
  return int8;
}
