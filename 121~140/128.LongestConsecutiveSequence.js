/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用了map来建立区间和合并区间，搞得过于复杂了
// 不过时间复杂度确实是O(n)没毛病
let longestConsecutive = function (nums) {
  if (nums.length < 2) return nums.length
  let map = new Map()
  let max = 1
  let visited = new Set()
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    if (visited.has(cur)) continue
    visited.add(cur)
    if (map.has(cur + 1) && map.has(cur - 1)) {
      let left = map.get(cur - 1)
      let right = map.get(cur + 1)
      if (left.pair !== 'single') {
        map.delete(cur - 1)
      }
      if (right.pair !== 'single') {
        map.delete(cur + 1)
      }
      let newRange = left.range + right.range + 1
      let l = map.get(cur - left.range)
      l.pair = 'left'
      l.range = newRange
      let r = map.get(cur + right.range)
      r.pair = 'right'
      r.range = newRange
      max = Math.max(newRange, max)
    } else if (map.has(cur + 1)) {
      let data = map.get(cur + 1)
      if (data.pair === 'left') {
        map.get(cur + data.range).range++
        data.range++
        map.set(cur, data)
        map.delete(cur + 1)
        max = Math.max(max, data.range)
      } else if (data.pair === 'single') {
        data.range++
        data.pair = 'right'
        map.set(cur, {
          range: 2,
          pair: 'left'
        })
        max = Math.max(max, data.range)
      }
    } else if (map.has(cur - 1)) {
      let data = map.get(cur - 1)
      if (data.pair === 'right') {
        map.get(cur - data.range).range++
        data.range++
        map.set(cur, data)
        map.delete(cur - 1)
        max = Math.max(max, data.range)
      } else if (data.pair === 'single') {
        data.range++
        data.pair = 'left'
        map.set(cur, {
          range: 2,
          pair: 'right'
        })
        max = Math.max(max, data.range)
      }
    } else {
      map.set(cur, {
        range: 1,
        pair: 'single'
      })
    }
  }
  return max
};

let tester = require('../tester')
let testCases = [
  {
    data: [[100, 4, 200, 1, 3, 2]],
    res: 4,
  },
  {
    data: [[100, 4, 200, 1, 3, 2, 5]],
    res: 5,
  },
  {
    data: [[1, 2, 0, 1]],
    res: 3,
  },
  {
    data: [[7, -2, 9, 9, 1, 9, 8, -4, 6, -6, -6, 4, 1, 3, 6, 3, 5, -2, 3, 4, -6, 1, 5, -9, 6, 1, 2, -2, 1]],
    res: 9,
  }
]
tester(longestConsecutive, testCases)
{
  // 别人的简单版本，思路其实是一样的，但是不需要维护对象数据结构
  let longestConsecutive = function (nums) {
    let map = {}, max = 0
    nums.forEach(item => {
      let left = map[item - 1] || 0, right = map[item + 1] || 0
      if (!(item in map)) {
        map[item] = left + right + 1
        left && (map[item - left] = map[item])
        right && (map[item + right] = map[item])
      }
      // 这一句写的好秀啊
      map[item] > max && (max = map[item])
    })
    return max
  };
}
{
  // es6改写
  let longestConsecutive = function (nums) {
    let map = new Map(), max = 0
    for (let i = 0; i < nums.length; i++) {
      // for of迭代性能不太行
      let item = nums[i]
      let left = map.get(item - 1) || 0, right = map.get(item + 1) || 0
      if (!map.has(item)) {
        let newRange = left + right + 1
        map.set(item, newRange)
        if (left > 0) map.set(item - left, newRange)
        if (right > 0) map.set(item + right, newRange)
        max = Math.max(max, newRange)
      }
    }
    return max
  };
}