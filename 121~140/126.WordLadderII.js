/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} set
 * @return {string[][]}
 */
{
  // 还是有性能问题
  let findLadders = function (beginWord, endWord, wordList) {
    let set = new Set(wordList)
    if (set.size === 0 || !set.has(endWord)) {
      return []
    }
    let ans = []
    set.delete(endWord)
    let beginSet = [{
      word: beginWord,
      data: beginWord
    }]
    let getAns = false
    let level = 1
    while (beginSet.length > 0 && level < wordList.length && !getAns) {
      let temp = []
      for (let item of beginSet) {
        let word = item.word
        for (let i = 0; i < word.length; i++) {
          let former = i == 0 ? '' : word.slice(0, i)
          let after = word.slice(i + 1)

          for (let j = 0; j < 26; j++) {
            let letter = String.fromCharCode(97 + j)
            let newWord = former + letter + after
            if (newWord === endWord) {
              getAns = true
              let ladder = item.data.split('-')
              ladder.push(endWord)
              ans.push(ladder)
            }

            if (set.has(newWord)) {
              temp.push({
                word: newWord,
                data: item.data + '-' + newWord
              })
            }
          }
        }
      }
      beginSet = temp
      level++
    }
    return ans
  };

  console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))
  console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log"]))
  console.log(findLadders("a", "c", ["a", "b", "c"]))
  console.log(findLadders("hot", "dog", ["hot", "dog"]))
  console.log(findLadders("red", "tax", ["ted", "tex", "red", "tax", "tad", "den", "rex", "pee"]))
  // [["red","ted","tad","tax"],["red","ted","tex","tax"],["red","rex","tex","tax"]]
}