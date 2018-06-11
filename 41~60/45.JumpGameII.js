/**
 * @param {number[]} nums
 * @return {number}
 */
// my answer,beat 100%,O(n)
var jump = function(nums) {
  let index = 0
  let step = 0
  while (true) {
    if (index === nums.length - 1) {
      break
    }
    step++
    if (index + nums[index] >= nums.length - 1) {
      break
    }
    let max = 0
    let j = 0
    for (let i = index + 1; i <= index + nums[index]; i++) {
      if (i + nums[i] > max) {
        j = i
        max = i + nums[i]
      }
    }
    index = j
  }
  return step
}

// other's answer,beat 100%,O(n),but more simple
// 本质上和我的方法是等效的，形式上更简化
var jump = function(nums) {
  let steps = 0
  let next = 0
  let pred = 0
  for (let i = 0; i < nums.length - 1; i++) {
    // 标记后面最远能到的点
    next = Math.max(nums[i] + i, next)
    if (i === pred) {
      // 上一步最远点置入下一步
      steps++
      pred = next
    }
  }
  return steps
}

console.log(jump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]))
