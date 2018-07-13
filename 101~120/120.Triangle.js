/**
 * @param {number[][]} triangle
 * @return {number}
 */
// O(1)
// 这个更简洁一点
// var minimumTotal = function (triangle) {
//   for (let i = 1; i < triangle.length; i++) {
//     triangle[i][0] += triangle[i - 1][0]
//     triangle[i][i] += triangle[i - 1][i - 1]
//     for (let j = 1; j < i; j++) {
//       triangle[i][j] += Math.min(triangle[i-1][j],triangle[i-1][j-1])
//     }
//   }
//   return Math.min(...triangle[triangle.length-1])
// };
// 最后一行手动比较
// 这样子操作的缺陷是修改了原来的数据
// O(n)的额外空间其实也是一样的思路，类似119题，每次在末尾添一个0然后去求和
var minimumTotal = function (triangle) {
  let n = triangle.length
  if (n === 1) return triangle[0][0]
  let min
  for (let i = 1; i < n; i++) {
    triangle[i][0] += triangle[i - 1][0]
    triangle[i][i] += triangle[i - 1][i - 1]
    if (i === n - 1) {
      min = Math.min(triangle[i][0], triangle[i][i])
    }
    for (let j = 1; j < i; j++) {
      triangle[i][j] += Math.min(triangle[i - 1][j], triangle[i - 1][j - 1])
      if (i === n - 1 && triangle[i][j] < min) {
        min = triangle[i][j]
      }
    }
  }
  return min
};

let tester = require('../tester')
var testCases = [
  {
    data: [[
      [2],
      [3, 4],
      [6, 5, 7],
      [4, 1, 8, 3]
    ]],
    res: 11,
  },
  {
    data: [[
      [-10]
    ]],
    res: -10,
  },
  {
    data: [[
      [1],
      [2, 3]
    ]],
    res: 3,
  }
]
tester(minimumTotal, testCases)