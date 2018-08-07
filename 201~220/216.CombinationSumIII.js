/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  if (n >= k * 9) return []
  let ans = []
  function helper(k, n, data, limit) {
    if (n >= k * 9) return
    if (k === 1) {
      ans.push([...data, n])
    } else {
      let max = Math.min(Math.ceil(n / k), 10)
      for (let i = limit; i < max; i++) {
        data.push(i)
        helper(k - 1, n - i, data, i + 1)
        data.pop(i)
      }
    }
  }
  helper(k, n, [], 1)
  return ans
};
console.log(combinationSum3(2, 18))