export default function getListStudentIds(arr) {
  if (arr.constructor.name !== 'Array') {
    return [];
  }
  return arr.map((ind) => ind.id);
}
