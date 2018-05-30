var middle = function(i, j) {
  return i + Math.floor((j - i) / 2)
}
var search = function(nums, target) {
  if (nums.length === 0) return -1
  if (nums.length === 1) return nums[0] === target ? 0 : -1
  return biSearch(nums, 0, nums.length - 1, target)
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var biSearch = function(nums, start, end, target) {
  
  if (start === end - 1) {
    return nums[end] === target ? end : nums[start] === target ? start : -1
  }
  if(nums[end] > nums[start] &&(target > nums[end]||target < nums[start])) {
    // 这个判断非必要，可以在某些情况下提前终止二叉查找，但是会引入额外的判断
    return -1
  }
  let mid = middle(start, end)
  if (nums[start] < nums[mid]) {
    if (nums[start] <= target && target <= nums[mid]) {
      return biSearch(nums, start, mid, target)
    } else {
      return biSearch(nums, mid, end, target)
    }
  } else {
    if (nums[mid] <= target && target <= nums[end]) {
      return biSearch(nums, mid, end, target)
    } else {
      return biSearch(nums, start, mid, target)
    }
  }
}

// console.log(search([4, 5, 6, 7, 0, 1, 2], 3))
console.log(search([1, 3, 5], 1))
