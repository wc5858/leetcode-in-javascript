/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function(nums) {
  let next = 0
  for (let i = 0; i < nums.length - 1; i++) {
    // 标记后面最远能到的点
    if (next < i) return false
    next = Math.max(nums[i] + i, next)
  }
  return next >= nums.length - 1
};
console.log(canJump([2,3,1,1,4]))
