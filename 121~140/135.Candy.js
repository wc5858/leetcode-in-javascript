/**
 * @param {number[]} ratings
 * @return {number}
 */
let count = n => (n * (n + 1)) / 2
let candy = function(ratings) {
  let len = ratings.length
  if (len < 2) return len
  let ans = 0
  let up = 0
  let down = 0
  let lastCompare = 0
  for (let i = 1; i < len; i++) {
    let compare = ratings[i] - ratings[i - 1]
    if (
      (lastCompare > 0 && compare === 0) ||
      (lastCompare < 0 && compare >= 0)
    ) {
      // 每次在谷位结算
      ans += count(up) + count(down) + Math.max(up, down)
      up = 0
      down = 0
    }
    if (compare > 0) up++
    if (compare < 0) down++
    if (compare === 0) ans++
    lastCompare = compare
  }
  return (ans += count(up) + count(down) + Math.max(up, down) + 1)
}

let tester = require('../tester')
let testCases = [
  {
    data: [[1, 0, 2]],
    res: 5,
  },
  {
    data: [[1, 2, 2]],
    res: 4,
  },
  {
    data: [[29, 51, 87, 87, 72, 12]],
    res: 12,
  },
  {
    data: [[1, 3, 2, 2, 1]],
    res: 7,
  },
  {
    data: [[1, 3, 4, 5, 2]],
    res: 11,
  },
  {
    data: [[1, 2, 4, 4, 4, 3]],
    res: 10,
  },
  {
    data: [[1, 2, 3, 4, 5, 3, 2, 1, 2, 6, 5, 4, 3, 3, 2, 1, 1, 3, 3, 3, 4, 2]],
    res: 47,
  },
]
tester(candy, testCases)
