// var rangeBitwiseAnd = function(m, n) {
//   if(m===0) return 0
//   let ans = n
//   for(let i = n -1;i>=m;i--){
//     ans &= i
//     if(ans === 0) return 0
//   }
//   return ans
// };
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  // 这是我发现的一个可以直接给出答案的条件
  if (m === 0 || m < n / 2) return 0
  let i = 0
  while (m != n) {
    m>>>=1
    n>>>=1
    i++
  }
  return m << i
};
console.log(rangeBitwiseAnd(2, 7))
console.log(rangeBitwiseAnd(3, 7))
console.log(rangeBitwiseAnd(6, 7))
