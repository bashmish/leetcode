/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let char;
  let digit;
  let sign;
  let number;
  for (let i = 0; i < s.length; i++) {
    char = s[i];
    if ((digit = NUMS[char]) != undefined) {
      number = number ? number * 10 + digit : digit;
    } else {
      if (number != undefined || sign) {
        break;
      }
      if (char == "-") {
        sign = -1;
      } else if (char == "+") {
        sign = 1;
      } else if (char != " ") {
        break;
      }
    }
  }
  number = (number || 0) * (sign || 1);
  if (number < MIN_VALUE) {
    return MIN_VALUE;
  } else if (number > MAX_VALUE) {
    return MAX_VALUE;
  } else {
    return number;
  }
};

const NUMS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const MIN_VALUE = -(2 ** 31);
const MAX_VALUE = 2 ** 31 - 1;

export { myAtoi };
