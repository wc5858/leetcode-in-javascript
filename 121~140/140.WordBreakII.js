/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  // let cache = new Set()
  let cache = []
  function helper(idx) {
    if (cache[idx]) return cache[idx]
    let ans = []
    for (let i = 0; i < wordDict.length; i++) {
      if (s.indexOf(wordDict[i], idx) === idx) {
        if(idx + wordDict[i].length === s.length) {
          ans.push(wordDict[i])
        } else {
          let data = helper(idx + wordDict[i].length)
          for (let j = 0; j < data.length; j++) {
            ans.push(wordDict[i] + ' ' + data[j])
          }
        }
      }
    }
    cache[idx] = ans
    return ans
  }
  return helper(0)
}

console.log(wordBreak('catsanddog',["cat", "cats", "and", "sand", "dog"]))
console.log(wordBreak('pineapplepenapple',["apple", "pen", "applepen", "pine", "pineapple"]))
console.log(wordBreak('catsandog',["cats", "dog", "sand", "and", "cat"]))