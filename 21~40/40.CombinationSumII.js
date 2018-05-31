// 递归解法，通过字符串记录路径 beat 91%
var combinationSum2 = function(candidates, target) {
  let set = new Set()
  candidates.sort((a,b)=>a-b)
  var search = function(start, target, route) {
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] === target) {
        set.add(route + candidates[i])
      } else if (candidates[i] < target) {
        search(i+1, target - candidates[i], route + candidates[i] + '-')
      }
    }
  }
  search(0, target, '')
  result = []
  for (let i of set) {
    result.push(i.split('-').map(i => +i))
  }
  return result
};
console.log(combinationSum2([10,1,2,7,6,1,5],8))