/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function(nums, k) {
  for (let i = k; i > 0; i--) {
    nums.unshift(nums.pop())
  }
}
{
  let rotate = function(nums, k) {
    if (nums.length < 2 || k === nums.length) {
      return
    }
    if (k > nums.length) {
      k = k - nums.length
    }
    nums.unshift(...nums.splice(nums.length - k, k))
  }
}
