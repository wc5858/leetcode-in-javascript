/**
 * @param {number} n
 * @return {number}
 */
{
  // 通过计算组合数的方式完成的算法
  // solution中似乎没有提到这种算法
  // 由于组合数计算的问题，时间复杂度过高
  //（理论上为O(n^2)，实际上稍微小一点，Math.min(num, i)优化是起了作用的）
  let count = 0
  // count用于测试时间复杂度
  let climbStairs = function(n) {
    let num,
      ans = 0,
      combination = (total, num) => {
        let r = 1
        for (let i = total - num + 1; i <= total; i++) {
          r *= i
          count++
          // count用于测试时间复杂度
        }
        for (let j = 1; j <= num; j++) {
          r /= j
          count++
          // count用于测试时间复杂度
        }
        return r
      }
    for (let i = 0; (num = n - 2 * i) >= 0; i++) {
      ans += combination(num + i, Math.min(num, i))
      count++
      // count用于测试时间复杂度
    }
    return ans
  }
  console.log(climbStairs(5))
  let c = 0
  for (let i = 1; i < 45; i++) {
    climbStairs(i)
    c += i*i
  }
  console.log(count,c)
  // 5421 29370 实际时间复杂度近似于O(nlog(n))
}
{
  let count = 0
  // 其他人的答案
  // 动态规划
  let climbStairs = function(n) {
    let a = 1
    let b = 1

    for (let i = 0; i < n; i++) {
      let temp = a
      a += b
      b = temp
      count++
      // count用于测试时间复杂度
    }
    return b
  }
  for (let i = 0; i < 45; i++) {
    climbStairs(i)
  }
  console.log(count)
}
// 但是由于js本身的问题，两个算法之间，实际运行时间的差异不是很大
// 用斐波那契数列也可以做
// solution还提到了Binets Method和斐波那契公式，能达到O(log(n))的时间复杂度
