/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  // returns an array of students for a specific city with their new grade
//     newGrades is an array of objects with this format:
//   {
//     studentId: 31,
//     grade: 78,
//   }
// If a student doesn’t have grade in newGrades, the final grade should be N/A.
  const studentsFromSpecificCity = studentsArray.filter((currentStudent) => currentStudent.location === city);
  return studentsFromSpecificCity.map((currentStudentObj) => {
    for (let i = 0; i < newGrades.length; i += 1) {
      if (newGrades[i].studentId === currentStudentObj.id) {
        currentStudentObj.grade = newGrades[i].grade;
      }
    }
    if (!currentStudentObj.grade) {
      currentStudentObj.grade = 'N/A';
    }
    return currentStudentObj;
  });
}
