/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// from solution
var reverse = function(nums, start) {
  let i = start,
    j = nums.length - 1
  while (i < j) {
    swap(nums, i, j)
    i++
    j--
  }
}
var swap = function(nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
var nextPermutation = function(nums) {
  let i = nums.length - 2
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--
  }
  if (i >= 0) {
    let j = nums.length - 1
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    swap(nums, i, j)
  }
  reverse(nums, i + 1)
}
