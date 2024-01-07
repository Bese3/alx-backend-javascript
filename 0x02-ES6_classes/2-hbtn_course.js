export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._name = name;
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._length = length;
    }
    if (typeof students !== 'object') {
      throw new TypeError('students must be array');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._students = students;
    }
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  get students() {
    // eslint-disable-next-line no-underscore-dangle
    return this._students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._name = name;
    }
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._length = length;
    }
  }

  set students(students) {
    if (typeof students !== 'object') {
      throw new TypeError('students must be array');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._students = students;
    }
  }
}
