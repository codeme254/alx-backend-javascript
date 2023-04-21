/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw new Error('Name must be a string');
    } else {
      this._name = name;
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof (length) !== 'number') {
      throw new Error('Length must be a number');
    } else {
      this._length = length;
    }
  }

  get students() {
    return this._students;
  }

  set students(studentsArray) {
    for (let i = 0; i < studentsArray.length; i += 1) {
      if (typeof (studentsArray[i]) !== 'string') {
        throw new Error('Name of a student can only be a string');
      }
    }
    this._students = studentsArray;
  }
}
