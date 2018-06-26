/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
{
  // my answer
  var uniquePaths = function(m, n) {
    let cache = new Map()
    let subFunc = (m, n) => {
      if (m === 1 || n === 1) return 1
      let ans = 0
      let right = m - 1 + '-' + n
      if (cache.has(right)) {
        ans += cache.get(right)
      } else {
        let data = subFunc(m - 1, n)
        ans += data
        cache.set(right, data)
      }
      let down = m + '-' + (n - 1)
      if (cache.has(down)) {
        ans += cache.get(down)
      } else {
        let data = subFunc(m, n - 1)
        ans += data
        cache.set(down, data)
      }
      return ans
    }
    return subFunc(m, n)
  }
  console.log(uniquePaths(7, 3))
}
{
  // better answer
  const uniquePaths = (m, n) => {
    if (!m || !n) return 0
    const path = new Array(n).fill(1)
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        path[j] = path[j] + path[j - 1]
      }
    }
    return path[n - 1]
  }
  console.log(uniquePaths(7, 3))
}
