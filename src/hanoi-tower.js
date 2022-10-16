const { NotImplementedError } = require("../extensions/index.js");

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

// To move n disks, the min number of required steps are 2^n - 1. For example,
//to move 3 disks the min number of steps are (2^3 - 1) = 7.

function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
  let turns = 2 ** disksNumber - 1;
  obj.turns = turns;
  obj.seconds = Math.floor((turns * 3600) / turnsSpeed);

  return obj;
}

module.exports = {
  calculateHanoi,
};
