/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let res = []
  let pos = new Array(n)

  function solve(row) {
    if (row == n) {
      let out = new Array(n)
      for (let i = 0; i < n; i++) {
        out[i] = '.'.repeat(pos[i]) + 'Q' + '.'.repeat(n - pos[i] - 1)
      }
      res.push(out)
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
console.log(solveNQueens(4))