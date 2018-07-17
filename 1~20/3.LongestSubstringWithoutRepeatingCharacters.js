/**
 * @param {string} s
 * @return {number}
 */
{
  // 直接利用indexOf和字符串剪裁似乎性能更好，不过思路似乎是一样的
  // my solution use a hashmap, idea is right but using string directly is faster
  let lengthOfLongestSubstring = function(s) {
    let hash = {}
    let lastLen = 0
    let curLen = 0
    let latest = 0
    for (let i = 0; i < s.length; i++) {
      let data = hash[s[i]]
      if (data !== undefined && data >= latest) {
        lastLen = Math.max(lastLen, curLen)
        curLen = i - data
        latest = data
      } else {
        curLen++
      }
      hash[s[i]] = i
    }
    lastLen = Math.max(lastLen, curLen)
    return lastLen
  }
}
{
  // 最高分的解答，可以看到思路是一样的= =
  // copied from fastest solution
  let lengthOfLongestSubstring = function(s) {
    if (s === null) {
      return 0
    }
    if (s.length <= 1) {
      return s.length
    }

    let longest = 1
    let i = 0
    let j = 1

    while (j < s.length) {
      if (s.slice(i, j).indexOf(s.charAt(j)) >= 0) {
        i += s.slice(i, j).indexOf(s.charAt(j)) + 1
      } else {
        longest = Math.max(j - i + 1, longest)
      }

      j++
    }
    return longest
  }
}
