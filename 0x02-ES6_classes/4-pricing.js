import Currency from './3-currency';
export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
  get amount() {
    return this._amount;
  }
  set amount(figure) {
    if (typeof figure !== 'number') {
      throw new TypeError('figure must be a number');
    }
    this._amount = figure;
  }

  get currency() {
    return this._currency;
  }
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must Currency');
    }
    this._currency = value;
  }
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }
  static convertPrice(amount, conversionRate) {
    if (typeof amount && conversionRate !== 'number') {
      throw new TypeError('input must be a number');
    }
    return amount * conversionRate;
  }
}
