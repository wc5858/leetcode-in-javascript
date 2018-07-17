/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
{
  // 标志层级
  let levelOrder = function (root) {
    if (root === null) return []
    let queue = [{
      node: root,
      level: 0
    }]
    let ans = []
    while (queue.length > 0) {
      let cur = queue.shift()
      if (cur.node.left) {
        queue.push({
          node: cur.node.left,
          level: cur.level + 1
        })
      }
      if (cur.node.right) {
        queue.push({
          node: cur.node.right,
          level: cur.level + 1
        })
      }
      if (ans[cur.level]) {
        ans[cur.level].push(cur.node.val)
      } else {
        ans[cur.level] = [cur.node.val]
      }
    }
    return ans
  };
}
{
  // 计数法
  // 性能没啥区别
  let levelOrder = function (root) {
    if (root === null) return []
    let queue = [root]
    let ans = []
    let level = 0
    while (queue.length > 0) {
      let len = queue.length
      for (let i = 0; i < len; i++) {
        let cur = queue.shift()
        if (cur.left!==null) {
          queue.push(cur.left)
        }
        if (cur.right!==null) {
          queue.push(cur.right)
        }
        if (ans[level]!==undefined) {
          ans[level].push(cur.val)
        } else {
          ans[level] = [cur.val]
        }
      }
      level++
    }
    return ans
  };
}