/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isBalanced = function (root) {
  return false !== (function helper(node) {
    // helper在非平衡的情况下返回false，否则返回树的高度
    if (node === null) return 0
    let left = helper(node.left)
    let right = helper(node.right)
    if (left === false && right === false || Math.abs(left - right) > 1) {
      return false
    }
    return Math.max(left, right) + 1
  })(root)
};