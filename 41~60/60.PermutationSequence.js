/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let res = ''
  let block = 1
  let arr = []
  for (let i = n; i >= 1; i--) {
    block *= i
    arr.unshift(i)
  }
  for (let j = n; j > 0; j--) {
    block /= j
    let d = Math.ceil(k / block)
    res += arr.splice((d - 1) % arr.length, 1)
    k = k % block || block
  }
  return res
}
console.log(getPermutation(2, 2))
console.log(getPermutation(3, 3), '213')
console.log(getPermutation(4, 9), '2134')
console.log(getPermutation(3, 6), '321')
console.log(getPermutation(3, 2), '132')
console.log(getPermutation(3, 1), '123')
