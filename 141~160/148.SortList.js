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
var mergeTwoLists = function(l1, l2) {
  // 合并直接用21题写过的方法，似乎别别人的稍微差了点
  if (l1 == null) return l2
  if (l2 == null) return l1
  let cur1 = l1
  let cur2 = l2
  let head = new ListNode(-1)
  head.next = l1
  let last = head
  while (cur1 && cur2) {
    if (cur2.val < cur1.val) {
      let start = cur2
      while (cur2.next && cur2.next.val < cur1.val) {
        cur2 = cur2.next
      }
      last.next = start
      let temp = cur2.next
      cur2.next = cur1
      cur2 = temp
      last = cur1
      cur1 = cur1.next
    } else {
      last = cur1
      cur1 = cur1.next
    }
  }
  if (cur2) {
    last.next = cur2
  }
  return head.next
}
var sortList = function(head) {
  if (head === null || head.next === null) return head
  // 这个找中间节点的办法很有用
  let slow = head
  let fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let temp = slow.next
  slow.next = null
  return mergeTwoLists(sortList(head), sortList(temp))
}
