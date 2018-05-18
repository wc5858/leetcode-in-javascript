/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  let check = function(val) {
    let out = stack.pop()
    return (
      (out === '(' && val === ')') ||
      (out === '[' && val === ']') ||
      (out === '{' && val === '}')
    )
  }
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
      case '[':
      case '{':
        stack.push(s[i])
        break
      default:
        if (!check(s[i])) return false
        break
    }
  }
  return stack.length === 0
}
