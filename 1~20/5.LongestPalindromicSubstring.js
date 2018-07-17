/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
  let longest = 1
  let len = 0
  let longestStr = s[0]
  for (let i = 1; i < s.length; i++) {
    if (i - 2 >= 0 && s[i] == s[i - 2]) {
      len = 3
      let j
      for (j = 1;
        (i - 2 - j) >= 0 && (i + j) < s.length && s[i - 2 - j] == s[i + j]; j++) {
        len += 2
      }
      if (len > longest) {
        longestStr = s.slice(i - 1 - j, i + j)
        longest = len
      }
    }
    if (i - 1 >= 0 && s[i] == s[i - 1]) {
      len = 2
      let j
      for (j = 1;
        (i - 1 - j) >= 0 && (i + j) < s.length && s[i - 1 - j] == s[i + j]; j++) {
        len += 2
      }
      if (len > longest) {
        longestStr = s.slice(i - j, i + j)
        longest = len
      }
    }
  }
  return longestStr
};