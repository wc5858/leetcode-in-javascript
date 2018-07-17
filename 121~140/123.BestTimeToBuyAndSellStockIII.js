/**
 * @param {number[]} prices
 * @return {number}
 */
// {
// 思路似乎有问题
// 第193/200个用例跑不通
// var maxProfit = function (prices) {
//   let ans = 0
//   let m = 0
//   let pre = prices[0]
//   prices.push(-1)
//   for (let i = 1; i < prices.length; i++) {
//     let temp = pre
//     let m1 = 0
//     let m2 = 0
//     while (prices[i] > pre) {
//       if (prices[i] < prices[i - 1]) {
//         let d = prices[i - 1] - temp
//         if (d >= m1) {
//           m2 = m1
//           m1 = d
//         } else if (d > m2) {
//           m2 = d
//         }
//         temp = prices[i]
//       }
//       i++
//     }
//     let d = prices[i - 1] - temp
//     if (d >= m1) {
//       m2 = m1
//       m1 = d
//     } else if (d > m2) {
//       m2 = d
//     }
//     temp = prices[i]
//     let max = Math.max(prices[i - 1] - pre,m1)
//     ans = Math.max(m + max, m1 + m2, ans)
//     m = Math.max(m, max)
//     console.log(m)
//     pre = prices[i]
//   }
//   return ans
// };
// let tester = require('../tester')
// let testCases = [
//   {
//     data: [[3, 3, 5, 0, 0, 3, 1, 4]],
//     res: 6,
//   },
//   {
//     data: [[7, 6, 4, 3, 1]],
//     res: 0,
//   },
//   {
//     data: [[1, 2, 3, 4, 5]],
//     res: 4,
//   },
//   {
//     data: [[2, 4, 1]],
//     res: 2,
//   },
//   {
//     data: [[6, 1, 3, 2, 4, 7]],
//     res: 7,
//   },
//   {
//     data: [[3, 2, 6, 5, 0, 3]],
//     res: 7,
//   },
//   {
//     data: [[1,2,4,2,5,7,2,4,9,0]],
//     res: 13,
//   },
// ]
// tester(maxProfit, testCases)
// }
{
  /**
 * @param {number[]} prices
 * @return {number}
 */
  let maxProfit = function (prices) {
    let hold1 = -Infinity, hold2 = -Infinity
    let release1 = 0, release2 = 0
    for (let i = 0; i < prices.length; i++) {
      hold1 = Math.max(hold1, -prices[i]); //尝试买进
      release1 = Math.max(release1, hold1 + prices[i]); // 尝试卖出
      hold2 = Math.max(hold2, release1 - prices[i]);   
      release2 = Math.max(release2, hold2 + prices[i]);
      console.log(hold1,release1,hold2,release2)
    }
    return release2;
  }
  let tester = require('../tester')
  let testCases = [
    {
      data: [[3, 3, 5, 0, 0, 3, 1, 4]],
      res: 6,
    },
    {
      data: [[7, 6, 4, 3, 1]],
      res: 0,
    },
    {
      data: [[1, 2, 3, 4, 5]],
      res: 4,
    },
    {
      data: [[2, 4, 1]],
      res: 2,
    },
    {
      data: [[6, 1, 3, 2, 4, 7]],
      res: 7,
    },
    {
      data: [[3, 2, 6, 5, 0, 3]],
      res: 7,
    },
    {
      data: [[1, 2, 4, 2, 5, 7, 2, 4, 9, 0]],
      res: 13,
    },
  ]
  tester(maxProfit, testCases)
}