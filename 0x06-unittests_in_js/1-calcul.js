/**
 * Returns the result of adding two float or integer numbers
 * @param {string} type - the type of operation to be done
 * @param {number} a - the first number to be added
 * @param {number} b - the second number to be added
 * @returns {number} - the sum of 'a' and 'b'
 */
function calculateNumber(type, a, b) {
  if (type == "SUM") return Math.round(a) + Math.round(b);
  if (type == "SUBTRACT") return Math.round(b) - Math.round(a);
  if (type == "DIVIDE") {
    if (Math.round(b) == 0) return "Error";
    return Math.round(a) / Math.round(b);
  }
}
module.exports = calculateNumber;
