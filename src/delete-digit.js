const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split("");

  return Math.max(
    ...arr.map((item, i) => {
      let copy = arr.slice();
      copy.splice(i, 1);
      return Number(copy.join(""));
    })
  );
}

module.exports = {
  deleteDigit,
};
