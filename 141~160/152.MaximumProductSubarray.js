/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  // 这是我想到的解法，每遇到负值，就暂存到栈中
  // O(n)的时间复杂度，但是空间复杂度比较高，而且逻辑比较复杂，性能相对差了一筹（64ms）
  let max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      max = Math.max(max, 0)
      do {
        i++
      } while (nums[i] === 0)
    }
    if (i < nums.length) {
      max = Math.max(max, nums[i])
      let product = 1
      let stack = []
      let temp = 1
      let n = i
      while (nums[i] !== 0 && i < nums.length) {
        product *= nums[i]
        if (nums[i] > 0) {
          temp *= nums[i]
        } else {
          stack.push(temp)
          stack.push(nums[i])
          temp = 1
        }
        i++
      }
      if (product > 0) {
        max = Math.max(max, product)
      } else if (i - n > 1) {
        max = Math.max(
          max,
          product / stack[0] / stack[1],
          product / stack[stack.length - 1] / temp,
        )
      }
      if (nums[i] === 0) {
        max = Math.max(max, 0)
      }
    }
  }
  return max
}

let tester = require('../tester')
let testCases = [
  {
    data: [[2, 3, -2, 4]],
    res: 6,
  },
  {
    data: [[-2, 0, -1]],
    res: 0,
  },
  {
    data: [[0]],
    res: 0,
  },
  {
    data: [[0, -1]],
    res: 0,
  },
  {
    data: [[0, -1, -3]],
    res: 3,
  },
]
tester(maxProduct, testCases)

{
  // 这里有一种比较巧妙的解法，即把绝对值最大的负值也存下来
  // O(1)的空间复杂度，执行时间56ms
  let maxProduct = function(nums) {
    if (nums === null || nums.length === 0) {
      return
    }

    let max = nums[0]
    let min = nums[0]
    let productMax = nums[0]

    for (let i = 1; i < nums.length; i++) {
      let num = nums[i]

      let tempMax = max
      max = Math.max(Math.max(max * num, min * num), num)
      min = Math.min(Math.min(tempMax * num, min * num), num)

      if (productMax < max) {
        productMax = max
      }
    }

    return productMax
  }
}
