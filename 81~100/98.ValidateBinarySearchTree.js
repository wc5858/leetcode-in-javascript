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
var isValidBST = function (root) {
  return root === null || ((root.left === null ||
    (isValidBST(root.left) && getMax(root.left) < root.val)) &&
    (root.right === null || (isValidBST(root.right) && getMin(root.right) > root.val)))
};

var getMax = function (root) {
  while (root.right) {
    root = root.right
  }
  return root.val
}

var getMin = function (root) {
  while (root.left) {
    root = root.left
  }
  return root.val
}