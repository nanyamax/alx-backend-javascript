const getListStudentIds = (array) =>
  Array.isArray(array) ? array.map((student) => student.id) : [];

export default getListStudentIds;
