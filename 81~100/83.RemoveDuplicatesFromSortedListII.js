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
 * @return {ListNode}
 */
let deleteDuplicates = function(head) {
  if (!head) return head
  let p = new ListNode()
  p.next = head
  let pre = p
  let cur = p.next
  while (cur) {
    if (cur.next&&cur.val === cur.next.val) {
      cur = cur.next
      while (cur&&pre.next.val == cur.val) {
        cur = cur.next
      }
      pre.next = cur
    } else {
      console.log(cur)
      pre = cur
      cur = cur.next
    }
  }
  return p.next
}
let getListNode = require('../util/ListNode')
// console.log(deleteDuplicates(getListNode([1])))
show(deleteDuplicates(getListNode([2,2,3,3,4,4,5])))
show(deleteDuplicates(getListNode([1,2,3,3,4,4,5])))
function show(node) {
  // 可视化输出
  let res = []
  while(node) {
    res.push(node.val)
    node = node.next
  }
  console.log(res)
}