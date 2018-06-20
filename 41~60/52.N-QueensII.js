/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let res = 0
  let pos = new Array(n)

  function solve(row) {
    if (row == n) {
      res++
    } else {
      for (let col = 0; col < n; col++) {
        if (isValid(row, col)) {
          pos[row] = col
          solve(row + 1)
          pos[row] = undefined
        }
      }
    }
  }

  function isValid(row, col) {
    for (let i = 0; i < row; ++i) {
      if (col === pos[i] || Math.abs(row - i) === Math.abs(col - pos[i])) {
        return false
      }
    }
    return true
  }

  solve(0)
  return res
}
