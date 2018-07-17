{
  // 在33题基础上打补丁的版本
  // it looks terrible
  let middle = function(i, j) {
    return i + Math.floor((j - i) / 2)
  }
  let search = function(nums, target) {
    if (nums.length === 0) return false
    if (nums.length === 1) return nums[0] === target
    // 补丁，主要针对重复数字出现在头尾的情况
    if (nums[0] === target) return true
    let end = nums.length - 1
    let start = 0
    while (nums[end] === nums[0]) {
      end--
    }
    while (nums[start] === nums[start + 1]) {
      start++
    }
    if (start >= end) return false
    if (nums[end] === target) return true
    return biSearch(nums, start, end, target)
  }
  // biSearch只修改了返回值类型
  let biSearch = function(nums, start, end, target) {
    if (start === end - 1) {
      return nums[end] === target || nums[start] === target
    }
    if (
      nums[end] > nums[start] &&
      (target > nums[end] || target < nums[start])
    ) {
      // 这个判断非必要，可以在某些情况下提前终止二叉查找，但是会引入额外的判断
      return false
    }
    let mid = middle(start, end)
    if (nums[start] < nums[mid]) {
      if (nums[start] <= target && target <= nums[mid]) {
        return biSearch(nums, start, mid, target)
      } else {
        return biSearch(nums, mid, end, target)
      }
    } else {
      if (nums[mid] <= target && target <= nums[end]) {
        return biSearch(nums, mid, end, target)
      } else {
        return biSearch(nums, start, mid, target)
      }
    }
  }
  let tester = require('../tester')
  let testCases = [
    {
      data: [[2, 5, 6, 0, 0, 1, 2], 3],
      res: false,
    },
    {
      data: [[2, 5, 6, 0, 0, 1, 2], 0],
      res: true,
    },
    {
      data: [[1, 1, 3, 1], 3],
      res: true,
    },
    {
      data: [[1, 1], 3],
      res: false,
    },
    {
      data: [[2, 2, 2, 0, 2, 2], 0],
      res: true,
    },
    {
      data: [[0, 0, 1, 1, 2, 0], 2],
      res: true,
    },
    {
      data: [[1, 2, 2, 2, 0, 1, 1], 0],
      res: true,
    },
  ]
  tester(search, testCases)
}
{
  // 其他人的解法，要简洁很多
  let search = function(nums, target) {
    const len = nums.length
    if (len === 0) {
      return false
    }
    let start = 0
    let end = len - 1
    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2)
      if (nums[mid] === target) {
        return true
      }
      if (nums[mid] < nums[end]) {
        if (target > nums[mid] && target <= nums[end]) {
          start = mid + 1
        } else {
          end = mid - 1
        }
      } else if (nums[mid] > nums[end]) {
        if (target < nums[mid] && target >= nums[start]) {
          end = mid - 1
        } else {
          start = mid + 1
        }
      } else {
        end = end - 1
      }
    }
    return false
  }
}
