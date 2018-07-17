/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
{
  // 使用窗口滑动的方式实现，但似乎不是最优解，当首次匹配项较多时，处理比较冗余，会导致超时
  // 因此9~17行对数据进行了过滤
  let findSubstring = function(s, words) {
    if (!s || words.length == 0 || s.length < words.length) return []
    let set = new Set(words)
    let vals = [...set]
    if (
      set.size === 2 &&
      s.indexOf(vals[0] + vals[1]) === -1 &&
      s.indexOf(vals[1] + vals[0]) === -1
    )
      return []
    let each = words[0].length
    let window = each * words.length
    let index = s.indexOf(words[0])
    if (index == -1) {
      return []
    }
    let res = []
    while (index > -1) {
      for (let i = index - window + each; i <= index; i += each) {
        if (i < 0) {
          continue
        } else {
          let arr = [...words]
          for (let j = i + window - each; j >= i; j -= each) {
            if (j + each > s.length) {
              break
            }
            let str = s.substr(j, each)
            let idx = arr.indexOf(str)
            if (idx !== -1) {
              arr[idx] = 0
            } else {
              break
            }
          }
          let label = true
          for (let k = 0; k < arr.length; k++) {
            if (arr[k] !== 0) {
              label = false
              break
            }
          }
          if (label && !res.includes(i)) {
            res.push(i)
          }
        }
      }
      index = s.indexOf(words[0], index + 1)
    }
    return res
  }
}
{
  // 别人的解答方案，写的很酷
  // other guy's answer
  /**
   * @param {string} s
   * @param {string[]} words
   * @return {number[]}
   */
  let findSubstring = function(s, words) {
    // Sliding Window, Time: O((m + n) * wl), Space: O(m * wl), n = string length, m = dict size, wl = word length
    // travel all the words combinations to maintain a window
    // there are wl(word len) times travel, each time, n/wl words, mostly 2 times travel for each word
    // one left side of the window, the other right side of the window
    // so, time complexity O(wl * 2 * N/wl) = O(2N)
    let ans = []
    let n = s.length // n
    let cnt = words.length // m

    if (n <= 0 || cnt <= 0) {
      return ans
    }

    // init word occurrence
    let dict = new Map()
    for (let i = 0; i < cnt; i++) {
      dict.set(words[i], dict.has(words[i]) ? dict.get(words[i]) + 1 : 1) // Space: O(m * wl)
    }

    // travel all sub string combinations
    let wl = words[0].length
    let left, count, tDict, str, str1
    for (let i = 0; i < wl; i++) {
      // Time: O(wl)
      // 按偏移量遍历
      left = i
      count = 0
      tDict = new Map()
      for (let j = i; j <= n - wl; j += wl) {
        // 按words长度分片，值得注意的是j递增时，tDict不一定重置
        // Time: O(n / wl)
        str = s.substr(j, wl) // Time: O(wl)
        // a valid word, accumulate results
        if (dict.has(str)) {
          tDict.set(str, tDict.has(str) ? tDict.get(str) + 1 : 1)
          if (tDict.get(str) <= dict.get(str)) {
            // 这一层判断很巧妙地处理了word多余的情况：将窗口右移，释放记录
            count += 1
          } else {
            // a more word, advance the window left side possibly
            while (tDict.get(str) > dict.get(str)) {
              str1 = s.substr(left, wl)
              tDict.set(str1, tDict.get(str1) - 1)
              if (tDict.get(str1) < dict.get(str1)) {
                count -= 1
              }
              left += wl
            }
          }
          // come to a result
          if (count === cnt) {
            ans.push(left)
            // advance one word
            tDict.set(s.substr(left, wl), tDict.get(s.substr(left, wl)) - 1)
            count -= 1
            left += wl
          }
          // not a valid word, reset all lets
        } else {
          // 发现不匹配，左界限右移
          tDict = new Map()
          count = 0
          left = j + wl
        }
      }
    }

    return ans
  }
}
