/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return null
  let cur = head
  let len = 1
  while (cur.next) {
    cur = cur.next
    len++
  }
  cur.next = head
  k %= len
  for (let i = 0; i < len - k; i++) {
    cur = cur.next
  }
  head = cur.next
  cur.next = null
  return head
}
