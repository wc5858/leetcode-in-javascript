/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(head === null || head.next === null) return head
  let cur = null
  let next = head
  let temp
  while(next) {
    temp = next.next
    next.next = cur
    cur = next
    next = temp
  }
  return cur
};