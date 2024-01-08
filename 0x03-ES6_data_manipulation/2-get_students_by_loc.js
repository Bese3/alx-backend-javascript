export default function getStudentsByLocation(list, city) {
  return list.filter((ind) => ind.location === city);
}
