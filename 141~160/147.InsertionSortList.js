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
var insertionSortList = function(head) {
  if (head === null || head.next === null) return head
  let h = new ListNode()
  h.next = head
  let cur = head
  while (cur && cur.next) {
    if (cur.next.val > cur.val) {
      cur = cur.next
    } else {
      let s = h
      while (cur.next.val > s.next.val) {
        s = s.next
      }
      let temp = s.next
      s.next = cur.next
      cur.next = cur.next.next
      s.next.next = temp
    }
  }
  return h.next
}
