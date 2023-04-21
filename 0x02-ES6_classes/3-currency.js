/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code should be a string');
    }
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name should be string');
    }
  }

  displayFullCurrency() {
    /* eslint-disable class-methods-use-this */
    return `${this._name} (${this._code})`;
  }
}
