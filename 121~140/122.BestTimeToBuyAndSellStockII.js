/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ans = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i-1]) {
      ans += prices[i] - prices[i-1]
    }
  }
  return ans
};
let tester = require('../tester')
let testCases = [
  {
    data: [[7, 1, 5, 3, 6, 4]],
    res: 7,
  },
  {
    data: [[7, 6, 4, 3, 1]],
    res: 0,
  },
  {
    data: [[1,2,3,4,5]],
    res: 4,
  },
]
tester(maxProfit, testCases)