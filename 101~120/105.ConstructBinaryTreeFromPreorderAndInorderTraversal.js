/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) return null
  return (function buildTree(pLeft, pRight, iLeft, iRight) {
    let cur = preorder[pLeft]
    let node = new TreeNode(cur)
    let pos = inorder.indexOf(cur, iLeft)
    node.left = pos - iLeft > 0 ? buildTree(pLeft + 1, pLeft + pos - iLeft, iLeft, pos - 1) : null
    node.right = iRight - pos > 0 ? buildTree(pRight - iRight + pos + 1, pRight, pos + 1, iRight) : null
    return node
  })(0, preorder.length - 1, 0, preorder.length - 1)
};
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))