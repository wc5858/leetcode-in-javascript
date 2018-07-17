/**
 * @param {number[]} nums
 * @return {number[][]}
 */
{
  //  Time Limit Exceeded @ test case 311
  let threeSum = function(nums) {
    let set = new Set()
    let repeat = new Set()
    let countZero = 0
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        repeat.add(nums[i])
      } else {
        set.add(nums[i])
      }
      if (nums[i] === 0) {
        countZero++
      }
    }
    console.log(set)
    let arr = [...set]
    let result = []
    if (countZero >= 3) {
      result.push([0, 0, 0])
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = repeat.has(arr[i]) ? i : i + 1; j < arr.length; j++) {
        for (
          let k = i !== j && repeat.has(arr[j]) ? j : j + 1;
          k < arr.length;
          k++
        ) {
          if (arr[i] + arr[j] + arr[k] === 0) {
            result.push([arr[i], arr[j], arr[k]])
          }
        }
      }
    }
    return result
  }
}
{
  // two pointer, O(n^2)
  let threeSum = function(nums) {
    if (nums.length < 3) return []
    let result = []
    // sort first
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
      // Never let i refer to the same value twice to avoid duplicates.
      if (i != 0 && nums[i] == nums[i - 1]) continue
      let j = i + 1
      let k = nums.length - 1
      while (j < k) {
        if (nums[i] + nums[j] + nums[k] == 0) {
          result.push([nums[i], nums[j], nums[k]])
          ++j
          // Never let j refer to the same value twice (in an output) to avoid duplicates
          while (j < k && nums[j] == nums[j - 1]) ++j
        } else if (nums[i] + nums[j] + nums[k] < 0) {
          ++j
        } else {
          --k
        }
      }
    }
    return result
  }

  console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]))
}
