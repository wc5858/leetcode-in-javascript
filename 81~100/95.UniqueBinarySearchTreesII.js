/**
 * @param {number} n
 * @return {number}
 */
// var numTrees = function (n) {
//   let cache = []
//   function numTrees(n) {
//     if (n < 3) {
//       return n === 0 ? 1 : n
//     } else {
//       if (cache[n]) return cache[n]
//       let res = 0
//       for (let i = 1; i <= n; i++) {
//         res += numTrees(i - 1) * numTrees(n - i)
//       }
//       cache[n] = res
//       return res
//     }
//   }
//   return numTrees(n)
// };

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var generateTrees = function (n) {
  if (n === 0) return []
  function tree(n, start) {
    if (n < 2) {
      return [n === 1 ? new TreeNode(start) : null]
    } else {
      let ans = []
      for (let i = 1; i <= n; i++) {
        let left = tree(i - 1, start)
        let right = tree(n - i, i + start)
        for (let m = 0; m < left.length; m++) {
          for (let n = 0; n < right.length; n++) {
            let treeNode = new TreeNode(i + start - 1)
            // 通过json序列化和反序列化的方式clone
            // 后来发现其实是不必要的，而且会导致类型信息丢失，同时使得leetcode无法正确解析结果
            treeNode.left = left[m]
            treeNode.right = right[n]
            ans.push(treeNode)
          }
        }
      }
      return ans
    }
  }
  return tree(n, 1)
};
// leetcode自己会做解析，不必要了
// var traversing = function(tree) {
//   let ans = []
//   let queue = [tree]
//   while(queue.length > 0) {
//     let next = queue.shift()
//     if(next && next.hasOwnProperty('val')) {
//       // 这里不能通过typeof判断next的类型，因为经过JSON序列化丢失了类型信息
//       ans.push(next.val)
//       queue.push(next.left)
//       queue.push(next.right)
//     } else {
//       ans.push(next)
//     }
//   }
//   while(ans[ans.length-1]===null) {
//     // 去掉末尾的null
//     ans.pop()
//   }
//   return ans
// }
console.log(generateTrees(0))
console.log(generateTrees(1))
console.log(generateTrees(2))
console.log(generateTrees(3))
console.log(generateTrees(4))