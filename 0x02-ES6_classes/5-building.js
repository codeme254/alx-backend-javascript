/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof (sqft) !== 'number') {
      throw new TypeError('Square Feet must be a number');
    }
    this._sqft = sqft;
  }
}
