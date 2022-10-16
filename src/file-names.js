const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  let count = 0;

  iter(names);

  function iter(arr) {
    names.forEach((item, i) => {
      if (names.indexOf(item) === i) {
        result.push(item);
      } else {
        count += 1;
        result.push(item + `(${count})`);
      }
    });
  }

  for (let [i, item] of result.entries()) {
    if (result.indexOf(item) !== i) {
      return renameFiles(result);
    }
  }

  return result;
}

module.exports = {
  renameFiles,
};
