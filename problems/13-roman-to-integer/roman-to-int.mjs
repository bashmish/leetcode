/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let normalized = s;
  Object.entries(special).map(([from, to]) => {
    normalized = normalized.replaceAll(from, to);
  });
  const numbers = normalized.split("").map((symbol) => normal[symbol]);
  return sum(...numbers);
};

function sum(...numbers) {
  return numbers.reduce((s, n) => s + n, 0);
}

const special = {
  IV: "IIII",
  IX: "IIIIIIIII",
  XL: "XXXX",
  XC: "XXXXXXXXX",
  CD: "CCCC",
  CM: "CCCCCCCCC",
};

const normal = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export { romanToInt };
