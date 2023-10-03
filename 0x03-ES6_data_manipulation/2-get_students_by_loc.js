export default function getStudentsByLocation(students, studentLocation) {
  return students.filter((student) => student.location === studentLocation);
}
