// 感觉自己好机智，beat 100%，64ms
// 根据k，t的大小不同进行优化
// 时间复杂度为O(nums.length * Math.min(k,2t))
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (k > 2 * t) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
      for (let j = nums[i] - t; j <= nums[i] + t; j++) {
        if (map.has(j) && i - map.get(j) <= k) {
          return true
        }
      }
      map.set(nums[i], i)
    }
    return false
  } else {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i - k < 0 ? 0 : i - k; j < i; j++) {
        if (Math.abs(nums[j] - nums[i]) <= t) return true
      }
    }
    return false
  }
}
