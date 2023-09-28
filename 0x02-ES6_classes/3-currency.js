export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
  // getter for code
  get code() {
    return this._code;
  }
  // setter for code
  set code(symbol) {
    this._code = symbol;
  }
  // getter for currency name
  get name() {
    return this._name;
  }
  // setter for currency name
  set name(currencyName) {
    this._name = currencyName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
