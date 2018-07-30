/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let ans = ''
  while (n > 0) {
    let temp = n % 26
    if (temp === 0) {
      ans = 'Z' + ans
      temp = 26
    } else {
      ans = String.fromCharCode(64 + temp) + ans
    }
    n = (n - temp) / 26
  }
  return ans
}

let tester = require('../tester')
let testCases = [
  {
    data: [1],
    res: 'A',
  },
  {
    data: [28],
    res: 'AB',
  },
  {
    data: [701],
    res: 'ZY',
  },
  {
    data: [52],
    res: 'AZ',
  },
  {
    data: [702],
    res: 'ZZ',
  },
  {
    data: [702],
    res: 'ZZ',
  },
  {
    data: [728],
    res: 'AAZ',
  },
]
tester(convertToTitle, testCases)
