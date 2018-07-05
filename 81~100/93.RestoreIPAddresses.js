// 这部分代码只需执行一次，得到下面的划分形式数组
// const devide = {}
// for (let i = 3; i > 0; i--) {
//   for (let j = 3; j > 0; j--) {
//     for (let k = 3; k > 0; k--) {
//       for (let l = 3; l > 0; l--) {
//         let sum = i + j + k + l
//         if (sum > 3 && sum < 13) {
//           devide[sum] ? devide[sum].push([i, i + j, i + j + k]) : devide[sum] = [[i, i + j, i + j + k]]
//         }
//       }
//     }
//   }
// }
// console.log(devide)
let data = {
  '4': [[1, 2, 3]],
  '5': [[2, 3, 4], [1, 3, 4], [1, 2, 4], [1, 2, 3]],
  '6':
    [[3, 4, 5],
    [2, 4, 5],
    [2, 3, 5],
    [2, 3, 4],
    [1, 4, 5],
    [1, 3, 5],
    [1, 3, 4],
    [1, 2, 5],
    [1, 2, 4],
    [1, 2, 3]],
  '7':
    [[3, 5, 6],
    [3, 4, 6],
    [3, 4, 5],
    [2, 5, 6],
    [2, 4, 6],
    [2, 4, 5],
    [2, 3, 6],
    [2, 3, 5],
    [2, 3, 4],
    [1, 4, 6],
    [1, 4, 5],
    [1, 3, 6],
    [1, 3, 5],
    [1, 3, 4],
    [1, 2, 5],
    [1, 2, 4]],
  '8':
    [[3, 6, 7],
    [3, 5, 7],
    [3, 5, 6],
    [3, 4, 7],
    [3, 4, 6],
    [3, 4, 5],
    [2, 5, 7],
    [2, 5, 6],
    [2, 4, 7],
    [2, 4, 6],
    [2, 4, 5],
    [2, 3, 6],
    [2, 3, 5],
    [1, 4, 7],
    [1, 4, 6],
    [1, 4, 5],
    [1, 3, 6],
    [1, 3, 5],
    [1, 2, 5]],
  '9':
    [[3, 6, 8],
    [3, 6, 7],
    [3, 5, 8],
    [3, 5, 7],
    [3, 5, 6],
    [3, 4, 7],
    [3, 4, 6],
    [2, 5, 8],
    [2, 5, 7],
    [2, 5, 6],
    [2, 4, 7],
    [2, 4, 6],
    [2, 3, 6],
    [1, 4, 7],
    [1, 4, 6],
    [1, 3, 6]],
  '10':
    [[3, 6, 9],
    [3, 6, 8],
    [3, 6, 7],
    [3, 5, 8],
    [3, 5, 7],
    [3, 4, 7],
    [2, 5, 8],
    [2, 5, 7],
    [2, 4, 7],
    [1, 4, 7]],
  '11': [[3, 6, 9], [3, 6, 8], [3, 5, 8], [2, 5, 8]],
  '12': [[3, 6, 9]]
}
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let len = s.length
  if (len < 4 || len > 12) return []
  let ans = []
  let d = data[len]
  for (let i = 0; i < d.length; i++) {
    let pos = 0, count = 0, res = ''
    for (let j = 0; j < d[i].length; j++) {
      let cur = s.substring(pos, d[i][j])
      if (checkUnit(cur)) {
        count++
        res += cur + '.'
        pos = d[i][j]
      } else {
        break
      }
    }
    if (count === 3) {
      let end = s.substring(pos)
      if (checkUnit(end)) {
        ans.push(res + end)
      }
    }
  }
  return ans
};
var checkUnit = function (s) {
  let num = +s
  return !(num > 255 || num === 0 && s.length > 1 || s[0] === '0' && num > 0)
}
console.log(restoreIpAddresses("25525511135"))
console.log(restoreIpAddresses("010010"))