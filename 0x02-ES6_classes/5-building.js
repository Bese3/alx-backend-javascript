/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    const proto = Object.getPrototypeOf(this);
    const superProto = Building.prototype;
    const missing = Object.getOwnPropertyNames(superProto).find(
      (name) =>
        // eslint-disable-next-line no-prototype-builtins
        typeof superProto[name] === 'function' && !proto.hasOwnProperty(name),
    );
    if (missing) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {}
}
