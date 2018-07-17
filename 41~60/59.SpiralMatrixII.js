let generateMatrix = function(n) {
  let matrix = [],
    i = 0,
    j = 0,
    dir = 0,
    limit = [0, 0, n - 1, n - 1],
    k = n * n
  for (let m = 1; m <= k; m++) {
    if (!matrix[i]) {
      matrix[i] = new Array(n)
    }
    matrix[i][j] = m
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
  return matrix
}
