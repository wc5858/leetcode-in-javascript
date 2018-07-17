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
let isSymmetric = function (root) {
  return root === null || (function isSymmetric(left, right) {
    return (left === null && right === null) ||
      (left!== null && right!== null && left.val === right.val &&
        isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left))
  })(root.left, root.right)
};