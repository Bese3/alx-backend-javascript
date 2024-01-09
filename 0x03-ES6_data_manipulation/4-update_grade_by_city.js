/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const locFilter = getListStudents.filter((elem) => elem.location === city);
  // console.log(locFilter)
  const gradeAdd = locFilter.map((studInfo) => ({
    ...studInfo,
    grade: newGrades.filter((elm) => elm.studentId === studInfo.id)[0],

  }));
  gradeAdd.forEach((element) => {
    if (element.grade === undefined) {
      element.grade = 'N/A';
    } else {
      element.grade = element.grade.grade;
    }
  });
  return gradeAdd;
}
