let id = 0
function ListNode(val) {
  this.val = val
  this.id = id++
  this.next = null
}
module.exports = function(data) {
  let head = new ListNode(0)
  let cur = head
  for (let i of data) {
    cur.next = new ListNode(i)
    cur = cur.next
  }
  return head.next
}
