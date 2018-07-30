/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
  if (numerator === 0) return '0'
  let isNegative = numerator * denominator < 0
  numerator = Math.abs(numerator)
  denominator = Math.abs(denominator)
  let ans = ''
  while (numerator > denominator) {
    ans += Math.floor(numerator / denominator)
    numerator %= denominator
  }
  if (ans === '') ans = '0'
  if (numerator > 0) {
    ans += '.'
    let stack = []
    let numerators = new Map()
    let tag
    while (numerator > 0) {
      if (numerators.has(numerator)) {
        tag = numerators.get(numerator)
        break
      }
      numerators.set(numerator, stack.length)
      numerator *= 10
      stack.push(Math.floor(numerator / denominator))
      numerator %= denominator
    }
    if (tag !== undefined) {
      for (let i = 0; i < stack.length; i++) {
        if (i === tag) ans += '('
        ans += stack[i]
      }
      ans += ')'
    } else {
      ans += stack.join('')
    }
  }
  return isNegative ? '-' + ans : ans
}

let tester = require('../tester')
let testCases = [
  {
    data: [1, 2],
    res: '0.5',
  },
  {
    data: [2, 1],
    res: '2',
  },
  {
    data: [2, 3],
    res: '0.(6)',
  },
  {
    data: [-50, 8],
    res: '-6.25',
  },
  {
    data: [1, 2324],
    res:
      '0.00(043029259896729776247848537005163511187607573149741824440619621342512908777969018932874354561101549053356282271944922547332185886402753872633390705679862306368330464716006884681583476764199655765920826161790017211703958691910499139414802065404475)',
  },
]
tester(fractionToDecimal, testCases)
