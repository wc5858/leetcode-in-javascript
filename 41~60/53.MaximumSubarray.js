/**
 * @param {number[]} nums
 * @return {number}
 */
{
  // 写的有点复杂了
  var maxSubArray = function(nums) {
    let sum = 0
    let flag = false
    let res = -Infinity
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        sum += nums[i]
        if (!flag) {
          flag = true
        }
        if (i === nums.length - 1 && flag) {
          res = Math.max(sum, res)
        }
      } else if (sum + nums[i] > 0) {
        if (flag) {
          res = Math.max(sum, res)
        }
        sum += nums[i]
      } else {
        if (flag) {
          res = Math.max(sum, res)
        }
        sum = 0
        if (res < 0) {
          res = Math.max(nums[i], res)
        }
      }
    }
    return res
  }
  console.log(maxSubArray([-1, -1, -2]))
}
{
  //别人的版本
  var maxSubArray = function(nums) {
    let max = -Infinity,
      sum = 0
    for (let i = 0; i < nums.length; i++) {
      if (sum > 0) {
        sum += nums[i]
      } else {
        sum = nums[i]
      }
      max = Math.max(max, sum)
    }
    return max
  }
}
