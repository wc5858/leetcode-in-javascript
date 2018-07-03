/**
 * @param {character[][]} matrix
 * @return {number}
 */
{
  // 按列切割法
  var maximalRectangle = function(matrix) {
    let rows = matrix.length
    if (!rows) return 0
    let cols = matrix[0].length
    let arr = []
    let max = 0
    for (let level = 0; level < cols; level++) {
      // 分层切割
      for (let j = 0; j < rows; j++) {
        if (arr[j]) {
          arr[j]--
        } else {
          let i = level
          // while (+matrix[j][i]) {
          // 要避免做类型转换
          while (matrix[j][i]==='1') {
            i++
          }
          arr[j] = i - level
        }
      }
      max = Math.max(largestRectangleArea(arr), max)
    }
    return max
  }
  // 利用84的方法
  var largestRectangleArea = function(heights) {
    const len = heights.length
    if (len === 0) {
      return 0
    }
    const stack = [0]
    let max = heights[0]
    heights.push(0)
    for (let i = 1; i <= len; i++) {
      while (
        stack.length > 0 &&
        heights[stack[stack.length - 1]] >= heights[i]
      ) {
        const height = heights[stack.pop()]
        max = Math.max(
          max,
          height * (stack.length === 0 ? i : i - 1 - stack[stack.length - 1]),
        )
      }
      stack.push(i)
    }
    heights.pop()
    return max
  }

  let matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ]
  console.log(maximalRectangle(matrix))
  console.log(maximalRectangle([[0]]))
  console.log(maximalRectangle([]))
}