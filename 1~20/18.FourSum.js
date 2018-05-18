/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var fourSum = function(nums, target) {
  let len = nums.length
  if (len < 4) return []
  let result = []
  // sort first
  nums = nums.sort((a, b) => a - b)
  // 过滤数据后性能提升很多
  if (4 * nums[0] > target || 4 * nums[len - 1] < target) return []
  for (let i = 0; i < len; i++) {
    if (i != 0 && nums[i] == nums[i - 1]) continue
    for (let j = i + 1; j < len; j++) {
      if (j != i + 1 && nums[j] == nums[j - 1]) continue
      let m = j + 1
      let n = len - 1
      while (m < n) {
        if (nums[i] + nums[j] + nums[m] + nums[n] == target) {
          result.push([nums[i], nums[j], nums[m], nums[n]])
          ++m
          while (m < n && nums[m] == nums[m - 1]) ++m
        } else if (nums[i] + nums[j] + nums[m] + nums[n] < target) {
          ++m
        } else {
          --n
        }
      }
    }
  }
  return result
}

console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0))
