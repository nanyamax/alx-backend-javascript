export default function updateStudentGradeByCity(
  students,
  studentsCity,
  newGrades
) {
  const getStudentGrade = (student) =>
    newGrades.find((grade) => grade.studentId === student.id);

  const locatedStudents = students.filter(
    (student) => student.location === studentsCity
  );

  return locatedStudents.map((student) => {
    const foundStudent = getStudentGrade(student);
    return { ...student, grade: foundStudent ? foundStudent.grade : 'N/A' };
  });
}
