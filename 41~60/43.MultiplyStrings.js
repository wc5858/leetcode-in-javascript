/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
{
  // 我的答案，分开处理位乘和加和，时间复杂度为O(n^2)，但运算比较冗余，性能较差
  var multiplyDigit = function(num, digit) {
    let carry = 0
    let res = ''
    digit = +digit
    for (let i = num.length - 1; i >= 0; i--) {
      let m = +num[i] * digit + carry
      res = (m % 10) + res
      carry = Math.floor(m / 10)
    }
    return (carry || '') + res
  }
  var add = function(num1, num2) {
    // num1.length >= num2.length
    let carry = 0
    let res = ''
    let m
    for (let i = 1; i <= num1.length; i++) {
      if (num2.length - i < 0) {
        if (carry) {
          m = carry + +num1[num1.length - i]
          res = (m % 10) + res
          carry = Math.floor(m / 10)
        } else {
          res = num1[num1.length - i] + res
        }
      } else {
        m = +num2[num2.length - i] + +num1[num1.length - i] + carry
        res = (m % 10) + res
        carry = Math.floor(m / 10)
      }
    }
    return (carry || '') + res
  }
  var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0'
    let res = ''
    for (let i = 0; i < num2.length; i++) {
      let ans = multiplyDigit(num1, num2[i]) + '0'.repeat(num2.length - i - 1)
      res = res ? add(res, ans) : ans
    }
    return res
  }
}
{
  // 改写高性能的答案，这边通过数组记录的方式同时进行乘法和加法运算，性能更好
  var multiply = function(num1, num2) {
    // need to check if one of number is 0;
    if (num1 === '0' || num2 === '0') return '0'

    let carry = 0
    const result = []
    let n1, n2, insertPos, multi, value, sum
    for (let i = num1.length - 1; i >= 0; i--) {
      n1 = +num1[i]
      insertPos = num1.length - 1 - i

      for (let j = num2.length - 1; j >= 0; j--) {
        n2 = +num2[j]

        multi = n1 * n2
        value = result[insertPos] === undefined ? 0 : result[insertPos]
        sum = multi + carry + value

        result[insertPos] = sum % 10
        carry = Math.floor(sum / 10)
        insertPos++
      }

      if (carry !== 0) {
        result[insertPos] = carry
      }

      carry = 0
    }

    return result.reverse().join('')
  }
}
