/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  if(root===null) return 0
  let ans = 0
  function helper(root, val) {
    let cur = val * 10 + root.val
    if (root.left === null && root.right === null) {
      ans += cur
      return
    }
    if (root.left) {
      helper(root.left, cur)
    }
    if (root.right) {
      helper(root.right, cur)
    }
  }
  helper(root,0)
  return ans
};