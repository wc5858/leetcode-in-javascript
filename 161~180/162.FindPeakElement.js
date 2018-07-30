/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  nums.push(-Infinity)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return i
  }
}

// 更好的办法是二分查找