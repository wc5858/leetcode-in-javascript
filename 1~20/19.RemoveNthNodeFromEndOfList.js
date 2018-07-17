/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
{
  // my solution
  let removeNthFromEnd = function(head, n) {
    if (head === null || head.next === null) return null
    let arr = []
    let cur = head
    while (cur.next) {
      arr.push(cur)
      cur = cur.next
    }
    arr.push(cur)
    if (arr.length - n - 1 < 0) {
      head = arr[0].next
    } else {
      arr[arr.length - n - 1].next = arr[arr.length - n].next
    }
    return head
  }
}
{
  // a smarter solution
  let removeNthFromEnd = function(head, n) {
    if (head.next === null || head === null) return null
    // add a dummy to make the logic more simple
    const dummy = new ListNode(0)
    dummy.next = head
    let fast = head
    while (n > 0) {
      fast = fast.next
      n--
    }
    let slow = dummy
    while (fast !== null) {
      slow = slow.next
      fast = fast.next
    }
    slow.next = slow.next.next
    return dummy.next
  }
}
