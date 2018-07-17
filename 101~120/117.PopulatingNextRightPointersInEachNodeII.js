/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {
  var cur = root, pre = root;
  while (pre) {
    cur = pre
    let last = null
    while (cur) {
      if (last) {
        if (cur.left) {
          last.next = cur.left
          last = cur.left
        }
        if (cur.right) {
          last.next = cur.right
          last = cur.right
        }
      } else {
        if (cur.left) {
          last = cur.left
          if (cur.right) {
            last.next = cur.right
            last = cur.right
          }
        } else {
          last = cur.right
        }
      }
      cur = cur.next
    }
    if (last) {
      last.next = null
    }
    while (pre && pre.left === null && pre.right === null) {
      pre = pre.next
    }
    if (pre) {
      pre = pre.left || pre.right
    }
  }
};