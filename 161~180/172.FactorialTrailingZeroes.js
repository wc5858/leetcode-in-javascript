/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 0
  let level = 5
  while (level < n) {
    count += Math.floor(n / level)
    level *= 5
  }
  return count
}
console.log(trailingZeroes(2412))