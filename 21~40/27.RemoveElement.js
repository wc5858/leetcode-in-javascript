/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function(nums, val) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      while (nums[len - 1] === val) {
        len--
      }
      nums[i] = nums[len - 1]
      if (i < len - 1) {
        len--
      }
    }
  }
  return len
}
