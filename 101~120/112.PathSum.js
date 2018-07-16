/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) return false
  if (root.left === null && root.right === null) return root === sum
  if (root.left === null) return hasPathSum(root.right, sum - root.val)
  if (root.right === null) return hasPathSum(root.left, sum - root.val)
  return hasPathSum(root.right, sum - root.val) || hasPathSum(root.left, sum - root.val)
};