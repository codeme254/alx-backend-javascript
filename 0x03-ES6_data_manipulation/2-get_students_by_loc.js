export default function getStudentsByLocation(studentsArray, location) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }

  return studentsArray.filter((currentStudent) => currentStudent.location === location);
}
