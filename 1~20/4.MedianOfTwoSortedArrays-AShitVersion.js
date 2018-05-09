/**
 * 虽然代码和屎一样
 * 但是性能居然很好
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let long = nums1.length >= nums2.length ? nums1 : nums2
  let short = nums1.length < nums2.length ? nums1 : nums2
  let cursor1 = Math.floor((long.length - 1) / 2)
  let cursor2 = Math.floor((short.length - 2) / 2)
  if (short.length == 1) {
    if (long.length == 1) return (long[0] + short[0])/2
    if (long.length % 2 == 0) {
      if (short[0] <= long[cursor1]) {
        return long[cursor1]
      }
      if (short[0] >= long[cursor1 + 1]) {
        return long[cursor1 + 1]
      } else return short[0]
    } else {
      if (short[0] < long[cursor1]) {
        if (short[0] >= long[cursor1 - 1] || 0) {
          return (long[cursor1] + short[0]) / 2
        } else {
          return (long[cursor1] + long[cursor1 - 1]) / 2
        }
      }
      if (short[0] > long[cursor1]) {
        if (short[0] <= (long[cursor1 + 1] || Infinity)) {
          return (long[cursor1] + short[0]) / 2
        } else {
          return (long[cursor1] + long[cursor1 + 1]) / 2
        }
      }
      return short[0]
    }
  }
  while (long[cursor1 + 1] < short[cursor2]) {
    cursor2--
    cursor1++
  }
  while (long[cursor1] > short[cursor2 + 1]) {
    cursor1--
    cursor2++
  }
  let count = cursor1 + cursor2 + 2 - (nums1.length + nums2.length - cursor1 - cursor2 - 2)
  if (count == 0) {
    return (Math.max(long[cursor1] || 0, short[cursor2] || 0) + Math.min(long[cursor1 + 1] || Infinity, short[cursor2 + 1] || Infinity))/2
  }
  if (count > 0) {
    return Math.max(long[cursor1] || 0, short[cursor2] || 0)
  }
  if (count < 0) {
    return Math.min(long[cursor1 + 1] || Infinity, short[cursor2 + 1] || Infinity)
  }
}
