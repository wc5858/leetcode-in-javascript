/**
 * @param {number} n
 * @return {number}
 */
let countPrimes = function(n) {
  let ans = 0
  for (let i = 2; i < n; i++) {
    if (i === 2) {
      ans++
      continue
    }
    let tag = true
    for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        tag = false
        break
      }
    }
    if (tag) ans++
  }
  return ans
}

{
  let countPrimes = function(n) {
    if (n < 3) return 0
    let f = []
    let count = Math.floor(n / 2)
    for (let i = 3; i * i <= n; i += 2) {
        if (f[i]) continue
        for (let j = i * i; j < n; j += 2 * i) {
            if (!f[j]) {
                --count;
                f[j] = true
            }
        }
    }
    return count
  };
}