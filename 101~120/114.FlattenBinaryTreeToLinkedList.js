/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
let flatten = function(root) {
  if(root === null) return
  function helper(root) {
    let leftIsNull = root.left === null
    let rightIsNull = root.right === null
    if(leftIsNull && rightIsNull) {
      return root
    }
    if(leftIsNull && !rightIsNull) {
      return helper(root.right)
    }
    if(!leftIsNull && rightIsNull) {
      root.right = root.left
      root.left = null
      return helper(root.right)
    }
    let temp = helper(root.right)
    helper(root.left).right = root.right
    root.right = root.left
    root.left = null
    return temp
  }
  helper(root)
};