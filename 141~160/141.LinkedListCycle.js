/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head === null) return false
  let set = new Set()
  while (head) {
    if (set.has(head)) return true
    set.add(head)
    head = head.next
  }
  return false
}
// 更好的解法是用两个指针去遍历，两个指针的遍历速度不一致
// 还有一种黑科技是改原有的node的val，不推荐