/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function(matrix) {
  let y = matrix.length
  if (y === 0) return []
  if (y === 1) return matrix[0]
  let x = matrix[0].length
  if (x === 1) return matrix.map(r => r[0])
  let res = [],
    i = 0,
    j = 0,
    dir = 0,
    limit = [0, 0, x - 1, y - 1],
    k = x * y
  while (k > 0) {
    k--
    res.push(matrix[i][j])
    switch (dir) {
      case 0:
        j++
        if (j === limit[2]) {
          dir = 1
          limit[0]++
        }
        break
      case 1:
        i++
        if (i === limit[3]) {
          dir = 2
          limit[2]--
        }
        break
      case 2:
        j--
        if (j === limit[1]) {
          dir = 3
          limit[3]--
        }
        break
      case 3:
        i--
        if (i === limit[0]) {
          dir = 0
          limit[1]++
        }
        break
    }
  }
  return res
}
console.log(spiralOrder([[3], [2]]))
