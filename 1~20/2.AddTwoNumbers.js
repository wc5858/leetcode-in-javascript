/**
 * Question:
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
  let res
  let cur
  let append = 0
  do {
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + append
    if (res) {
      cur.next = new ListNode(val % 10)
      cur = cur.next
    } else {
      res = new ListNode(val % 10)
      cur = res
    }
    append = Math.floor(val / 10)
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  } while (l1 != null || l2 != null)
  if (append != 0) {
    cur.next = new ListNode(append)
  }
  return res
}
