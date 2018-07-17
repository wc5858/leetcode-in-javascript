/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 方法是对的，不过超时了
// let isScramble = function(s1, s2) {
//   let len = s1.length
//   if (len < 2) {
//     return s1 === s2
//   }
//   if (len === 2) {
//     return s1 === s2 || (s1[0] === s2[1] && s1[1] === s2[0])
//   }
//   for (let i = 1; i < len; i++) {
//     if (
//       (isScramble(s1.substr(0, i), s2.substr(0, i)) &&
//         isScramble(s1.substr(i), s2.substr(i))) ||
//       (isScramble(s1.substr(0, i), s2.substr(len - i)) &&
//         isScramble(s1.substr(i), s2.substr(0, len - i)))
//     ) {
//       return true
//     }
//   }
//   return false
// }
// 加个缓存
// 性能还是不够好（160ms），猜测是截取字符串太花时间了
// let isScramble = function(s1, s2) {
//   let cache = {}
//   const isScramble = (s1, s2) => {
//     let tag = s1 + '&' + s2
//     if (cache[tag] !== undefined) return cache[tag]
//     let len = s1.length
//     if (len < 2) {
//       return s1 === s2
//     }
//     if (len === 2) {
//       return s1 === s2 || (s1[0] === s2[1] && s1[1] === s2[0])
//     }
//     for (let i = 1;i < len; i++) {
//       if (
//         (isScramble(s1.substr(0, i), s2.substr(0, i)) &&
//           isScramble(s1.substr(i), s2.substr(i))) ||
//         (isScramble(s1.substr(0, i), s2.substr(len - i)) &&
//           isScramble(s1.substr(i), s2.substr(0, len - i)))
//       ) {
//         cache[tag] = true
//         return true
//       }
//     }
//     cache[tag] = false
//     return false
//   }
//   return isScramble(s1, s2)
// };
// // 用坐标的方式处理（148ms）改进不明显
// let isScramble = function(s1, s2) {
//   let cache = {}
//   const isScramble = (x1, x2, y1, y2) => {
//     let tag = x1 + '-' + x2 + '-' + y1 + '-' + y2
//     if (cache[tag] !== undefined) return cache[tag]
//     if (x2 - x1 === 1) {
//       return s1[x1] === s2[y1]
//     }
//     for (let i = 1; i < x2 - x1; i++) {
//       if (
//         (isScramble(x1, x1 + i, y1, y1 + i) &&
//           isScramble(x1 + i, x2, y1 + i, y2)) ||
//         (isScramble(x1, x1 + i, y2 - i, y2) &&
//           isScramble(x1 + i, x2, y1, y2 - i))
//       ) {
//         cache[tag] = true
//         return true
//       }
//     }
//     cache[tag] = false
//     return false
//   }
//   return isScramble(0, s1.length, 0, s2.length)
// }
// 再通过增加检查字符是否匹配来简化复杂度
//（之前有想到过这一点，后来用了递归，看别人的写法的时候发现可以用来做优化，
// 不过那个人用了substr且没有做缓存，性能也不好）
// 72ms! beat100%
// 开心~
let isScramble = function(s1, s2) {
  let cache = {}
  const isScramble = (x1, x2, y1, y2) => {
    let tag = x1 + '-' + x2 + '-' + y1 + '-' + y2
    if (cache[tag] !== undefined) return cache[tag]
    let len = x2 - x1
    if (len === 1) {
      return s1[x1] === s2[y1]
    }
    let letters = new Array(26).fill(0)

    for (let i = 0; i < len; i++) {
      letters[s1.charCodeAt(x1 + i) - 97]++
      letters[s2.charCodeAt(y1 + i) - 97]--
    }
    for (let i = 0; i < 26; i++) {
      if (letters[i] != 0) return false
    }

    for (let i = 1; i < len; i++) {
      if (
        (isScramble(x1, x1 + i, y1, y1 + i) &&
          isScramble(x1 + i, x2, y1 + i, y2)) ||
        (isScramble(x1, x1 + i, y2 - i, y2) &&
          isScramble(x1 + i, x2, y1, y2 - i))
      ) {
        cache[tag] = true
        return true
      }
    }
    cache[tag] = false
    return false
  }
  return isScramble(0, s1.length, 0, s2.length)
}
let tester = require('../tester')
let testCases = [
  {
    data: ['great', 'regat'],
    res: true,
  },
  {
    data: ['great', 'rgeat'],
    res: true,
  },
  {
    data: ['abcde', 'caebd'],
    res: false,
  },
  {
    data: ['abab', 'aabb'],
    res: true,
  },
  {
    data: ['a', 'b'],
    res: false,
  },
  {
    data: ['abcdefghijklmnopq', 'efghijklmnopqcadb'],
    res: false,
  },
]
tester(isScramble, testCases)
