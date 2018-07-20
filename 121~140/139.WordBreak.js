/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // let cache = new Set()
  let cache = []
  function helper(idx) {
    if (idx === s.length) return true
    if(cache[idx]) return false
    for (let i = 0; i < wordDict.length; i++) {
      if (
        s.indexOf(wordDict[i], idx) === idx &&
        helper(idx + wordDict[i].length)
      ) {
        return true
      }
    }
    cache[idx] = true
    return false
  }
  return helper(0)
}
let tester = require('../tester')
let testCases = [
  {
    data: ['leetcode', ['leet', 'code']],
    res: true,
  },
  {
    data: ['applepenapple', ['apple', 'pen']],
    res: true,
  },
  {
    data: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']],
    res: false,
  },
]
tester(wordBreak, testCases)
