/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
{
  let maxProfit = function (k, prices) {
    // 纯用动态规划比较慢，下面还有个优化方案
    k = Math.min(k, prices.length)
    if (k === 0) return 0
    let holds = new Array(k).fill(-Infinity)
    let releases = new Array(k).fill(0)
    for (let i = 0; i < prices.length; i++) {
      for (let j = 0; j < k; j++) {
        holds[j] = Math.max(holds[j], (j > 0 ? releases[j - 1] : 0) - prices[i])
        releases[j] = Math.max(releases[j], holds[j] + prices[i])
      }
    }
    return releases[k - 1]
  };

  let tester = require('../tester')
  let testCases = [
    {
      data: [2, [3, 3, 5, 0, 0, 3, 1, 4]],
      res: 6,
    },
    {
      data: [2, [7, 6, 4, 3, 1]],
      res: 0,
    },
    {
      data: [2, [1, 2, 3, 4, 5]],
      res: 4,
    },
    {
      data: [2, [2, 4, 1]],
      res: 2,
    },
    {
      data: [2, [6, 1, 3, 2, 4, 7]],
      res: 7,
    },
    {
      data: [2, [3, 2, 6, 5, 0, 3]],
      res: 7,
    },
    {
      data: [2, [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]],
      res: 13,
    },
  ]
  tester(maxProfit, testCases)
}
{
  let maxProfit = function (k, prices) {

    // if (prices.length <= k) {
      if (k > prices.length / 2) {
        // 这里值得学习
      let cash = 0;
      let stock = -Infinity;

      for (let i = 0; i < prices.length; i++) {
        cash = Math.max(cash, stock + prices[i]);
        stock = Math.max(stock, cash - prices[i]);
      }

      return cash;
    }

    else {
      let cash = new Array(k + 1).fill(0);
      let stock = new Array(k + 1).fill(-Infinity);

      for (let i = 0; i < prices.length; i++) {
        for (let j = 1; j < k + 1; j++) {
          cash[j] = Math.max(cash[j], stock[j] + prices[i]);
          stock[j] = Math.max(stock[j], cash[j - 1] - prices[i]);
        }

      }

      return cash[k];
    }


  };
}