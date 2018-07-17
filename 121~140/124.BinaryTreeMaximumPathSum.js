/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let ans = (function helper(root) {
    if (root.left === null && root.right === null) {
      return [root.val, root.val]
    }
    if (root.left === null || root.right === null) {
      let data = helper(root.left || root.right)
      let ans1 = Math.max(root.val + data[0],root.val)
      return [ans1, Math.max(ans1, data[1])]
    }
    let data1 = helper(root.left)
    let data2 = helper(root.right)
    let ans1 = Math.max(root.val + data1[0], root.val + data2[0],root.val)
    return [ans1,Math.max(ans1, data1[1], data2[1],root.val + data1[0] + data2[0])]
  })(root);
  // helper的返回数组中，第一个值代表链接到root的最大值，第二个值代表不链接到root的最大值
  return Math.max(ans[0],ans[1])
};