/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let i = 0
  // 查找行的过程也可以用二分查找优化
  while (i < matrix.length && matrix[i][0] <= target) {
    i++
  }
  return (
    // 要查找的数据比第1个数据都小时返回false
    !!i &&
    // 要查找的数据比已找到行的最后一个数据大时返回false
    matrix[i - 1][matrix[0].length - 1] >= target &&
    // 行内二分查找
    biSearch(matrix[i - 1], 0, matrix[0].length - 1, target)
  )
}
var middle = function(i, j) {
  return i + Math.floor((j - i) / 2)
}
var biSearch = function(nums, s, e, t) {
  if (s === e - 1) {
    return nums[s] === t || nums[e] === t
  }
  let mid = middle(s, e)
  if (nums[mid] === t) {
    return true
  }
  return nums[mid] > t ? biSearch(nums, s, mid, t) : biSearch(nums, mid, e, t)
}
let tester = require('../tester')
var testCases = [
  {
    data: [[], 0],
    res: false,
  },
  {
    data: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13],
    res: false,
  },
  {
    data: [[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3],
    res: true,
  },
]
tester(searchMatrix, testCases)
