/**
 * @param {number[]} height
 * @return {number}
 */
let maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let max = 0
  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]))
    if (height[right] > height[left]) {
      left++
    } else {
      right--
    }
  }
  return max
};