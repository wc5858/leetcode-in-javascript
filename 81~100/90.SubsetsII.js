/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let subsetsWithDup = function (nums) {
  let set = new Set()
  let n = nums.length
  nums.sort((a, b) => a - b)
  function cb(pre, cur) {
    if (pre) {
      set.add(pre)
    }
    for (let i = cur; i < n; i++) {
      cb(pre + (pre ? '_' : '') + nums[i], i + 1)
    }
  }
  cb('', 0)
  let ans = [[]]
  for (let i of set.values()) {
    ans.push(i.split('_').map(i => +i))
  }
  return ans
};
console.log(subsetsWithDup([4, 4, 4, 1, 4]))
