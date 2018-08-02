/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 试了下发现这里用Map性能比{}好不少
var containsNearbyDuplicate = function(nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i]) || i - map.has(nums[i]) > k) {
      map.set(nums[i], i)
    } else {
      return true
    }
  }
  return false
}
