/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  return (function helper(start, end) {
    if (nums[start] < nums[end]) {
      return nums[start]
    }
    if (end - start < 2) {
      return Math.min(nums[start], nums[end])
    }
    let mid = Math.floor((start + end) / 2)
    if (nums[start] < nums[mid]) {
      return helper(mid + 1, end)
    } else {
      return helper(start, mid)
    }
  })(0, nums.length - 1)
}
let tester = require('../tester')
let testCases = [
  {
    data: [[3, 4, 5, 1, 2]],
    res: 1,
  },
  {
    data: [[4, 5, 6, 7, 0, 1, 2]],
    res: 0,
  },
  {
    data: [[2, 1]],
    res: 1,
  },
  {
    data: [[0]],
    res: 0,
  },
  {
    data: [[4, 5, 1, 2, 3]],
    res: 1,
  },
  {
    data: [[4, 5, 6, 1, 2, 3]],
    res: 1,
  },
]
tester(findMin, testCases)
