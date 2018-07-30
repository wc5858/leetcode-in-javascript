/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.stack = []
  let cur = root
  while (cur) {
    this.stack.push(cur)
    cur = cur.left
  }
}

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0
}

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  let node = this.stack.pop()
  if (node.right) {
    this.stack.push(node.right)
    let cur = node.right.left
    while (cur) {
      this.stack.push(cur)
      cur = cur.left
    }
  }
  return node.val
}

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
