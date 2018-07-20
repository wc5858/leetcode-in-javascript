/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
  let set = new Set()
  let sum1 = 0
  let sum2 = 0
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      sum1 += nums[i]
    } else {
      set.add(nums[i])
      sum2 += nums[i]
    }
  }
  return sum2 - sum1 / 2
}

{
  // 类似136取异或
  let singleNumber = function(nums) {
    let one = 0
    let two = 0
    for (var i = 0; i < nums.length; i++) {
      one = (one ^ nums[i]) & ~two
      two = (two ^ nums[i]) & ~one
    }
    return one
  }
}
