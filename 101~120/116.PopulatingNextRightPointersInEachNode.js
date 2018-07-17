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
{
  let connect = function (root) {
    if (root === null) return
    let temp = root
    while (temp) {
      temp.next = null
      temp = temp.right
    }
    function helper(r) {
      let left = r.left
      let right = r.right
      if (left) {
        helper(left)
        helper(right)
      }
      while (left) {
        left.next = right
        left = left.right
        right = right.left
      }
    }
    helper(root)
  };
}
{
  // 这是别人的解法，很值得学习，利用了上一层已建立的链接关系
  let connect = function (root) {
    let cur = root, pre = root;
    while (pre) {
      cur = pre;
      while (cur) {
        if (cur.left) cur.left.next = cur.right;
        if (cur.right) cur.right.next = cur.next ? cur.next.left : null;
        cur = cur.next;
      }
      pre = pre.left;
    }
  };
}