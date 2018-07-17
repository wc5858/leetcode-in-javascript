/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// let merge = function(nums1, m, nums2, n) {
//   let index = m + n - 1
//   let i = m - 1,
//     j = n - 1
//   while (index >= 0) {
//     if (j < 0 || nums1[i] >= nums2[j]) {
//       nums1[index] = nums1[i]
//       i--
//     } else {
//       nums1[index] = nums2[j]
//       j--
//     }
//     index--
//   }
// };
// 简（zhuang）洁（bi）版
let merge = function(nums1, m, nums2, n) {
  let index = m + n - 1,
    i = m - 1,
    j = n - 1
  while (index >= 0) {
    nums1[index--] = j < 0 || nums1[i] >= nums2[j] ? nums1[i--] : nums2[j--]
  }
}
{
  // case 1
  let nums1 = [1, 2, 3, 0, 0, 0]
  let nums2 = [2, 5, 6]
  merge(nums1, 3, nums2, 3)
  console.log(nums1)
}
{
  // case 2
  let nums1 = [1, 2, 3]
  let nums2 = []
  merge(nums1, 3, nums2, 0)
  console.log(nums1)
}
{
  // case 3
  let nums1 = [0, 0, 0]
  let nums2 = [1, 2, 3]
  merge(nums1, 0, nums2, 3)
  console.log(nums1)
}
