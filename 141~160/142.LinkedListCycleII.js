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
var detectCycle = function(head) {
  if (head === null) return null
  let set = new Set()
  while (head) {
    if (set.has(head)) return head
    set.add(head)
    head = head.next
  }
  return null
}
{
  // 常数空间的解法
  // 讲解：https://leetcode.com/problems/linked-list-cycle-ii/discuss/151434/2-c++-solutions.-Beat-100.-With-comments-proof-and-description.
  let detectCycle = function(head) {
    let fast = head
    let slow = head

    while (fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next

      if (slow === fast) {
        let check = head

        while (check !== slow) {
          check = check.next
          slow = slow.next
        }

        return check
      }
    }

    return null
  }
}
