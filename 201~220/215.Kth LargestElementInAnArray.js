/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 这题在快速排序的基础上进行改造会比较好
// 暂时先放着
var findKthLargest = function(nums, k) {
  return nums.sort((a,b)=>b-a)[k-1]
};