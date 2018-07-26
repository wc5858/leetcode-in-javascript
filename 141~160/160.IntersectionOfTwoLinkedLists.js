/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // 这里用了一个数学上的小技巧
  if (headA === null || headB === null) return null
  let cur1 = headA
  let cur2 = headB
  while (cur1 !== cur2) {
    cur1 = cur1 ? cur1.next : headB
    cur2 = cur2 ? cur2.next : headA
  }
  return cur1
}
