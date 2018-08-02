/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
{
  // 我想到的解法，这是O(n)的
  // O(nlogn)的貌似是二分窗口，多了冗余计算
  let minSubArrayLen = function(s, nums) {
    let sum = 0
    let j = 0
    let min = Infinity
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i]
      while (sum >= s) {
        if (i - j + 1 < min) min = i - j + 1
        sum -= nums[j++]
      }
    }
    return min === Infinity ? 0 : min
    // return min | 0  这种写法似乎影响了性能，醉了
  }
}

