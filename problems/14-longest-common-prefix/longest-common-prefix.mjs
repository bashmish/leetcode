/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = findShortestString(strs);
  for (const str of strs) {
    while (!str.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
    }
    if (!prefix) break;
  }
  return prefix;
};

function findShortestString(strs) {
  let minLength = Infinity;
  let shortestStr = "";
  strs.forEach((s) => {
    const newLength = s.length;
    if (newLength < minLength) {
      minLength = newLength;
      shortestStr = s;
    }
  });
  return shortestStr;
}

export { longestCommonPrefix };
