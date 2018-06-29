let tester = require('../tester')
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 想叉了
// 我以为这个问题等效为找两个串中，顺序相同但不一定连续的字符序列，但似乎反而把问题复杂化了
// var minDistance = function(word1, word2) {
//   let map = new Map()
//   for (let j = 0; j < word2.length; j++) {
//     if (map.has(word2[j])) {
//       map.get(word2[j]).push(j)
//     } else {
//       map.set(word2[j], [j])
//     }
//   }
//   console.log(map)
//   function largestSubsequence(s1, limit) {
//     if (!s1.length) return 0
//     let cur = 0
//     let stack = []
//     console.log(s1,limit)
//     for (let i = 0; i < s1.length; i++) {
//       if (map.has(s1[i])) {
//         let exist = true
//         for(let val of map.get(s1[i])) {
//           if(val>limit) {
//             if(exist) {
//               limit = val
//               cur++
//               exist = false
//             }
//             stack.push(cur + largestSubsequence(s1.substr(i + 1), val))
//           }
//         }
//         // console.log(s1,stack,cur)
//       }
//     }
//     return Math.max(...stack,0)
//     // return cur
//   }
//   console.log(largestSubsequence(word1, -1))
// }
// 其他人的解法
// https://www.dreamxu.com/books/dsa/dp/edit-distance.html这里有讲解
var minDistance = function(word1, word2) {
  let m = word1.length
  let n = word2.length
  let dp = []
  for (let i = 0; i <= n; i++) {
    dp.push(i)
  }
  for (let i = 1; i <= m; i++) {
    let pre = dp[0]
    dp[0] = i
    for (let j = 1; j <= n; j++) {
      let cur = dp[j]
      if (word1[i - 1] == word2[j - 1]) {
        dp[j] = pre
      } else {
        dp[j] = Math.min(pre, dp[j], dp[j - 1]) + 1
      }
      pre = cur
    }
  }
  return dp[n]
}
var testCases = [
  {
    data: ['horse', 'ros'],
    res: 3,
  },
  {
    data: ['intention', 'execution'],
    res: 5,
  },
  {
    data: ['ation', 'ation'],
    res: 5,
  },
]
tester(minDistance, testCases)
