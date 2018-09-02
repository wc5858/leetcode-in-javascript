/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length===1) return nums[0]
  let rob = function(nums) {
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
  return Math.max(rob(nums.slice(0,nums.length-1)),rob(nums.slice(1)))
}
let tester = require('../tester')
let testCases = [
  {
    data: [[2,3,2]],
    res: 3,
  },
  {
    data: [[1,2,3,1]],
    res: 4,
  },
  {
    data: [[2,1,1,2]],
    res: 3,
  },
  {
    data: [[1,2]],
    res: 2,
  },
]
tester(rob, testCases)
