/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 这个算法只能求解t没有重复字母的情况
// var minWindow = function(s, t) {
//   let set = new Set(t)
//   let found = new Set()
//   let queue = []
//   let min = Infinity
//   let res = ''
//   for (let i = 0; i < s.length; i++) {
//     if (set.has(s[i])) {
//       set.delete(s[i])
//       queue.push([s[i], i])
//       found.add(s[i])
//       if (!set.size) {
//         let next = queue.shift()
//         if (i - next[1] < min) {
//           res = s.substring(next[1], i + 1)
//           min = res.length
//         }
//         set.add(next[0])
//         found.delete(next[0])
//       }
//     } else if (found.has(s[i])) {
//       queue.push([s[i], i])
//       if (queue[0][0] === s[i]) {
//         queue.shift()
//       }
//     }
//   }
//   return res
// }
// 试图建立一个自定义数据结构，不过还是没有解决问题
// class mySet {
//   constructor(s) {
//     let map = new Map()
//     if (s) {
//       for (let i of s) {
//         if (map.has(i)) {
//           map.set(i, map.get(i) + 1)
//         } else {
//           map.set(i, 1)
//         }
//       }
//     }
//     this.map = map
//   }
//   has(i) {
//     return this.map.has(i)
//   }
//   delete(i) {
//     if (this.map.has(i)) {
//       if (this.map.get(i) === 1) {
//         this.map.delete(i)
//       } else {
//         this.map.set(i, this.map.get(i) - 1)
//       }
//     }
//   }
//   add(i) {
//     if (this.map.has(i)) {
//       this.map.set(i, this.map.get(i) + 1)
//     } else {
//       this.map.set(i, 1)
//     }
//   }
// }
// 其他人的解法，稍微改写了下
var minWindow = function(s, t) {
  let map = new Array(128).fill(0)
  for (let i = 0; i < t.length; i++) {
    map[t.charCodeAt(i)]++
  }
  let begin = 0,
    count = t.length
  let window_head = 0,
    window_length = s.length + 1
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i)]--
    if (map[s.charCodeAt(i)] >= 0) {
      // 找到一个字符
      count--
    }
    if (!count) {
      // count为0，发现一组匹配
      while (map[s.charCodeAt(begin)] < 0) {
        // 找到下一个匹配字符
        map[s.charCodeAt(begin)]++
        begin++
      }
      if (i - begin + 1 < window_length) {
        window_length = i - begin + 1
        window_head = begin
      }
      map[s.charCodeAt(begin)]++
      begin++
      count++
    }
  }
  return window_length > s.length ? '' : s.substr(window_head, window_length)
}

let tester = require('../tester')
var testCases = [
  {
    data: ['ADOBECODEBANC', 'ABC'],
    res: 'BANC',
  },
  {
    data: ['a', 'a'],
    res: 'a',
  },
  {
    data: ['abc', 'aac'],
    res: '',
  },
]
tester(minWindow, testCases)
