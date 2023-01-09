/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // special case for one row
  if (numRows == 1) return s;

  // strings of every row
  let rows = [];
  for (let r = 0; r < numRows; r++) {
    rows[r] = "";
  }

  let direction = 1; // 1 = down, 0 = up
  let row = 0;
  for (let i = 0; i < s.length; i++) {
    rows[row] += s[i];
    if (direction) {
      // down
      if (row == numRows - 1) {
        // switch direction
        direction = 0;
        row--;
      } else {
        // go further
        row++;
      }
    } else {
      // up
      if (row == 0) {
        // switch direction
        direction = 1;
        row++;
      } else {
        // go further
        row--;
      }
    }
  }

  return rows.join("");
};

export { convert };
