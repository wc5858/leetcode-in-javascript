/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力破解，可以发现，这题的复杂度从某种意义上说取决于排序的复杂度
// var maximumGap = function(nums) {
//   if (nums.length < 2) return 0
//   let max = -Infinity
//   nums.sort((a, b) => {
//     return a - b
//   })
//   for (let i = 1; i < nums.length; i++) {
//     max = Math.max(nums[i] - nums[i - 1], max)
//   }
//   return max
// }
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  var minn = Number.MAX_SAFE_INTEGER
  var maxx = Number.MIN_SAFE_INTEGER

  for (var i = 0; i < nums.length; i++) {
    minn = Math.min(nums[i], minn)
    maxx = Math.max(nums[i], maxx)
  }
  // 每个桶的长度len,向上取整
  // 这是最关键的一步，这么做的原因可从数学上推导
  // 举例来说，maxx=8，minn=0，可能Gap的最小值即为3，以此作为桶的len值，就可以忽略那些小于3的gap
  var len = Math.floor((maxx - minn) / nums.length) + 1
  // 桶numbers
  var bucketNumber = Math.floor((maxx - minn) / len) + 1
  var buckets = new Array(bucketNumber)
  for (var i = 0; i < bucketNumber; i++) {
    buckets[i] = []
  }
  for (var i = 0; i < nums.length; i++) {
    //元素分入桶
    var index = Math.floor((nums[i] - minn) / len)
    if (buckets[index].length === 0) {
      buckets[index].push(nums[i])
      buckets[index].push(nums[i])
    } else {
      if (buckets[index][0] > nums[i]) {
        buckets[index][0] = nums[i]
      }
      if (buckets[index][1] < nums[i]) {
        buckets[index][1] = nums[i]
      }
    }
    console.log(buckets)
  }
  //gap的计算，For each non-empty buckets p, find the next non-empty buckets q, return min（ q.min - p.max ）
  var gap = 0
  var prev = 0
  for (var i = 0; i < buckets.length; i++) {
    if (buckets[i].length === 0) continue
    gap = Math.max(gap, buckets[i][0] - buckets[prev][1])
    prev = i
  }
  return gap
}

maximumGap([3, 6, 9, 1])
