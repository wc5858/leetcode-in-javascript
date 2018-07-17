/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// let getRow = function (rowIndex) {
//   let ans = [1]
//   for (let i = 1; i <= rowIndex; i++) {
//     ans.unshift(1)
//     for (let j = 1; j < i; j++) {
//       ans[j] += ans[j + 1]
//     }
//   }
//   return ans
// };
// 用push从后往前操作比用unshift好很多，想必极有可能是因为unshift移动数组的开销
let getRow = function (rowIndex) {
  let ans = [1]
  for (let i = 1; i <= rowIndex; i++) {
    ans.push(1)
    for (let j = ans.length - 2; j > 0; j--) {
      ans[j] += ans[j - 1]
    }
  }
  return ans
};
console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(4))
console.log(getRow(5))