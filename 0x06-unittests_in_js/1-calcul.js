/**
 * Returns the result of adding two float or integer numbers
 * @param {string} type - the type of operation to be done
 * @param {number} a - the first number to be added
 * @param {number} b - the second number to be added
 * @returns {number} - the sum of 'a' and 'b'
 */
function calculateNumber(type, a, b) {
  a = Math.round(a);
  b = Math.round(b);
  if (type == "SUM") return a + b;
  if (type == "SUBTRACT") return b - a;
  if (type == "DIVIDE") {
    if (b == 0) return "Error";
    return a / b;
  }
}
module.exports = calculateNumber;
