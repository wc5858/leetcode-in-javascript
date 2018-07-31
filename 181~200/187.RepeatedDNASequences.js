/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let ans = []
  let multi = new Set()
  let set = new Set()
  for (let i = 0; i < s.length - 9; i++) {
    let str = s.substr(i, 10)
    if (multi.has(str)) {
      continue
    } else if (set.has(str)) {
      multi.add(str)
      ans.push(str)
    } else {
      set.add(str)
    }
  }
  return ans
}
{
  // 另外一种解法是算哈希值进行比对
  const values = {
    A: 0,
    C: 1,
    G: 2,
    T: 3,
  }

  const char2Val = c => {
    return values[c]
  }

  let findRepeatedDnaSequences = function(s) {
    const seen = new Set()
    const multiple = new Set()
    const res = []

    let key = 0
    for (let i = 0; i < 10; i++) {
      key = (key << 2) | char2Val(s[i])
    }
    seen.add(key)

    let mask = (1 << 20) - 1
    for (let i = 10; i < s.length; i++) {
      key = ((key << 2) & mask) | char2Val(s[i])
      if (multiple.has(key)) {
        continue
      } else if (seen.has(key)) {
        multiple.add(key)
        res.push(s.substring(i - 9, i + 1))
      } else {
        seen.add(key)
      }
    }

    return res
  }
}
