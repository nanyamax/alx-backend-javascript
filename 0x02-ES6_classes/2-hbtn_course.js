export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  //getter for name attribute
  get name() {
    return this._name;
  }

  // setter for name attribute
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  //getter for length
  get length() {
    return this._length;
  }

  // setter for length
  set length(Length) {
    if (typeof Length === 'number') {
      this._length = Length;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  // getter for holbertCourse.student
  get students() {
    return this._students;
  }

  // setter for holbertCourse.student
  set students(student) {
    if (Array.isArray(student)) this._students = student;
  }
}
