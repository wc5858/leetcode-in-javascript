/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let level = 1
  let ans = 0
  for (let i = s.length - 1; i >= 0; i--) {
    ans += (s.charCodeAt(i) - 64) * level
    level *= 26
  }
  return ans
}

let tester = require('../tester')
let testCases = [
  {
    data: ['A'],
    res: 1,
  },
  {
    data: ['AB'],
    res: 28,
  },
  {
    data: ['ZY'],
    res: 701,
  },
  {
    data: ['AZ'],
    res: 52,
  },
  {
    data: ['ZZ'],
    res: 702,
  },
  {
    data: ['AAZ'],
    res: 728,
  },
]
tester(titleToNumber, testCases)
