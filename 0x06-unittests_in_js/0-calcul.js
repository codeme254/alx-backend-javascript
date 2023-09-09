/**
 * Returns the result of adding two float or integer numbers
 * @param {number} a - the first number to be added
 * @param {number} b - the second number to be added
 * @returns {number} - the sum of 'a' and 'b'
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}
module.exports = calculateNumber;
