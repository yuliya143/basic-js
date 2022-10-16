const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  _result: [],

  getLength() {
    return this._result.length;
  },
  addLink(value) {
    this._result.push(String(arguments.length ? value : ""));

    return this;
  },
  removeLink(position) {
    if (
      Number.isInteger(position) &&
      position > 0 &&
      position < this._result.length
    ) {
      this._result.splice(position - 1, 1);
    } else {
      this._result = [];
      throw new Error("You can't remove incorrect link!");
    }

    return this;
  },
  reverseChain() {
    this._result.reverse();

    return this;
  },
  finishChain() {
    const result = this._result.reduce((accum, value, i) => {
      accum += `${i === 0 ? "" : "~~"}( ${value} )`;
      return accum;
    }, "");
    this._result = [];

    return result;
  },
};

module.exports = {
  chainMaker,
};
