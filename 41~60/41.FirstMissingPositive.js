/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] === i + 1) {
      continue
    }
    let num = nums[i]
    nums[i] = false
    while (num > 0 && nums[num - 1] != num) {
      let temp = nums[num - 1]
      nums[num - 1] = num
      num = temp
    }
  }
  let res = nums.indexOf(false)
  return (res === -1 ? nums[nums.length - 1] || 0 : res) + 1
}
