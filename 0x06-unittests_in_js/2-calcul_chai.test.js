const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", () => {
  describe("type == SUM", () => {
    it("correctly adds whole numbers a and b", () => {
      expect(calculateNumber("SUM", 3, 4)).to.equal(7);
    });
    it("correctly rounds down b's fractional part", () => {
      expect(calculateNumber("SUM", 3, 4.4)).to.equal(7);
    });
    it("correctly rounds down a's fractional part", () => {
      expect(calculateNumber("SUM", 3.4, 4)).to.equal(7);
    });
    it("correctly rounds up b's fractional part", () => {
      expect(calculateNumber("SUM", 3, 4.5)).to.equal(8);
    });
    it("correctly rounds up a's fractional part", () => {
      expect(calculateNumber("SUM", 3.5, 4)).to.equal(8);
    });
    it("correctly rounds down b's fractional part with trailing 9s", () => {
      expect(calculateNumber("SUM", 3.4, 4.4999999)).to.equal(7);
    });
    it("correctly rounds down a's fractional part with trailing 9s", () => {
      expect(calculateNumber("SUM", 3.499999, 4)).to.equal(7);
    });
  });

  describe("type == SUBTRACT", () => {
    it("correctly subtracts integer b from integer a", () => {
      expect(calculateNumber("SUBTRACT", 3, 4)).to.equal(-1);
    });
    it("correctly rounds down b's fractional part", () => {
      expect(calculateNumber("SUBTRACT", 3, 4.4)).to.equal(-1);
    });
    it("correctly rounds down a's fractional part", () => {
      expect(calculateNumber("SUBTRACT", 3.4, 4)).to.equal(-1);
    });
    it("correctly rounds up b's fractional part", () => {
      expect(calculateNumber("SUBTRACT", 3, 4.5)).to.equal(-2);
    });
    it("correctly rounds up a's fractional part", () => {
      expect(calculateNumber("SUBTRACT", 3.5, 4)).to.equal(0);
    });
    it("correctly rounds down b's fractional part with trailing 9s", () => {
      expect(calculateNumber("SUBTRACT", 3.4, 4.499999)).to.equal(-1);
    });
    it("correctly rounds down a's fractional part with trailing 9s", () => {
      expect(calculateNumber("SUBTRACT", 3.499999, 4)).to.equal(-1);
    });
  });

  describe("type == DIVIDE", () => {
    it("correctly divides integer a and b", () => {
      expect(calculateNumber("DIVIDE", 6, 3)).to.equal(2);
    });
    it("correctly rounds down b's fractional part", () => {
      expect(calculateNumber("DIVIDE", 6, 3)).to.equal(2);
    });
    it("correctly rounds down a's fractional part", () => {
      expect(calculateNumber("DIVIDE", 6.4, 3)).to.equal(2);
    });
    it("correctly rounds up b's fractional part", () => {
      expect(calculateNumber("DIVIDE", 6, 2.5)).to.equal(2);
    });
    it("correctly rounds up a's fractional part", () => {
      expect(calculateNumber("DIVIDE", 5.5, 3)).to.equal(2);
    });
    it("correctly rounds down b's fractional part with trailing 9s", () => {
      expect(calculateNumber("DIVIDE", 6, 3.4999)).to.equal(2);
    });
    it("correctly rounds down a's fractional part with trailing 9s", () => {
      expect(calculateNumber("DIVIDE", 6.4999, 3)).to.equal(2);
    });
    it("correctly divides numbers with different signs", () => {
      expect(calculateNumber("DIVIDE", -6, 3)).to.equal(-2);
    });
    it("returns the string error when the rounded value of b is 0", () => {
      expect(calculateNumber("DIVIDE", 6.45, 0.012)).to.equal("Error");
    });
    it("returns the string error when b is 0", () => {
      expect(calculateNumber("DIVIDE", 6, 0)).to.equal("Error");
    });
  });
});
