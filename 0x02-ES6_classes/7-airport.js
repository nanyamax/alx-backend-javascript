export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
  get name() {
    return this._name;
  }
  set name(Name) {
    this._name = Name;
  }

  get code() {
    return this_code;
  }

  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
