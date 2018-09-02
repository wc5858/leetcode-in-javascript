/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// 这样操作的复杂度比较高
// 优化方案是建立trie结构
var findWords = function (board, words) {
  let ans = []
  let wordsSet = new Set(words)
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      for (const k of wordsSet.values()) {
        if (search(i, j, k, 0)){
          ans.push(k)
          wordsSet.delete(k)
        }
      }
    }
  }
  function search(i, j, s, d) {
    if (board[i][j] === s[d]) {
      if(d === s.length - 1) return true
      board[i][j] = '.'
      let next = i > 0 && search(i - 1, j, s, d + 1) ||
        j > 0 && search(i, j - 1, s, d + 1) ||
        i < board.length - 1 && search(i + 1, j, s, d + 1) ||
        j < board[0].length - 1 && search(i, j + 1, s, d + 1)
      board[i][j] = s[d]
      return next
    }
    return false
  }
  return ans
};
let words = ["oath", "pea", "eat", "rain"]
let board =
  [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v']
  ]
console.log(findWords(board, words))