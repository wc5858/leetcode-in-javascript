// 这个方法的时间复杂度为O(n^2)，最后几个case过不去
let trap = function(height) {
  if (height.length === 0) return 0
  let flag = true
  let deep = 1
  let result = 0
  for (let deep = 1; flag; deep++) {
    let count = 0
    let pair = false
    flag = false
    for (let i = 0; i < height.length; i++) {
      if (height[i] >= deep) {
        flag = true
        if (pair && count) {
          result += count
        } else {
          pair = true
        }
        count = 0
      } else {
        count++
      }
    }
  }
  return result
}
// 双指针，O(n)
let trap = function(height) {
  let left = 0,
    right = height.length,
    res = 0,
    leftMax = 0,
    rightMax = 0
  while (left < right) {
    let i = height[left]
    let j = height[right]
    if (i < j) {
      if (i < leftMax) {
        res += leftMax - i
      } else {
        leftMax = i
      }
      left++
    } else {
      if (j < rightMax) {
        res += rightMax - j
      } else {
        rightMax = j
      }
      right--
    }
  }
  return res
}
