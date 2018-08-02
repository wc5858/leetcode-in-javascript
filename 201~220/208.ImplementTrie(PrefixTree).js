/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.data = {}
}

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let data = this.data
  for (let i = 0; i < word.length; i++) {
    if (data[word[i]] === undefined) {
      data[word[i]] = {}
    }
    data = data[word[i]]
  }
  data[0] = true
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let data = this.data
  for (let i = 0; i < word.length; i++) {
    if (data[word[i]] === undefined) {
      return false
    }
    data = data[word[i]]
  }
  return data[0] === true
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let data = this.data
  for (let i = 0; i < prefix.length; i++) {
    if (data[prefix[i]] === undefined) {
      return false
    }
    data = data[prefix[i]]
  }
  return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
