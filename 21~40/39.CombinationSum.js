{
  // 递归解法，通过字符串记录路径 beat 91%
  var combinationSum = function(candidates, target) {
    let result = []
    var search = function(start, target, route) {
      for (let i = start; i < candidates.length; i++) {
        if (candidates[i] === target) {
          result.push((route + candidates[i]).split('-').map(i => +i))
        } else if (candidates[i] < target) {
          search(i, target - candidates[i], route + candidates[i] + '-')
        }
      }
    }
    search(0, target, '')
    return result
  }
}
{
  // 递归解法，通过数组记录路径
  // 因为数组是引用类型，所以每次都要克隆数组，故比上一种性能差一些，但是比较直观
  var combinationSum = function(candidates, target) {
    let result = []
    var search = function(start, target, route) {
      for (let i = start; i < candidates.length; i++) {
        if (candidates[i] === target) {
          result.push([...route, candidates[i]])
        } else if (candidates[i] < target) {
          search(i, target - candidates[i], [...route, candidates[i]])
        }
      }
    }
    search(0, target, [])
    return result
  }
}
// 貌似有更好的解法，如BFS；待进一步学习
