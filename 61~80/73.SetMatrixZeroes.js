/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
{
  let setZeroes = function(matrix) {
    let stack = []
    for (let i = 0; i < matrix.length; i++) {
      let lineZero = false
      for (let j = 0; j < matrix[i].length; j++) {
        if (!matrix[i][j]) {
          lineZero = true
          stack.push(j)
        }
      }
      if (lineZero) {
        matrix[i].fill(0)
      }
    }
    for (let j of stack) {
      for (let i = 0; i < matrix.length; i++) {
        matrix[i][j] = 0
      }
    }
  }
  let data = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
  setZeroes(data)
  console.log(data)
}
// 这里有给更巧妙的解法：用首行和首列来记录状态
// https://leetcode.com/problems/set-matrix-zeroes/discuss/26014/Any-shorter-O(1)-space-solution
{
  let setZeroes = function(matrix) {
    let col0 = 1,
      rows = matrix.length,
      cols = matrix[0].length

    for (let i = 0; i < rows; i++) {
      if (matrix[i][0] == 0) col0 = 0
      for (let j = 1; j < cols; j++)
        if (matrix[i][j] == 0) matrix[i][0] = matrix[0][j] = 0
    }
    // 第二次从后往前遍历，防止记录被修改
    for (let i = rows - 1; i >= 0; i--) {
      for (let j = cols - 1; j >= 1; j--)
        if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0
      if (col0 == 0) matrix[i][0] = 0
    }
  }
}
