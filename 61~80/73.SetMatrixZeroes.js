/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
{
  var setZeroes = function(matrix) {
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
// 这里有给更巧妙的解法
// https://leetcode.com/problems/set-matrix-zeroes/discuss/26014/Any-shorter-O(1)-space-solution
