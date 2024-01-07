/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-prototype-builtins */
/* eslint-disable class-methods-use-this */
export default class Building {
  constructor(sqft) {
    const pro = Object.getPrototypeOf(this);
    const superpro = Building.prototype;
    const miss = Object.getOwnPropertyNames(superpro).find((name) =>
      typeof superpro[name] === 'function' && !pro.hasOwnProperty(name));
    if (miss) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  evacuationWarningMessage() {}
}
