/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let data1 = version1.split('.')
  let data2 = version2.split('.')
  let maxLen = Math.max(data1.length, data2.length)
  for (let i = 0; i < maxLen; i++) {
    if (i < data1.length && i < data2.length) {
      let num1 = +data1[i]
      let num2 = +data2[i]
      if (num1 > num2) return 1
      if (num1 < num2) return -1
    } else {
      if (i < data1.length && +data1[i] !== 0) return 1
      if (i < data2.length && +data2[i] !== 0) return -1
    }
  }
  return 0
}

let tester = require('../tester')
let testCases = [
  {
    data: ['0.1', '1.1'],
    res: -1,
  },
  {
    data: ['1.0.1', '1'],
    res: 1,
  },
  {
    data: ['7.5.2.4', '7.5.3'],
    res: -1,
  },
  {
    data: ['1', '1'],
    res: 0,
  },
  {
    data: ['01', '1'],
    res: 0,
  },
  {
    data: ['1.0', '1'],
    res: 0,
  },
]
tester(compareVersion, testCases)
