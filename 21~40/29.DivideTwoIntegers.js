/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// 注意要用无符号右移>>>
// 由于题设对输入数值的范围限制，判断输出是否溢出只须考虑divisor为正负1的情况
var divide = function(dividend, divisor) {
  let range = Math.pow(2, 31)
  let ans = 0
  if (divisor === 1) {
    ans = dividend
  }
  if (divisor === -1) {
    ans = -dividend
  }
  if (ans < -range || ans > range - 1) {
    return range - 1
  }
  if (ans !== 0) {
    return ans
  }
  let isNegative = (dividend < 0) ^ (divisor < 0)
  let x = Math.abs(dividend)
  let y = Math.abs(divisor)
  let i = x.toString(2).length
  while (i >= 0) {
    if (x >>> i >= y) {
      ans += 1 << i
      x -= y << i
    }
    i--
  }
  return isNegative ? -ans : ans
}
