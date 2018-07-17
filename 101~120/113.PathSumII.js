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
 * @return {number[][]}
 */
let pathSum = function (root, sum) {
  let ans = []
  let path = [];
  (function helper(root, sum) {
    if (root === null) return
    if (root.left === null && root.right === null) {
      if (root.val === sum) {
        ans.push([...path, sum])
      }
      return
    }
    path.push(root.val)
    if (root.right !== null) {
      helper(root.right, sum - root.val)
    }
    if (root.left !== null) {
      helper(root.left, sum - root.val)
    }
    path.pop()
  })(root, sum)
  return ans
};