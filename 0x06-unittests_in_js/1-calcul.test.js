const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", () => {
  describe("type == SUM", () => {
    it("correctly adds whole numbers a and b", () => {
      assert.strictEqual(calculateNumber("SUM", 3, 4), 7);
    });
    it("correctly rounds down b's fractional part", () => {
      assert.strictEqual(calculateNumber("SUM", 3, 4.4), 7);
    });
    it("correctly rounds down a's fractional part", () => {
      assert.strictEqual(calculateNumber("SUM", 3.4, 4), 7);
    });
    it("correctly rounds up b's fractional part", () => {
      assert.strictEqual(calculateNumber("SUM", 3, 4.5), 8);
    });
    it("correctly rounds up a's fractional part", () => {
      assert.strictEqual(calculateNumber("SUM", 3.5, 4), 8);
    });
    it("correctly rounds down b's fractional part with trailing 9s", () => {
      assert.strictEqual(calculateNumber("SUM", 3.4, 4.4999999), 7);
    });
    it("correctly rounds down a's fractional part with trailing 9s", () => {
      assert.strictEqual(calculateNumber("SUM", 3.49999, 4), 7);
    });
  });

  describe("type == SUBTRACT", () => {
    it("correctly subtracts integer b from integer a", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 3, 4), 1);
    });
    it("correctly rounds down b's fractional part", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 3, 4.4), 1);
    });
    it("correctly rounds down a's fractional part", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 3.4, 4), 1);
    });
    it("correctly rounds up b's fractional part", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 3, 4.5), 2);
    });
    it("correctly rounds up a's fractional part", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 3.5, 4), 0);
    });
    it("correctly rounds down b's fractional part with trailing 9s", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 3.4, 4.4999999), 1);
    });
    it("correctly rounds down a's fractional part with trailing 9s", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 3.49999, 4), 1);
    });
  });

  describe("type == DIVIDE", () => {
    it("correctly divides integer a and b", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 6, 3), 2);
    });
    it("correctly rounds down b's fractional part", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 6, 3.4), 2);
    });
    it("correctly rounds down a's fractional part", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 6.4, 3), 2);
    });
    it("correctly rounds up b's fractional part", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 6, 2.5), 2);
    });
    it("correctly rounds up a's fractional part", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 5.5, 3), 2);
    });
    it("correctly rounds down b's fractional part with trailing 9s", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 6, 3.4999999), 2);
    });
    it("correctly rounds down a's fractional part with trailing 9s", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 6.49999, 3), 2);
    });
    it("returns the string error when the rounded value of b is 0", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 6.45, 0.012), "Error");
    });
    it("returns the string error when b is 0", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 6.44, 0), "Error");
    });
  });
});
