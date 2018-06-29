/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// {
//   // 跑第84/87个case的时候出错了，原因未查明
// var sortColors = function(nums) {
//   let left = 0
//   let right = nums.length - 1
//   let count = 0
//   for (let i = 0; i <= right; i++) {
//     while (nums[right] === 2) {
//       right--
//     }
//     if (left < right) {
//       if (nums[i] === 0) {
//         nums[left] = 0
//         left++
//       }
//       if (nums[i] === 1) {
//         count++
//       }
//       if (nums[i] === 2) {
//         if (nums[right] === 1) {
//           count++
//         }
//         if (nums[right] === 0) {
//           // 这里的代码不能和上面的合并，因为left可能等于i
//           nums[left] = 0
//           left++
//         }
//         nums[right] = 2
//         right--
//       }
//     }
//     console.log(left)
//   }
//   for (let i = left; i < left + count; i++) {
//     nums[i] = 1
//   }
// }
// // let nums = [2, 0, 2, 1, 1, 0]
// let nums = [1,0,1,1,1,1,0,2,2,1,0,0,0,1,2,2,1,2,1,0,0,2,2,2,0,1,2,0,1,2,2,2,2,0,2,2,2,2,1,2,1,0,0,2,1,0,1,0,0,0,1,1,0,1,1]
// // let nums = [2, 0, 1]
// // let nums = [2,2,1]
// // let nums = [0]
// sortColors(nums)
// }

{
  // 别人的解法
  // 解构赋值的方式写swap颇为巧妙
  // 而且通过swap来进行置换，避免了我上面那种不太成功的实现中确定1的位置的麻烦
  function sortColors(nums) {
    let l = 0
    let r = nums.length - 1
    for (let i = 0; i <= r; i++) {
      if (nums[i] === 0) {
        ;[nums[i], nums[l]] = [nums[l], nums[i]]
        l++
      } else if (nums[i] === 2) {
        ;[nums[i], nums[r]] = [nums[r], nums[i]]
        r--
        i--
      }
    }
  }
}
