// tests for the calcul function
const assert = require("assert");
const calculateNumber = require('./0-calcul');

describe("calculateNumber", () => {
  it("correctly adds integer numbers", () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });
  it("correctly rounds down b's fractional part", () => {
    assert.strictEqual(calculateNumber(1.0, 3.4), 4);
  });
  it("correctly rounds down a's fractional part", () => {
    assert.strictEqual(calculateNumber(1.4, 3), 4);
  });
  it("correctly rounds up b's fractional part", () => {
    assert.strictEqual(calculateNumber(1, 3.6), 5);
  });
  it("correctly rounds up a's fractional part", () => {
    assert.strictEqual(calculateNumber(1.6, 3), 5);
  });
  it("correctly rounds down b's fractional part with trailing 9s", () => {
    assert.strictEqual(calculateNumber(1, 3.49999), 4);
  });
  it("correctly rounds down a's fractional part with trailing 9s", () => {
    assert.strictEqual(calculateNumber(1.499999, 3), 4);
  });
});
