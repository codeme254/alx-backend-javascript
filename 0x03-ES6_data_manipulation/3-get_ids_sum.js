export default function getStudentIdsSum(studentsArray){
    // get the sum of all student ids from an array of student objects
    if (!Array.isArray(studentsArray)){
        return 0;
    }

    return studentsArray.reduce((currentSum, currentStudent) => currentSum + currentStudent.id, 0)
}