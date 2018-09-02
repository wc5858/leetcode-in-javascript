/**
 * @param {string} s
 * @return {string}
 */
// var shortestPalindrome = function (s) {
//   let j = s.length - 1
//   while(j>0) {
//     if(isPalindrome(s,j)) {
//       break
//     }
//     j--
//   }
//   let ans = ''
//   for(let i = s.length - 1;i>j;i--) {
//     ans += s[i]
//   }
//   return ans + s
// };
// function isPalindrome(s,j) {
//   let i = 0
//   while (i < j) {
//     if (s[i] !== s[j]) return false
//     i++
//     j--
//   }
//   return true
// }
// 这种算法似乎化用了kmp的思路，讲已匹配的部分串直接略过，提高效率
// 这题很值得再学习一下
var shortestPalindrome = function (s) {
  if (!s.length) return s;
  let string = s;
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    console.log(l,r)
    if (s[l] !== s[r]) {
      r--;
    } else {
      let right = r;
      let found = true;
      while (l <= r) {
        if (s[l] === s[r]) {
          l++;
          r--;
        } else {
          found = false;
          break;
        }
      }
      if (l + 1 >= r && found) {
        r++;
        r += l;
        break;
      } else {
        l = 0;
        if (r + 1 < right) {
          r++;
        }
        //          r++;
        //          r = right - 1;
      }
    }
  }
  console.log(r)
  if (r === 0) {
    r++;
  }
  return s.slice(r).split('').reverse().join('') + string;
};
let tester = require('../tester')
let testCases = [
  {
    data: ["aacecaaa"],
    res: "aaacecaaa",
  },
  {
    data: ["abcd"],
    res: "dcbabcd",
  }
]
// tester(shortestPalindrome, testCases)
console.log(shortestPalindrome('aaawvaaa'))