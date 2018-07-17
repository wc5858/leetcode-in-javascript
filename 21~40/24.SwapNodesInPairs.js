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
let swapPairs = function(head) {
  if(!head) return null
  if(!head.next) return head
  let h = new ListNode(0)
  h.next = head
  let last = h
  let cur = h.next
  while(cur&&cur.next) {
    last.next = cur.next
    cur.next = cur.next.next
    last.next.next = cur
    last = last.next.next
    if(last) {
      cur = last.next
    }
  }
  return h.next
};