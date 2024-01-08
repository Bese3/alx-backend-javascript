export default function getListStudentIds(arr) {
  if (typeof arr !== 'object') {
    return [];
  }
  return arr.map((ind) => ind.id);
}
