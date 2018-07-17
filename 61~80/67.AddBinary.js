/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function(a, b) {
  let m = a.length,
    n = b.length
  if (m > n) return addBinary(b, a)
  let carry = 0
  let i = 1
  let res = ''
  while (i <= a.length) {
    let sum = carry + +a[a.length - i] + +b[b.length - i]
    carry = Math.floor(sum / 2)
    res = (sum % 2) + res
    i++
  }
  while (b.length - i >= 0 && carry != 0) {
    res = (carry ^ b[b.length - i]) + res
    carry = carry & b[b.length - i]
    i++
  }
  return (carry ? carry : b.substr(0, b.length - i + 1)) + res
}
// console.log(addBinary('1010', '1'))
// console.log(addBinary('1010', '1011'))
// console.log(addBinary('11', '1'))
console.log(addBinary('101111', '10'))
