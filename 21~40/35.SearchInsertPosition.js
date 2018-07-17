/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {
  if (target < nums[0]) return 0
  let end = nums.length - 1
  if (target > nums[end]) return end + 1
  return biSearch(nums, 0, end, target)
}
let middle = function(i, j) {
  return i + Math.floor((j - i) / 2)
}
let biSearch = function(nums, s, e, t) {
  if (s === e - 1) {
    if (nums[s] === t) {
      return s
    }
    return e
  }
  let mid = middle(s, e)
  if (nums[mid] === t) {
    return mid
  }
  if (nums[mid] > t) {
    return biSearch(nums, s, mid, t)
  }
  return biSearch(nums, mid, e, t)
}
