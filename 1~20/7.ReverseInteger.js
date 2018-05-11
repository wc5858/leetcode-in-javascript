/**
 * @param {number} x
 * @return {number}
 */
// Okay, I'm lazy
var reverse = function (x) {
  let arr = [...x.toString()]
  let res
  if (x >= 0) {
    res = +arr.reverse().join('')
  } else {
    arr.shift()
    res = -arr.reverse().join('')
  }
  if (res > 2147483647 || res < -2147483648) res = 0
  return res
};