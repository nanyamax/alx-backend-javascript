const getStudentsByLocation = (students, studentLocation) => {
  return students.filter((student) => {
    return student.location === studentLocation;
  });
};

export default getStudentsByLocation;
