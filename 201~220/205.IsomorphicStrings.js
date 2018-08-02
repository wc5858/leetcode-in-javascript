/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let mapA = {}
  let mapB = {}

  for (let i = 0; i < s.length; i++) {
    if (mapA[s[i]]) {
      if (t[i] !== mapA[s[i]]) {
        return false
      }
    } else {
      mapA[s[i]] = t[i]
    }
    if (mapB[t[i]]) {
      if (s[i] !== mapB[t[i]]) {
        return false
      }
    } else {
      mapB[t[i]] = s[i]
    }
  }
  return true
}
{
  // 还有另一种优化方法：用index作关联
  let isIsomorphic = function(s, t) {
    // if (s.length != t.length) return false
    // 题目已假定两串等长
    const set1 = {}
    const set2 = {}
    for (let i = 0; i < s.length; i++) {
      if (set1[s[i]] != set2[t[i]]) return false
      set1[s[i]] = i
      set2[t[i]] = i
    }
    return true
  }
}
