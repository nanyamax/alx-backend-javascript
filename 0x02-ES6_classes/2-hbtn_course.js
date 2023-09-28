export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // getter for name attribute
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

  // getter for length
  get length() {
    return this._length;
  }

  // setter for length
  set length(Length) {
    if (typeof Length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = Length;
  }

  // getter for holbertCourse.student
  get students() {
    return this._students;
  }

  // setter for holbertCourse.student
  set students(student) {
    if (Array.isArray(student)) {
      this._students = student;
    } else {
      throw new Error('This is not an array');
    }
  }
}
