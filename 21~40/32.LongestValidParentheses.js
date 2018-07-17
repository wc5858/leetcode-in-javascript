/**
 * @param {string} s
 * @return {number}
 */
// 视图用栈做，思路有偏差，没有解决取最大值的问题
// 以下是看的solution。同样是用栈，但是把index推入栈记录了位置信息，颇为巧妙
let longestValidParentheses = function(s) {
  let maxans = 0
  const stack = [-1]
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      } else {
        maxans = Math.max(maxans, i - stack[stack.length-1])
      }
    }
  }
  return maxans
}
console.log(longestValidParentheses('(()'))
