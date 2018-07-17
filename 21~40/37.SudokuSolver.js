let createMatrix = function(x, y) {
  let arr = new Array(x)
  for (let i = 0; i < x; i++) {
    arr[i] = new Array(9)
  }
  return arr
}
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let solveSudoku = function(board) {
  const horizontal = createMatrix(9, 9)
  const vertical = createMatrix(9, 9)
  const square = createMatrix(9, 9)
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == '.') {
        continue
      }
      let num = +board[i][j] - 1
      let idx = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      horizontal[i][num] = vertical[j][num] = square[idx][num] = true
    }
  }
  const dfs = function(i, j) {
    if (i > 8) {
      return true
    }
    if (j > 8) {
      return dfs(i + 1, 0)
    }
    if (board[i][j] == '.') {
      let idx = Math.floor(i / 3) * 3 + Math.floor(j / 3)
      for (let k = 0; k < 9; k++) {
        let current = horizontal[i][k] || vertical[j][k] || square[idx][k]
        if (!current) {
          horizontal[i][k] = vertical[j][k] = square[idx][k] = true
          board[i][j] = String(1 + k)
          if (dfs(i, j + 1)) {
            return true
          }
          board[i][j] = '.'
          horizontal[i][k] = vertical[j][k] = square[idx][k] = false
        }
      }
      return false
    }
    return dfs(i, j + 1)
  }
  dfs(0, 0)
}
