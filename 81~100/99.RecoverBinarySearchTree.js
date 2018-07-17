// let getMax = function (root) {
//   while (root.right) {
//     root = root.right
//   }
//   return root.val
// }

// let getMin = function (root) {
//   while (root.left) {
//     root = root.left
//   }
//   return root.val
// }
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {void} Do not return anything, modify root in-place instead.
//  */
// let recoverTree = function (root) {
//   if (root === null) return
//   if (root.left !== null && getMax(root.left) > root.val) {
//     let child = root.left
//     let pre
//     while(pre!==child.val) {
//       if(child.left && root.val < child.left.val) {
//         child = child.left
//       }
//       if(child.right && root.val > child.right.val) {
//         child = child.right
//       }
//       if(root.val<child.val&&child.left&&child.left.left===null&&child.left.right===null) {
//         child = child.left
//       }
//       if(root.val>child.val&&child.right&&child.right.left===null&&child.right.right===null) {
//         child = child.right
//       }
//       pre = child.val
//     }
//     [child.val,root.val] = [root.val,child.val]
//     return
//   }
//   if (root.right !== null && getMin(root.right) < root.val) {
//     let child = root.right
//     let pre
//     while(pre!==child.val) {
//       if(child.left && root.val < child.left.val) {
//         child = child.left
//       }
//       if(child.right && root.val > child.right.val) {
//         child = child.right
//       }
//       if(root.val<child.val&&child.left&&child.left.left===null&&child.left.right===null) {
//         child = child.left
//       }
//       if(root.val>child.val&&child.right&&child.right.left===null&&child.right.right===null) {
//         child = child.right
//       }
//       pre = child.val
//     }
//     console.log(child.val,root.val)
//     let temp = child.val
//     child.val = root.val
//     root.val =temp
//     // [child.val,root.val] = [root.val,child.val]
//     return
//   }
//   recoverTree(root.left)
//   recoverTree(root.right)
// };
let recoverTree = function (root) {
  let node1, node2
  let prev = new TreeNode(-Infinity)
  traverse(root)
  let temp = node1.val
  node1.val = node2.val
  node2.val = temp
  function traverse(node) {
    if (!node) return
    traverse(node.left)
    if (node.val < prev.val) {
      node2 = node
      if (!node1) node1 = prev
    }
    prev = node
    traverse(node.right)
  }
};