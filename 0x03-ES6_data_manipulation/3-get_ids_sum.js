export default function getStudentIdsSum(list) {
  return list.map((value) => value.id).reduce((p, c) => p + c);
}
