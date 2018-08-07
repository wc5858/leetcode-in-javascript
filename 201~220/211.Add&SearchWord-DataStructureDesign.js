// 用了208题Trie的数据结构，性能不是特别好
class WordDictionary {
  constructor() {
    this.data = {}
  }
  addWord(word) {
    let data = this.data
    for (let i = 0; i < word.length; i++) {
      if (data[word[i]] === undefined) {
        data[word[i]] = {}
      }
      data = data[word[i]]
    }
    data[0] = true
  }
  search(word) {
    let helper = (root, w) => {
      if (w.length === 0) root[0] === true
      let data = root
      for (let i = 0; i < w.length; i++) {
        if (w[i] === '.') {
          for (const j in data) {
            if (data.hasOwnProperty(j) && j != 0 && helper(data[j], w.slice(i + 1))) {
              return true
            }
          }
          return false
        }
        if (data[w[i]] === undefined) {
          return false
        }
        data = data[w[i]]
      }
      return data[0] === true
    }
    return helper(this.data, word)
  }
}

let w = new WordDictionary()
w.addWord("bad")
w.addWord("dad")
w.addWord("mad")
w.search("pad")
w.search("bad")
console.log(w.search(".ad"))
console.log(w.search("b.."))

// 其他人的答案，通过长度将词归类，在这个题的情形下性能很好
// class WordDictionary {
//   constructor() {
//     this.map = {};
//   }
//   addWord(w) {
//     const l = w.length;
//     this.map[l] = this.map[l] || [];
//     this.map[l].push(w);
//   }
//   match(exist, input) {
//     for (let i = 0; i < input.length; i++) {
//       if (input[i] !== '.' && input[i] !== exist[i]) return false;
//     }
//     return true;
//   }
//   search(w) {
//     const l = w.length;
//     for (const ww of this.map[l] || []) {
//       if (this.match(ww, w)) return true;
//     }
//     return false;
//   }
// }