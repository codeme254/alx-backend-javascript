/**
 * Returns the result of adding two float or integer numbers
 * @param {number} a - the first number to be added
 * @param {number} b - the second number to be added
 * @param {string} type - the type of the operation (SUM, SUBTRACT, DIVIDE)
 * @returns {number} - the sum of 'a' and 'b'
 */
function calculateNumber(a, b, type) {
  a = Math.round(a);
  b = Math.round(b);
  if (type == "SUM") return a + b;
  if (type == "SUBTRACT") return a - b;
  if (type == "DIVIDE") {
    if (b == 0) return "Error";
    return a / b;
  }
}
module.exports = calculateNumber;
