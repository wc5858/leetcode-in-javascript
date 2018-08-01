/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let p = new ListNode()
  p.next = head
  let cur = p
  while(p.next.val!=val) {
    cur = cur.next
  }
  cur.next = cur.next.next
};