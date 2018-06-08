/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 思路是对的，但是p回退的时候i也要回退，而且只需要回退一步即可
// var isMatch = function(s, p) {
//   if (p.length === 0) return s.length === 0
//   let stack = []
//   let j = 0
//   let i = 0
//   let count = 0
//   while (i < s.length) {
//     if ((s[i] === p[j] || p[j] === '?')) {
//       console.log(i,j)
//       j++
//       i++
//     } else if (p[j] === '*') {
//       while (p[j + 1] === '*') {
//         j++
//       }
//       count++
//       stack.push(j)
//       if (j === p.length - 1) {
//         return true
//       }
//       while (s[i] !== p[j + 1]) {
//         if (i === s.length - 1) {
//           return false
//         }
//         i++
//       }
//       j++
//     } else {
//       if (count > 0) {
//         count--
//         j = stack.pop()
//         i++
//       } else {
//         return false
//       }
//     }

//   }
//   console.log(i, j,p.length)
//   return stack.length > 0 ? j === p.length - 1 : j === p.length
// }
var isMatch = function(s, p) {
  let i = 0,
    j = 0,
    match = 0,
    starIdx = -1
  while (i < s.length) {
    if (j < p.length && (s[i] === p[j] || p[j] === '?')) {
      i++
      j++
    } else if (j < p.length && p[j] === '*') {
      starIdx = j
      match = i
      j++
    } else if (starIdx != -1) {
      j = starIdx + 1
      match++
      i = match
    } else return false
  }
  while (j < p.length && p[j] === '*') j++

  return j == p.length
}
// console.log(isMatch("aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba","a*******b"))
// console.log(isMatch("acdcb","a*c?b"))
// console.log(isMatch("adceb","*a*b"))
// console.log(isMatch("aa","a"))
// console.log(isMatch("aa","*"))
// console.log(isMatch('a', 'aa'))
// console.log(isMatch('aa', 'aa'))
// console.log(isMatch('aaaa', '***a'))
// console.log(isMatch('aaaa', '***aa'))
console.log(isMatch('aaaa', '***aa'))
console.log(isMatch('aaaa', '***aaa'))
console.log(isMatch('aaaa', '***aaaa'))
console.log(isMatch('aaaa', '***aaaaa'))
console.log(isMatch('adceb', '*a*b'))
