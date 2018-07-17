/**
 * 
 * 参考solution的版本
 * a version convert solution's java to js
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {
  let n = nums1.length
  let m = nums2.length
  if (n < m) return findMedianSortedArrays(nums2, nums1)
  let iMin = 0
  let iMax = m
  let harf = Math.floor((n + m + 1) / 2)
  while (iMin <= iMax) {
    let i = Math.floor((iMin + iMax) / 2)
    let j = harf - i
    if (i < iMax && nums1[j - 1] > nums2[i]) {
      iMin++
    } else if (i > iMin && nums2[i - 1] > nums1[j]) {
      iMax--
    } else {
      let maxLeft = 0
      if (i == 0) {
        maxLeft = nums1[j - 1]
      } else if (j == 0) {
        maxLeft = nums2[i - 1]
      } else {
        maxLeft = Math.max(nums2[i - 1], nums1[j - 1])
      }
      if ((m + n) % 2 == 1) {
        return maxLeft
      }

      let minRight = 0
      if (i == m) {
        minRight = nums1[j]
      } else if (j == n) {
        minRight = nums2[i]
      } else {
        minRight = Math.min(nums1[j], nums2[i])
      }

      return (maxLeft + minRight) / 2.0
    }
  }
}
