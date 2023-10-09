import assert from "assert";
import { calculateNumber } from "./0-calcul.js";

describe("calculateNumber", function () {
  it("adds two whole numbers", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it("correctly rounds the first number with decimal part less than 5", function () {
    assert.strictEqual(calculateNumber(1.2, 3), 4);
  });
  it("correctly rounds the second number with decimal part less then 5", function () {
    assert.strictEqual(calculateNumber(1, 3.4), 4);
  });
  it("correctly rounds the first number with decimal part greater than 5", function () {
    assert.strictEqual(calculateNumber(1.6, 3), 5);
  });
  it("correctly rounds the second number with the decimal part greater than 5", function () {
    assert.strictEqual(calculateNumber(1, 3.6), 5);
  });
  it("floating point whole numbers", () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it("rounding down b's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it("rounding down a and b's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it("rounding down a's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it("rounding up b's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it("rounding up a and b's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it("rounding up a's floating point fractional numbers", () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it("rounding down a and b floating point fractional numbers with trailing 9's", () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
