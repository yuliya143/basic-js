const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result;
  sum(n);

  function sum(n) {
    result = n
      .toString()
      .split("")
      .map(Number)
      .reduce((accum, cur) => accum + cur, 0);

    result.toString().length > 1 ? sum(result) : result;
  }
  return result;
}

module.exports = {
  getSumOfDigits,
};
