const getStudentsByLocation = (students, studentLocation) =>
  students.filter((student) => student.location === studentLocation);

export default getStudentsByLocation;
