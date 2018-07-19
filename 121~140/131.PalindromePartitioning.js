/**
 * @param {string} s
 * @return {string[][]}
 */
{
  // 感觉还可以再优化下
  let partition = function (s) {
    function isPalindrome(s) {
      let left = 0, right = s.length - 1
      while (left <= right) {
        if (s[left] != s[right]) break
        left++
        right--
      }
      return left > right
    }
    function helper(s) {
      if (s.length === 0) return []
      let ans = []
      for (let i = 0; i < s.length; i++) {
        let left = s.substr(0, i + 1)
        if (isPalindrome(left)) {
          let data = helper(s.substr(i + 1))
          if (data !== false) {
            if (data.length > 0) {
              data.forEach(element => {
                element.unshift(left)
              })
              ans = ans.concat(data)
            } else {
              ans.push([left])
            }
          }
        }
      }
      return ans.length > 0 ? ans : false
    }
    return helper(s) || []
  };
  console.log(partition('aab'))
  // console.log(partition('aasadacasadb'))
}

{
  // 通过index来确定是否回文避免substring
  // 从右向左遍历，从而使用push替代unshift
  // 不过数组操作还是略复杂
  let partition = function (s) {
    function isPalindrome(i, j) {
      while (i <= j) {
        if (s[i] != s[j]) break
        i++
        j--
      }
      return i > j
    }
    function helper(idx, s) {
      let len = s.length
      if (len === 0) return []
      let ans = []
      for (let i = 0; i < len; i++) {
        if (isPalindrome(idx - i, idx)) {
          let data = helper(idx - i - 1, s.substring(0, idx - i))
          if (data !== false) {
            let right = s.substr(idx - i)
            if (data.length > 0) {
              data.forEach(element => {
                element.push(right)
              })
              ans = ans.concat(data)
            } else {
              ans.push([right])
            }
          }
        }
      }
      return ans.length > 0 ? ans : false
    }
    return helper(s.length - 1, s) || []
  };
  console.log(partition('aab'))
  // console.log(partition('aasadacasadb'))
}
{
  /**
 * @param {string} s
 * @return {string[][]}
 */
  // 这是其他人的做法，利用回溯算法避免了冗余的数组操作
  let partition = function (s) {
    if (s == null) {
      return []
    }
    let ret = []
    helper(s, 0, [], ret)
    return ret
  };

  let helper = (str, index, result, results) => {
    if (index === str.length) {
      results.push(result.slice())
    }
    for (let i = index; i < str.length; i++) {
      if (isPalindrome(str, index, i)) {
        result.push(str.substring(index, i + 1))
        helper(str, i + 1, result, results)
        result.pop()
      }
    }
  };

  let isPalindrome = (str, left, right) => {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }
    return true
  };
}