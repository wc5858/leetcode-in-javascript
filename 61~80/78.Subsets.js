/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsets = function(nums) {
  let ans = [[]]
  let n = nums.length
  function cb(pre, cur) {
    if(pre) {
      ans.push(pre.split('_').map(i => +i))
    }
    for (let i = cur; i < n; i++) {
      cb(pre + (pre ? '_' : '') + nums[i], i + 1)
    }
  }
  cb('', 0)
  return ans
}
console.log(subsets([-1,1,2]))
