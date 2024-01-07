export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be string');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._code = code;
    }
    if (typeof name !== 'string') {
      throw new TypeError('name must be string');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._name = name;
    }
  }

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be string');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._code = code;
    }
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be string');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._name = name;
    }
  }

  displayFullCurrency() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._name} (${this._code})`;
  }
}
