/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let substr = "";
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const index = substr.indexOf(char);
    substr += char;
    if (index >= 0) {
      substr = substr.substring(index + 1);
    } else {
      max = Math.max(max, substr.length);
    }
  }
  return max;
};

export { lengthOfLongestSubstring };
