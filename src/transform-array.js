const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 */

function transform(arr) {
  if (!Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!");
  let result = [];
  arr.forEach((item, i, array) => {
    result.push(item);

    if (item === "--discard-next" && i !== array.length - 1) {
      array = array.splice(i + 1, 1);
    }

    if (item === "--discard-prev" && i !== 0) {
      result.splice(i - 1, 1);
    }

    if (item === "--double-next" && i !== array.length - 1) {
      result.push(array[i + 1]);
    }

    if (
      item === "--double-prev" &&
      i !== 0 &&
      array[i - 2] !== "--discard-next"
    ) {
      result.push(array[i - 1]);
    }
  });

  result = result.filter(
    (item) =>
      item !== "--discard-next" &&
      item !== "--discard-prev" &&
      item !== "--double-next" &&
      item !== "--double-prev"
  );

  return result;
}

module.exports = {
  transform,
};
