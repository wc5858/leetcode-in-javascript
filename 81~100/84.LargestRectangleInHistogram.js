{
  /**
   * @param {number[]} heights
   * @return {number}
   */
  // 暴力破解，[0,0,0,0,0,0,0,0,2147483647]这个case过不去
  // 时间太长了
  // let largestRectangleArea = function(heights) {
  //   let record = []
  //   let max = 0
  //   heights.push(0)
  //   for (let i = 0; i < heights.length; i++) {
  //     for (let j = 1; j <= heights[i]; j++) {
  //       record[j] = (record[j] || 0) + 1
  //     }
  //     for (let j = heights[i] + 1; j <= record.length - 1; j++) {
  //       max = Math.max(record[j] * j,max)
  //       record[j] = 0
  //     }
  //   }
  //   return max
  // }
  // 用map改进了下 然而：Runtime: 9708 ms
  // 真是给悲伤的故事
  let largestRectangleArea = function(heights) {
    let record = new Map()
    let max = 0
    heights.push(0)
    // 不过我发现我想到的heights.push(0)这个技巧别人也有用到~
    for (let i = 0; i < heights.length; i++) {
      let flag
      for (let j of record.entries()) {
        if (j[0] <= heights[i]) {
          record.set(j[0], j[1] + 1)
        } else {
          max = Math.max(j[0] * j[1], max)
          record.delete(j[0])
          if (!flag) {
            flag = j[1] + 1
          }
        }
      }
      if (!record.has(heights[i])) {
        record.set(heights[i], flag || 1)
      }
    }
    return max
  }

  let tester = require('../tester')
  let testCases = [
    {
      data: [[2, 1, 5, 6, 2, 3]],
      res: 10,
    },
    {
      data: [[1]],
      res: 1,
    },
    {
      data: [[2, 1, 2]],
      res: 3,
    },
    {
      data: [[3, 6, 5, 7, 4, 8, 1, 0]],
      res: 20,
    },
    {
      data: [[0, 0, 0, 0, 0, 0, 0, 0, 2147483647]],
      res: 2147483647,
    },
  ]
  tester(largestRectangleArea, testCases)
}
{
  // 其他人的解法，用栈来处理
  let largestRectangleArea = function(heights) {
    const len = heights.length
    if (len === 0) {
      return 0
    }
    const stack = [0]
    let max = heights[0]
    heights.push(0)
    for (let i = 1; i <= len; i++) {
      while (
        stack.length > 0 &&
        heights[stack[stack.length - 1]] >= heights[i]
      ) {
        const height = heights[stack.pop()]
        max = Math.max(
          max,
          height * (stack.length === 0 ? i : i - 1 - stack[stack.length - 1]),
        )
      }
      stack.push(i)
    }
    return max
  }
}
