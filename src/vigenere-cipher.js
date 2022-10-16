const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  // constructor() {
  //   this.param = true;
  // }

  encrypt(string, key) {
    if (arguments.length !== 2 && arguments.length === 0) {
      throw new Error("Incorrect arguments!");
    } else {
      let result = "";

      for (let i = 0, j = 0; i < string.length; i++) {
        const c = string.charAt(i);
        // if (isLetter(c)) {
        if (c === c.toUpperCase()) {
          result += String.fromCharCode(
            ((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) %
              26) +
              65
          );
        } else {
          result += String.fromCharCode(
            ((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) %
              26) +
              97
          );
        }
        // } else {
        //   result += c;
        // }
        j = ++j % key.length;
      }
      return result.toUpperCase();
    }
  }
  decrypt(encryptedMessage, key) {
    if (arguments.length !== 2 && arguments.length === 0) {
      throw new Error("Incorrect arguments!");
    } else {
      let result = "";

      for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
        const c = encryptedMessage.charAt(i);
        // if (isLetter(c)) {
        if (c === c.toUpperCase()) {
          result += String.fromCharCode(
            90 -
              ((25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
          );
        } else {
          result += String.fromCharCode(
            122 -
              ((25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
          );
        }
        // } else {
        //   result += c;
        // }
        j = ++j % key.length;
      }
      return result.toUpperCase();
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
