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
var preorderTraversal = function(root) {
  let ans = []
  ;(function helper(root) {
    if (root) {
      ans.push(root.val)
      helper(root.left)
      helper(root.right)
    }
  })(root)
  return ans
}
