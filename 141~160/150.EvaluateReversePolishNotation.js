/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = []
  for (let i = 0; i < tokens.length; i++) {
    if (isNaN(+tokens[i])) {
      let r = stack.pop()
      let l = stack.pop()
      let ans
      switch (tokens[i]) {
        case '+':
          ans = r + l
          break
        case '-':
          ans = l - r
          break
        case '*':
          ans = r * l
          break
        case '/':
          ans = Math.trunc(l / r)
          break
        default:
          break
      }
      stack.push(ans)
    } else {
      stack.push(+tokens[i])
    }
  }
  return stack[0]
}
let tester = require('../tester')
let testCases = [
  {
    data: [['2', '1', '+', '3', '*']],
    res: 9,
  },
  {
    data: [['4', '13', '5', '/', '+']],
    res: 6,
  },
  {
    data: [
      ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'],
    ],
    res: 22,
  },
]
tester(evalRPN, testCases)
