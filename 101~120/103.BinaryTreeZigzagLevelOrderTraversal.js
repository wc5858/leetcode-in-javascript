
var zigzagLevelOrder = function (root) {
  if (root === null) return []
  let queue = [root]
  let ans = []
  let level = 0
  while (queue.length > 0) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let cur = queue.shift()
      if (cur.left !== null) {
        queue.push(cur.left)
      }
      if (cur.right !== null) {
        queue.push(cur.right)
      }
      if (ans[level] !== undefined) {
        if (level % 2 === 1) {
          ans[level].push(cur.val)
        } else {
          ans[level].unshift(cur.val)
        }
      } else {
        ans[level] = [cur.val]
      }
    }
    level++
  }
  return ans
};