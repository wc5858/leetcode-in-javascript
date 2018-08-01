/**
 * @param {number[]} nums
 * @return {number}
 */
// 也可以不用递归做
var rob = function(nums) {
  let len = nums.length
  let cache = {}
  return (function helper(idx) {
    if (idx >= len) return 0
    if (idx === len - 1) return nums[idx]
    if (cache[idx]!==undefined) return cache[idx]
    cache[idx] = Math.max(nums[idx] + helper(idx + 2), nums[idx+1] + helper(idx + 3))
    return cache[idx]
  })(0)
}
let tester = require('../tester')
let testCases = [
  {
    data: [[1,2,3,1]],
    res: 4,
  },
  {
    data: [[2,7,9,3,1]],
    res: 12,
  },
  {
    data: [[1,2]],
    res: 2,
  },
]
tester(rob, testCases)
