/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
  if (nums.length === 1) return nums[0]
  let tag = Math.floor(nums.length / 2)
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      if (++map[nums[i]] > tag) {
        return nums[i]
      }
    } else {
      map[nums[i]] = 1
    }
  }
}

{
  // 这里有个O(1)空间复杂度的方法，值得学习
  // 从“多数”的意义出发，通过计数的方式将那些“少数”抵消掉
  let majorityElement = function(nums) {
    let result = nums[0]
    let count = 1
    for (let i = 1; i < nums.length; i++) {
      if (count === 0) {
        count++
        result = nums[i]
      } else if (result === nums[i]) {
        count++
      } else {
        count--
      }
    }
    return result
  }
}
