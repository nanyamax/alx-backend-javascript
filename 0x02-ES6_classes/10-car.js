export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(type) {
    this._brand = type;
  }

  get motor() {
    return this._motor;
  }

  set motor(make) {
    this._motor = make;
  }

  get color() {
    return this._color;
  }

  set color(Color) {
    this._color = Color;
  }

  static get [Symbol.species]() {
    return this;
  }

  clonecar() {
    const Car1 = this.constructor[Symbol.species];

    return new Car1();
  }
}
