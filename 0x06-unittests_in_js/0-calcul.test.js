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
});
