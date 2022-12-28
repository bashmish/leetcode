/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let prev;
    let next;
    let j = 0;
    do {
      j++;
      prev = i - j;
      next = i + j;
      // one undefined check is enough to prevent false positive `undefined == undefined`
    } while (s[prev] == s[next] && s[prev] != undefined);
    // revert last move which was not a palindrome
    prev++;
    next--;
    if (next - prev > end - start) {
      start = prev;
      end = next;
    }
    j = 0;
    do {
      j++;
      prev = i - j;
      next = i + j - 1;
    } while (s[prev] == s[next] && s[prev] != undefined);
    prev++;
    next--;
    if (next - prev > end - start) {
      start = prev;
      end = next;
    }
  }
  return s.substring(start, end + 1);
};

export { longestPalindrome };
