/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
{
  let mergeKLists = function(lists) {
    let res = lists
    while (res.length > 1) {
      let temp = []
      let last = null
      for (let i = 0; i < res.length; i++) {
        if (res[i]) {
          if (last) {
            temp.push(mergeTwoLists(last, res[i]))
            last = null
          } else {
            if (i == res.length - 1) {
              temp.push(res[i])
            } else {
              last = res[i]
            }
          }
        } else if (i == res.length - 1) {
          temp.push(last)
        }
      }
      res = temp
    }
    return res[0] || []
  }
}
{
  let mergeTwoLists = function(l1, l2) {
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
}
