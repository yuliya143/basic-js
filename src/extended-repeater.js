const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let addition = [];

  options.separator ? options.separator : (options.separator = "+");
  options.additionSeparator
    ? options.additionSeparator
    : (options.additionSeparator = "|");

  options.addition === false || options.addition === null || options.addition
    ? options.addition
    : (options.addition = "");

  options.repeatTimes ? options.repeatTimes : (options.repeatTimes = 1);
  options.additionRepeatTimes
    ? options.additionRepeatTimes
    : (options.additionRepeatTimes = 1);

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addition.push(String(options.addition));
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(String(str) + addition.join(options.additionSeparator));
  }
  // console.log(addition);

  return result.join(options.separator);
}

module.exports = {
  repeater,
};
