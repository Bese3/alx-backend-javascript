export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      this._amount = amount;
    }

    // eslint-disable-next-line no-underscore-dangle
    this._currency = currency;
  }

  get amount() {
    // eslint-disable-next-line no-underscore-dangle
    return this._amount;
  }

  set amount(amount) {
    // eslint-disable-next-line no-underscore-dangle
    this._amount = amount;
  }

  get currency() {
    // eslint-disable-next-line no-underscore-dangle
    return this._currency;
  }

  set currency(currency) {
    // eslint-disable-next-line no-underscore-dangle
    this._currency = currency;
  }

  displayFullPrice() {
    // eslint-disable-next-line no-underscore-dangle
    return `${this._amount} ${this._currency._name} ${this._currency._code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
