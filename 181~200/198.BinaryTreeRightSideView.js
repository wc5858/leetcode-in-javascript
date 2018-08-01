/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (root === null) return []
  let queue = [root]
  let ans = []
  while (queue.length > 0) {
    let len = queue.length
    ans.push(queue[0].val)
    for (let i = 0; i < len; i++) {
      let cur = queue.shift()
      if (cur.right !== null) {
        queue.push(cur.right)
      }
      if (cur.left !== null) {
        queue.push(cur.left)
      }
    }
  }
  return ans
}
