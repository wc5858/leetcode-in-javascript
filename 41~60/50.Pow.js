/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
let myPow = function(x, n) {
  let flag = n < 0
  let res = 1
  n = Math.abs(n)
  while (n) {
    if (n % 2) {
      res *= x
    }
    x *= x
    n = Math.floor(n / 2)
  }
  return flag ? 1 / res : res
}
console.log(myPow(2, -5))
console.log(Math.pow(2, -5))
