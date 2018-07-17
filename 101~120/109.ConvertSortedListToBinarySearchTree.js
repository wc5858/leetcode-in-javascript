/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
let sortedListToBST = function(head) {
  // 代价是O(n)的空间复杂度
  let arr = []
  while(head) {
    arr.push(head.val)
    head = head.next
  }
  return sortedArrayToBST(arr)
};
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