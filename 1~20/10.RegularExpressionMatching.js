/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// let isMatch = function (s, p) {
//   let cursor = 0
//   let last = ''
//   for (let i = 0; i < p.length; i++) {
//     console.log(p[i], s[cursor],cursor,last)
//     if (p[i] === '.' && s[cursor]!==undefined) {
//       cursor++
//     } else if (p[i] === '*') {
//       if (last === '.') {
//         let flag = true
//         while (cursor < s.length) {
//           flag = isMatch(s.slice(cursor + 1), p.slice(i + 1))
//           if (flag) {
//             return true
//           } else {
//             cursor++
//           }
//         }
//         if(!flag) {
//           return false
//         }
//       }
//       while (s[cursor] === last) {
//         cursor++
//       }
//       let j = i + 1
//       while (p[j] === last) {
//         cursor--
//         j++
//       }
//       if (cursor === s.length && p[j+1] ==='*') {
//         cursor--
//       }
//     } else {
//       if (p[i] === s[cursor]) {
//         cursor++
//       } else {
//         if ((s[cursor] === undefined && p[i + 1] !== '*') || s === '' || (cursor < s.length && p[i + 1] !== '*')) {
//           return false
//         }
//       }
//     }
//     last = p[i]
//   }
//   return cursor === s.length
// };

// // console.log(isMatch('aab', 'c*a*b'))
// // console.log(isMatch('a', '.*'))
// // console.log(isMatch('a', '.*..a'))
// console.log(isMatch('a', '.*..a*'))
// // console.log(isMatch('aaa', 'ab*a*c*a'))

// let isMatch = function (s, p) {
//   let cursor = s.length - 1
//   console.log(cursor)
//   for (let j = p.length - 1; j >= 0; j--) {
//     if (p[j] === '.') {
//       cursor--
//     } else if (p[j] === '*') {
//       if (j === 1) {
//         if (p[j - 1] === '.') {
//           return true
//         } else {
//           while (s[cursor] === p[j - 1]) {
//             cursor--
//           }
//           return cursor === -1
//         }
//       } else {
//         while (cursor >= 0) {
//           console.log(s.slice(0,cursor+2),p.slice(0,j-1))
//           if (isMatch(s.slice(0, cursor), p.slice(0, j - 1))) {
//             return true
//           }
//           cursor--
//         }
//         return false
//       }
//       // while ((p[j - 1] === '.' || s[cursor] === p[j - 1]) && cursor >= 0) {
//       //   console.log(s.slice(0,cursor+2),p.slice(0,j-1))
//       //   // if(isMatch(s.slice(0,cursor),p.slice(0,j-1))){
//       //   //   return true
//       //   // }
//       //   cursor--
//       //   // // if (isMatch())
//       //   if (j=1 && ) {
//       //     while(s[cursor] === p[j - 1])
//       //   }
//       // }
//     } else {
//       // console.log(j)
//       if (p[j] === s[cursor]) {
//         cursor--
//       } else {
//         return false
//       }
//     }
//   }
//   return cursor === -1
// };

// console.log(isMatch('aab', 'c*a*b'))
// console.log(isMatch('a', '.*'))
// console.log(isMatch('a', '.*..a'))
// console.log(isMatch('a', '.*..a*'))
// console.log(isMatch('aaa', 'ab*a*c*a'))
// console.log(isMatch("aasdfasdfasdfasdfas","aasdf.*asdf.*asdf.*asdf.*s"))
// console.log(isMatch("asdfasdfas", "asdf.*asdf.*s"))
// console.log(isMatch('aaa', 'aaaa'))
// console.log(isMatch('aa', 'a'))

// 我战斗过，但是我跪了
// I tried but failed
//
// transform the solution's java to js
// let isMatch = function (s, p) {
//   if (p.length === 0) return s.length === 0
//   let firstMatch = (s.length !== 0 && (p[0] == s[0] || p[0] == '.'))

//   if (p.length >= 2 && p[1] == '*') {
//     return (isMatch(s, p.substring(2)) ||
//       (firstMatch && isMatch(s.substring(1), p)))
//   } else {
//     return firstMatch && isMatch(s.substring(1), p.substring(1))
//   }
// }

// copy from best js answer
// using dynamic programming to cache
let cache;

let isMatch = function (s, p) {
  cache = new Array(s.length + 1);
  return dp(0, 0, s, p);
};

function dp(i, j, s, p) {
  // utilize previous calculations
  if (cache[i] !== undefined && cache[i][j] !== undefined) {
    return cache[i][j] === true;
  }

  let answer;

  if (j === p.length) {
    // Base Case: reached end of p
    // SUCCESS if also at end of s, FAIL if not
    answer = i === s.length;
  } else {
    // first possible match if
    // 1) s char = p char
    // 2) p char is .
    const firstMatch = (i < s.length && (p[j] === s[i] || p[j] === '.'));

    if (j + 1 < p.length && p[j + 1] === '*') {
      // if a * is coming next, match if:
      answer = (dp(i, j + 2, s, p) || // keep couuent char, consume p char*
        firstMatch && dp(i + 1, j, s, p)); // consume current char as one of *'s 0+, maintain p char
    } else {
      // any other p char coming next
      answer = (firstMatch && dp(i + 1, j + 1, s, p)) // consume s and p char
    }
  }

  // initialize sub array if not initialized already
  cache[i] = cache[i] || new Array(p.length + 1);
  cache[i][j] = answer;
  return answer;
}
console.log(isMatch("asdfasdfas", "asdf.*asdf.*s"))