
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let ans = []
  let set = new Set()
  for (let i = 0; i < s.length - 9; i++) {
    let str = s.substr(i, 10)
    if (set.has(str)) {
      ans.push(str)
    } else {
      set.add(str)
    }
  }
  return ans
};
