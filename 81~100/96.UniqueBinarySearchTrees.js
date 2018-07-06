/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let cache = []
  function numTrees(n) {
    if (n < 3) {
      return n === 0 ? 1 : n
    } else {
      if (cache[n]) return cache[n]
      let res = 0
      for (let i = 1; i <= n; i++) {
        res += numTrees(i - 1) * numTrees(n - i)
      }
      cache[n] = res
      return res
    }
  }
  return numTrees(n)
};

let tester = require('../tester')
var testCases = [
  {
    data: [4],
    res: 14,
  },
  {
    data: [3],
    res: 5,
  },
  {
    data: [2],
    res: 2,
  },
  {
    data: [1],
    res: 1,
  },
]
tester(numTrees, testCases)