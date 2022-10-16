const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let count = 0;

  str.split("").forEach((item, i, arr) => {
    if (item === arr[i + 1]) {
      count += 1;
    } else {
      count += 1;
      count === 1 ? (count = "") : count;
      result += count + item;
      count = 0;
    }
  });
  return result;
}

module.exports = {
  encodeLine,
};
