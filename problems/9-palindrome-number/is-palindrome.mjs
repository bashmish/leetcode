/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let originalNumber = x;
  let reverseNumber = 0;
  let lastDigit;
  while (originalNumber) {
    lastDigit = originalNumber % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    originalNumber = (originalNumber / 10) | 0;
  }
  return x == reverseNumber;
};

export { isPalindrome };
