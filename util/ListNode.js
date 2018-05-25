function ListNode(val) {
  this.val = val
  this.next = null
}
let data = [1,2,3,4,5]
let head = new ListNode(0)
let cur = head
for(let i of data) {
  cur.next = new ListNode(i)
  cur = cur.next
}