/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let str = n.toString(2)
  let ans = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      ans += Math.pow(2, i + 32 - str.length)
    }
  }
  return ans
}

{
  // 又一次被降维打击了。。
  let reverseBits = function(n) {
    let ans = 0
    for (let i = 0; i < 32; i++) {
      ans = ans * 2 + (n % 2)
      n = parseInt(n / 2)
    }
    return ans
  }
}
