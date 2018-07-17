/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
{
  // a version can show the pattern
  // I misunderstood and thought it is needed to output like this
  // space replaced with '*' for better reading
  let convert = function(s, numRows) {
    let groupLen = numRows * 2 - 2
    if (groupLen == 0) return s
    let extraLen =
      s.length % groupLen > numRows ? (s.length % groupLen) - numRows + 1 : 1
    let width = Math.floor(s.length / groupLen) * (numRows - 1) + extraLen
    let result = ''
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < width; j++) {
        let group = Math.floor(j / (numRows - 1))
        let groupOffset = j % (numRows - 1)
        if (groupOffset === 0) {
          let target = group * groupLen + i
          result += target < s.length ? s[target] : '*'
        } else if (i + groupOffset === numRows - 1) {
          let target = group * groupLen + numRows + groupOffset - 1
          result += target < s.length ? s[target] : '*'
        } else {
          result += '*'
        }
      }
      result += '\n'
    }
    return result
  }

  console.log(convert('PAYPALISHIRING', 6))
}
{
  // then I improved it
  // this solution "beats 100.00 % of javascript submissions" (happy~)
  let convertB = function(s, numRows) {
    if (numRows == 1) return s
    let groupLen = numRows * 2 - 2
    let result = ''
    for (let i = 0; i < numRows; i++) {
      let j = i
      while (j < s.length) {
        result += s[j]
        if (i == 0 || i == numRows - 1) {
          j += groupLen
        } else {
          if (j % groupLen < numRows) {
            j += 2 * (numRows - i - 1)
          } else {
            j += 2 * i
          }
        }
      }
    }
    return result
  }

  console.log(convertB('PAYPALISHIRING', 6))
}
