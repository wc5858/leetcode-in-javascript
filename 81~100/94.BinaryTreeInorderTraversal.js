// 中序遍历
// 还可以用栈做
let inorderTraversal = function (root) {
  let ans = []
  function traversal(node) {
    if (node) {
      traversal(node.left)
      ans.push(node.val)
      traversal(node.right)
    }
  }
  traversal(root)
  return ans
};