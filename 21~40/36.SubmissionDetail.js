/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 这种解法的空间复杂度应该是O(3n^2),时间复杂度O(n^2)
// 性能不是很好的样子，至少运行时间上看还不如别人的暴力破解法- -
// 用es6的Set性能更差，应该和js语言特性有关系
var isValidSudoku = function(board) {
  let data = {}
  for (let i = 0; i < 9; i++) {
    let str1 = 'row' + i
    data[str1] = {}
    for (let j = 0; j < 9; j++) {
      let str2 = 'col' + j
      if (i === 0) {
        data[str2] = {}
      }
      let str3 = 'blo' + Math.floor(i / 3) * 3 + Math.floor(j / 3)
      if (i % 3 === 0 && j % 3 === 0) {
        data[str3] = {}
      }
      let num = board[i][j]
      if (num === '.') continue
      if (data[str1][num] || data[str2][num] || data[str3][num]) {
        return false
      }
      data[str1][num] = true
      data[str2][num] = true
      data[str3][num] = true
    }
  }
  return true
}
