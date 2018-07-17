/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
{
  let isInterleave = function (s1, s2, s3) {
    let cache = {}
    function isInterleave(i, j) {
      let flag = i + '-' + j
      if (cache[flag] !== undefined) return cache[flag]
      let k = i + j
      if (i === s1.length) {
        return cache[flag] = (s2.substr(j) === s3.substr(k))
      }
      if (j === s2.length) {
        return cache[flag] = (s1.substr(i) === s3.substr(k))
      }
      if (s1[i] === s3[k] && s2[j] === s3[k]) {
        return cache[flag] = (isInterleave(i + 1, j) || isInterleave(i, j + 1))
      }
      if (s1[i] === s3[k]) {
        return cache[flag] = isInterleave(i + 1, j)
      }
      if (s2[j] === s3[k]) {
        return cache[flag] = isInterleave(i, j + 1)
      }
      return cache[flag] = false
    }
    let ans = isInterleave(0, 0)
    return ans
  };

  let tester = require('../tester')
  let testCases = [
    {
      data: ['aabcc', 'dbbca', 'aadbbcbcac'],
      res: true,
    }, {
      data: ['aabcc', 'dbbca', 'aadbbbaccc'],
      res: false,
    }, {
      data: ['aaaa', 'bbbb', 'aaaabbbb'],
      res: true,
    }, {
      data: ['', '', ''],
      res: true,
    },
  ]
  tester(isInterleave, testCases)
}
{
  // 尝试用动态规划来解
  // 缺点：
  // 1.难以理解和编写（可能对我来说）
  // 2.难以提前终止循环（判断条件比较复杂），实际性能不如上面的写法
  // 优点：
  // 1.避免使用递归
  // 2.锻炼思维（雾）
  // 总结，在写之前一些题目的过程中发现，能用递归+缓存做的很多题目也都可以用动态规划解
  let isInterleave = function (s1, s2, s3) {
    if (s1 === '') return s2 === s3
    if (s2 === '') return s1 === s3
    if (s3.length !== s1.length + s2.length) return false
    let cache = []
    for (let j = 0; j <= s2.length; j++) {
      cache[j] = []
      if (j === 0) {
        cache[0][0] = true
      } else {
        cache[j][0] = cache[j - 1][0] && s2[j - 1] == s3[j - 1]
      }
    }
    for (let i = 1; i <= s1.length; i++) {
      cache[0][i] = cache[0][i - 1] && s1[i - 1] == s3[i - 1]
    }
    for (let i = 1; i <= s1.length; i++) {
      for (let j = 1; j <= s2.length; j++) {
        cache[j][i] = (cache[j][i - 1] && s1[i - 1] === s3[i + j - 1]) || 
          (cache[j - 1][i] && s2[j - 1] === s3[i + j - 1])
      }
    }
    return cache[s2.length - 1][s1.length] || cache[s2.length][s1.length - 1]
  };

  let tester = require('../tester')
  let testCases = [
    {
      data: ['aabcc', 'dbbca', 'aadbbcbcac'],
      res: true,
    }, {
      data: ['aabcc', 'dbbca', 'aadbbbaccc'],
      res: false,
    }, {
      data: ['aaaa', 'bbbb', 'aaaabbbb'],
      res: true,
    },
    {
      data: ['', '', ''],
      res: true,
    },
    {
      data: ['a', 'b', 'a'],
      res: false,
    },
    {
      data: ['ab', 'bc', 'bbac'],
      res: false,
    },
  ]
  tester(isInterleave, testCases)
}