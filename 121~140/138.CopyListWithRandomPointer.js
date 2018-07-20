/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  // 感觉和图的深拷贝很类似
  if (head === null) return null
  let map = new Map()
  let stack = [head]
  let node = new RandomListNode(head.label)
  map.set(head.label, node)
  while (stack.length > 0) {
    let cur = stack.pop()
    let curClone = map.get(cur.label)
    if (cur.next !== null) {
      if (map.has(cur.next.label)) {
        curClone.next = map.get(cur.next.label)
      } else {
        let node = new RandomListNode(cur.next.label)
        map.set(cur.next.label, node)
        stack.push(cur.next)
        curClone.next = node
      }
    }
    if (cur.random !== null) {
      if (map.has(cur.random.label)) {
        curClone.random = map.get(cur.random.label)
      } else {
        let node = new RandomListNode(cur.random.label)
        map.set(cur.random.label, node)
        stack.push(cur.random)
        curClone.random = node
      }
    }
  }
  return node
}
