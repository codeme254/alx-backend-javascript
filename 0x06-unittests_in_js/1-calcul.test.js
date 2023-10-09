const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  describe("SUM", function () {
    it("adds whole numbers", function () {
      assert.strictEqual(calculateNumber(1, 2, "SUM"), 3);
    });
    it("left number decimal part less than 5", function () {
      assert.strictEqual(calculateNumber(1.2, 2, "SUM"), 3);
    });
    it("right number decimal part less than 5", function () {
      assert.strictEqual(calculateNumber(1, 2.2, "SUM"), 3);
    });
    it("left number decimal part greater than 5", function () {
      assert.strictEqual(calculateNumber(1.7, 2, "SUM"), 4);
    });
    it("right number with decimal part greater than 5", function () {
      assert.strictEqual(calculateNumber(1, 2.7, "SUM"), 4);
    });
    it("left number with trailing 9s", function () {
      assert.strictEqual(calculateNumber(1.49999999, 2, "SUM"), 3);
    });
    it("right number with trailing 9s", function () {
      assert.strictEqual(calculateNumber(1, 2.499999, "SUM"), 3);
    });
  });
  describe("SUBTRACT", function () {
    it("whole numbers", function () {
      assert.strictEqual(calculateNumber(5, 3, "SUBTRACT"), 2);
    });
    it("left number with fractional part less than .5", function () {
      assert.strictEqual(calculateNumber(5.2, 3, "SUBTRACT"), 2);
    });
    it("right number with the fractional part less than .5", function () {
      assert.strictEqual(calculateNumber(5.2, 3.2, "SUBTRACT"), 2);
    });
    it("left number with the decimal part greater than or equal to .5", function () {
      assert.strictEqual(calculateNumber(5.6, 3, "SUBTRACT"), 3);
    });
    it("right number with fractional part greater than or equal to .5", function () {
      assert.strictEqual(calculateNumber(5, 2.6, "SUBTRACT"), 2);
    });
  });
  describe("DIVIDE", function () {
    it("whole numbers", function () {
      assert.strictEqual(calculateNumber(6, 3, "DIVIDE"), 2);
    });
    it("left number with the decimal part less than .5", function () {
      assert.strictEqual(calculateNumber(6.2, 3, "DIVIDE"), 2);
    });
    it("right number with the decimal part less than .5", function () {
      assert.strictEqual(calculateNumber(6, 3.2, "DIVIDE"), 2);
    });
    it("left number with fractional part greater than 5", function () {
      assert.strictEqual(calculateNumber(5.8, 3, "DIVIDE"), 2);
    });
    it("right number with fractional part greater than .5", function () {
      assert.strictEqual(calculateNumber(6, 2.8, "DIVIDE"), 2);
    });
    it("right number rounds to 0", function () {
      assert.strictEqual(calculateNumber(6, 0.2, "DIVIDE"), "Error");
    });
  });
});
