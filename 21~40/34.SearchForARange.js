/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 本来想偷懒
// var searchRange = function(nums, target) {
//   return [nums.indexOf(target), nums.lastIndexOf(target)]
// }
// 不对，indexOf的实现应该是不满足时间复杂度的要求的
// 翻了翻v8源码，发现indexOf已经在16年的时候从js实现迁移到c++实现了- -看不太懂
// 相关commit地址：https://github.com/v8/v8/commit/da5d713d73d43aec66ff45c29d06b4857182578b#diff-500b17e3a1341a99917d087572ab8163
// 所以还是不能偷懒
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1, -1]
  if (nums.length === 1) return nums[0] === target ? [0, 0] : [-1, -1]
  let left = biSearch(nums, 0, nums.length - 1, target, true)
  if (left === -1) {
    return [-1, -1]
  }
  let i = left === 0 ? 0 : left - 1
  let right = biSearch(nums, i, nums.length - 1, target, false)
  return left < right ? [left, right] : [right, left]
}
var middle = function(i, j) {
  return i + Math.floor((j - i) / 2)
}
var biSearch = function(nums, start, end, target, direction) {
  // direction为true代表从左往右查找
  // set direction as true means search from left to right
  if (end - start === 1) {
    if (direction) {
      if (nums[start] === target) {
        return start
      }
      if (nums[end] === target) {
        return end
      }
    }
    if (!direction) {
      if (nums[end] === target) {
        return end
      }
      if (nums[start] === target) {
        return start
      }
    }
    return -1
  }
  let mid = middle(start, end)
  if (nums[mid] < target || (!direction && nums[mid] === target)) {
    return biSearch(nums, mid, end, target, direction)
  }
  if (nums[mid] > target || (direction && nums[mid] === target)) {
    return biSearch(nums, start, mid, target, direction)
  }
}
console.log(searchRange([1, 2], 2))
