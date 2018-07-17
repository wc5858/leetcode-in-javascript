/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
  if (nums.length < 3) return false
  // sort first
  let diff = Infinity
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    // Never let i refer to the same value twice to avoid duplicates.
    if (i != 0 && nums[i] == nums[i - 1]) continue
    let j = i + 1
    let k = nums.length - 1
    let last = Infinity
    while (j < k) {
      let d = nums[i] + nums[j] + nums[k] - target
      if (d === 0) {
        return target
      }
      if (Math.abs(d) <= Math.abs(last)) {
        if (d < 0) {
          j++
        } else {
          k--
        }
        last = d
      } else {
        if (d > 0 && last < 0) {
          k--
        } else if (d < 0 && last > 0) {
          j++
        } else {
          break
        }
      }
    }
    if (Math.abs(last) < Math.abs(diff)) {
      diff = last
    }
  }
  return target + diff
}

console.log(
  threeSumClosest([-55, -24, -18, -11, -7, -3, 4, 5, 6, 9, 11, 23, 33], 0),
)
