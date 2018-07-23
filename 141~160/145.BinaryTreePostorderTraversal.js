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
var postorderTraversal = function(root) {
  let ans = []
  ;(function helper(root) {
    if (root) {
      helper(root.left)
      helper(root.right)
      ans.push(root.val)
    }
  })(root)
  return ans
}
