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
var deleteDuplicates = function(head) {
  if(!head) return head
  let pre = head
  let cur = head.next
  while(cur) {
    if(cur.val === pre.val) {
      pre.next = cur.next
      cur = pre.next
    } else {
      pre = cur
      cur = cur.next
    }
  }
  return head
};
let getListNode = require('../util/ListNode')
console.log(deleteDuplicates(getListNode([1])))
console.log(deleteDuplicates(getListNode([1,1,2,2])))