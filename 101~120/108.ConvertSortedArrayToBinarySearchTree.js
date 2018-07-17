/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let sortedArrayToBST = function (nums) {
  return (function toTree(left, right) {
    if (left > right) return null
    let mid = Math.floor((left + right) / 2)
    let node = new TreeNode(nums[mid])
    node.left = toTree(left, mid - 1)
    node.right = toTree(mid + 1, right)
    return node
  })(0, nums.length - 1)
};
console.log(sortedArrayToBST([-10,-3,0,5,9]))