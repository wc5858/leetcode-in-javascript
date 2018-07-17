/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let combine = function(n, k) {
  if(!k) return []
  let ans = []
  function cb(pre,cur,rest) {
    if(!rest) {
      ans.push(pre.split('-').map(i=>+i))
      return
    }
    for(let i = cur;i<=n-rest+1;i++) {
      // 这个循环中 如果把n-rest+1改成n，一样能得到结果，但是性能下降很多
      cb(pre + (pre?'-':'')+i,i+1,rest-1)
    }
  }
  cb('',1,k)
  return ans
};
console.log(combine(4,3))