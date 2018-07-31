/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let ans = 0
  while (n > 0) {
    if (n % 2 > 0) ans++
    n = Math.floor(n / 2)
  }
  return ans
}
console.log(hammingWeight(11))
console.log(hammingWeight(128))
{
  // 更简洁的版本
  let hammingWeight = function(n) {
    let ans = 0
    while (n > 0) {
      if (n & 1) {
        // 因为&是按位与，所以与n % 2 > 0的判断是等价的
        ans += 1
      }
      // 无符号右移
      n = n >>> 1
    }
    return ans
  }
}
