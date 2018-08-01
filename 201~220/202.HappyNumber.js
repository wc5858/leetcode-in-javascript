/**
 * @param {number} n
 * @return {boolean}
 */
{
  // 用集合的方式处理
  let isHappy = function(n) {
    let history = new Set()
    while (!history.has(n)) {
      console.log(n)
      history.add(n)
      let next = 0
      while (n > 0) {
        next += Math.pow(n % 10, 2)
        n = Math.floor(n / 10)
      }
      if (next === 1) return true
      n = next
    }
    return false
  }
  console.log(isHappy(164))
}
// for (let i = 0; i < 100; i++) {
//   console.log(isHappy(i) + '-' + i)
// }
{
  // 数学角度
  let isHappy = function(n) {
    var tmp
    while (n !== 1) {
      console.log(n)
      tmp = 0
      while (n > 0) {
        var digit = Math.pow(n % 10, 2)
        tmp += digit
        n = Math.floor(n / 10)
        // 比较好奇下面这个结论是证明得出的还是推理得到的规律
        if (digit === n && digit !== 1) {
          return false
        }
      }
      n = tmp
    }
    return true
  }
  console.log(isHappy(164))
}
