/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
{
  // 暴力破解 超时了
  let numDistinct = function (s, t) {
    if (t === '') return 1
    let ans = 0
    let index = s.indexOf(t[0])
    while (index > -1) {
      ans += numDistinct(s.substring(index + 1), t.substr(1))
      index = s.indexOf(t[0], index + 1)
    }
    return ans
  };
}
{
  // 递归&缓存
  let numDistinct = function (s, t) {
    let cache = {}
    return (function helper(i, j) {
      let tag = i + '-' + j
      if (cache[tag] !== undefined) return cache[tag]
      if (j === t.length) return 1
      let ans = 0
      let idx = s.indexOf(t[j], i)
      while (idx > -1) {
        ans += helper(idx + 1, j + 1)
        idx = s.indexOf(t[j], idx + 1)
      }
      cache[tag] = ans
      return ans
    })(0, 0)
  };

  let tester = require('../tester')
  let testCases = [
    {
      data: ['babgbag', 'bag'],
      res: 5,
    },
    {
      data: ['rabbbit', 'rabbit'],
      res: 3,
    },
  ]
  tester(numDistinct, testCases)
}

{
  // 一种更简洁的做法
  let numDistinct = function(s, t) {
    const combinations = Array(t.length).fill(0);
    for (let i = 0; i < s.length; i++) {
      for (let j = t.length - 1; j >= 0; j--) {
        if (t[j] ===  s[i]) {
          combinations[j] += j ? combinations[j - 1] : 1;
        }
      }
    }
    return combinations[combinations.length - 1];
  };
  let tester = require('../tester')
  let testCases = [
    {
      data: ['babgbag', 'bag'],
      res: 5,
    },
    {
      data: ['rabbbit', 'rabbit'],
      res: 3,
    },
  ]
  tester(numDistinct, testCases)
}