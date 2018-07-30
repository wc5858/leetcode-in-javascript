// 用map的方式仍然可以做，但是这里数组已经经过了排序，所以可以采用双指针的方式
// 此时，空间复杂度能达到O(1)
var twoSum = function(numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    let sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum > target) {
      right--
    } else {
      left++
    }
  }
}
