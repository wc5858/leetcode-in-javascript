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
var reverseKGroup = function(head, k) {
  if (head === null || head.next === null || k == 1) return head
  let h = new ListNode(0)
  let tail = h
  let cur = null
  let next = head
  let temp
  let flag = false
  while (next) {
    let ptail = next
    let i
    for (i = k; i > 0 && next; i--) {
      temp = next.next
      next.next = cur
      cur = next
      next = temp
    }
    if (i == 0) {
      tail.next = cur
      tail = ptail
      cur = next
    } else {
      flag = true
      let c = null
      let n = cur
      let t
      for (let j = k - i; j > 0; j--) {
        t = n.next
        n.next = c
        c = n
        n = t
      }
      tail.next = c
    }
  }
  if (!flag) {
    tail.next = null
  }
  return h.next
}
