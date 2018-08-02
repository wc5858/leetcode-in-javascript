/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i]) || i - map.get(nums[i]) > k) {
      map.set(nums[i], i)
    } else {
      return true
    }
  }
  return false
}
