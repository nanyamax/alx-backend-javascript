import getListStudents from './0-get_list_students';

export default function getListStudentIds(array) {
  return Array.isArray(array)
    ? getListStudents().map((student) => student.id)
    : [];
}
