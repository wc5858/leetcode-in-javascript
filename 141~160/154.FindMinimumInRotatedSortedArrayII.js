/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  return (function helper(start, end) {
    while (start !== end && nums[end] === nums[start]) {
      end--
    }
    while (start < end - 1 && nums[start] === nums[start + 1]) {
      start++
    }
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
    data: [[1, 3, 5]],
    res: 1,
  },
  {
    data: [[2, 2, 2, 0, 1]],
    res: 0,
  },
  {
    data: [[1, 1]],
    res: 1,
  },
  {
    data: [[2, 2, 2, 0, 1, 2]],
    res: 0,
  },
]
tester(findMin, testCases)
