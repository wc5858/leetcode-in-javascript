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
 * @param {number} x
 * @return {ListNode}
 */

let partition = function(head, x) {
  if (!head) return null
  let p = new ListNode()
  p.next = head
  let cur = p
  let left = p
  while (cur.next) {
    if (cur.next.val < x) {
      if (left === cur) {
        left = left.next
        cur = cur.next
      } else {
        let temp = left.next
        left.next = cur.next
        cur.next = cur.next.next
        left.next.next = temp
        left = left.next
      }
    } else {
      cur = cur.next
    }
  }
  return p.next
}

let getListNode = require('../util/ListNode')
show(partition(getListNode([1, 4, 3, 2, 5, 2]), 3))
show(partition(getListNode([]), 3))
show(partition(getListNode([2]), 3))
show(partition(getListNode([2,4]), 3))
show(partition(getListNode([4,2]), 3))
function show(node) {
  // 可视化输出
  let res = []
  while (node) {
    res.push(node.val)
    node = node.next
  }
  console.log(res)
}
