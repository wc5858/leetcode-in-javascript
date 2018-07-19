/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// 这题感觉很好玩
{
  // 这种解法其实是暴力破解，O(n^2)
  let canCompleteCircuit = function (gas, cost) {
    let n = gas.length
    for (let idx = 0; idx < n; idx++) {
      let curGas = gas[idx]
      for (let i = 0; i < n - 1; i++) {
        curGas -= cost[(idx + i) % n]
        if (curGas < 0) {
          break
        } else {
          curGas += gas[(idx + i + 1) % n]
        }
      }
      if (curGas >= cost[(idx + n - 1) % n]) {
        return idx
      }
    }
    return -1
  };

  let tester = require('../tester')
  let testCases = [
    {
      data: [[1, 2, 3, 4, 5], [3, 4, 5, 1, 2]],
      res: 3,
    },
    {
      data: [[2, 3, 4], [3, 4, 3]],
      res: -1,
    }
  ]
  tester(canCompleteCircuit, testCases)
}
{
  // 更巧妙的解法是直接计算，O(n)
  let canCompleteCircuit = function (gas, cost) {
    let start = gas.length - 1
    let end = 0
    let sum = gas[start] - cost[start]
    while (start > end) {
      if (sum >= 0) {
        // 只要sum还够，就往终点走
        sum += gas[end] - cost[end]
        end++
      } else {
        // 否则就找个更合适的起点
        start--
        sum += gas[start] - cost[start]
      }
    }
    return sum >= 0 ? start : -1
  };
}