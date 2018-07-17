/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let ans = 0
  let pre = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > pre) {
      ans = Math.max(ans, prices[i] - pre)
    } else {
      pre = prices[i]
    }
  }
  return ans
};
let tester = require('../tester')
let testCases = [
  {
    data: [[7, 1, 5, 3, 6, 4]],
    res: 5,
  },
  {
    data: [[7, 6, 4, 3, 1]],
    res: 0,
  },
]
tester(maxProfit, testCases)