let removeDuplicates = function(nums) {
  let len = nums.length
  if (len <= 2) return len
  let i = 0
  let index = 0
  while (i < nums.length) {
    let prev = nums[i],
      duplicatesCount = 0
    while (nums[++i] === prev) {
      duplicatesCount++
    }
    nums[index++] = prev
    if (duplicatesCount) {
      nums[index++] = prev
    }
  }
  return index
}
let nums = [1,1,1,2,2,3]
console.log(removeDuplicates(nums), nums)
