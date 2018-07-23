/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
let reorderList = function(head) {
  // 时间复杂度为O(n^2),空间复杂度O(1)，执行了800+ms（捂脸）
  if (head === null || head.next === null) return
  let cur = head
  while (cur && cur.next && cur.next.next) {
    let next = cur
    while (next.next.next) {
      next = next.next
    }
    let temp = cur.next
    cur.next = next.next
    next.next = null
    cur.next.next = temp
    cur = cur.next.next
  }
}
{
  // 空间换时间，用数组暂存整个链表的节点
  let reorderList = function(head) {
    let arr = []
    let cur = head

    while (cur) {
      arr.push(cur)
      cur = cur.next
    }

    let a = 0
    let b = arr.length - 1
    cur = null
    while (a <= b) {
      if (!cur) {
        cur = arr[a]
        a++
      } else {
        cur.next = arr[a]
        a++
        cur = cur.next
      }

      if (a > b) {
        break
      }

      cur.next = arr[b]
      b--
      cur = cur.next
    }

    if (cur) {
      cur.next = null
    }
  }
}
