/**
 * @param {number[]} nums
 * @return {number}
 */
{
  // 我能想到的是创建一个集合
  let singleNumber = function(nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        set.delete(nums[i])
      } else {
        set.add(nums[i])
      }
    }
    return [...set.values()][0]
  }
  let tester = require('../tester')
  let testCases = [
    {
      data: [[2, 2, 1]],
      res: 1,
    },
    {
      data: [[4, 1, 2, 1, 2]],
      res: 4,
    },
  ]
  tester(singleNumber, testCases)
}
{
  // 这里有个绝巧妙的方法，很佩服
  // If we take XOR of zero and some bit, it will return that bit
  // a ⊕ 0 = a
  // If we take XOR of two same bits, it will return 0
  // a ⊕ a = 0
  // a ⊕ b ⊕ a = (a ⊕ a) ⊕ b = 0 ⊕ b = b
  let singleNumber = function(nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
      result ^= nums[i]
    }
    return result
  }
}
