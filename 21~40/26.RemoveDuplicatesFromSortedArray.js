/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
  if(nums.length === 0) return 0
  if(nums.length === 1) return 1
  let index = 1
  for(let i = 1; i<nums.length;i++) {
    if(nums[i]!==nums[i-1]) {
      nums[index] = nums[i]
      index++
    }
  }
  return index
};