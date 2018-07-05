/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (head === null || head.next === null) return head
  let p = new ListNode()
  p.next = head
  let pre = null
  let cur = head
  let temp, tail = p
  let count = 0
  let innerHead
  while (true) {
    count++
    if (count >= m) {
      if (count > n) {
        tail.next = pre
        innerHead.next = cur
        return p.next
      }
      if (!innerHead) {
        innerHead = cur
      }
      temp = cur.next
      cur.next = pre
      pre = cur
      cur = temp
    } else {
      tail = cur
      cur = cur.next
    }
  }
};
let getListNode = require('../util/ListNode')
show(reverseBetween(getListNode([1, 2, 3, 4, 5]), 2, 2))
show(reverseBetween(getListNode([1, 2, 3, 4, 5]), 2, 3))
show(reverseBetween(getListNode([1, 2, 3, 4, 5]), 2, 4))
show(reverseBetween(getListNode([1, 2, 3, 4, 5]), 2, 5))
function show(node) {
  // 可视化输出
  let res = []
  while (node) {
    res.push(node.val)
    node = node.next
  }
  console.log(res)
}