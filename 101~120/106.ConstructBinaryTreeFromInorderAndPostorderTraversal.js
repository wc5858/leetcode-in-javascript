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
let buildTree = function (inorder, postorder) {
  if (inorder.length === 0) return null
  return (function buildTree(pLeft, pRight, iLeft, iRight) {
    let cur = postorder[pRight]
    let node = new TreeNode(cur)
    let pos = inorder.indexOf(cur, iLeft)
    node.left = pos - iLeft > 0 ? buildTree(pLeft, pLeft + pos - iLeft - 1, iLeft, pos - 1) : null
    node.right = iRight - pos > 0 ? buildTree(pRight - iRight + pos, pRight - 1, pos + 1, iRight) : null
    return node
  })(0, postorder.length - 1, 0, postorder.length - 1)
};
console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))