/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
let exist = function(board, word) {
  function testChar(index, i, j) {
    if (board[i][j] === word[index]) {
      let temp = board[i][j]
      board[i][j] = 0
      if (search(index + 1, i, j)) {
        return true
      }
      board[i][j] = temp
    }
    return false
  }
  function search(index, i, j) {
    if (
      index >= word.length ||
      (i > 0 && testChar(index, i - 1, j)) ||
      (j > 0 && testChar(index, i, j - 1)) ||
      (i < board.length - 1 && testChar(index, i + 1, j)) ||
      (j < board[0].length - 1 && testChar(index, i, j + 1))
    ) {
      return true
    }
    return false
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (testChar(0, i, j)) {
        return true
      }
    }
  }
  return false
}

let tester = require('../tester')
let testCases = [
  {
    data: [[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED'],
    res: true,
  },
  {
    data: [[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE'],
    res: true,
  },
  {
    data: [[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCB'],
    res: false,
  },
]
tester(exist, testCases)
