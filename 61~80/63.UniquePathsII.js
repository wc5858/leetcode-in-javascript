/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
{
  // 我的这种实现一来比较复杂，二则改变了传入的引用类型，不是很好的解决方案
  var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    if (!m || !n) return 0
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        obstacleGrid[i][j] = obstacleGrid[i][j]
          ? 0
          : !i && !j
            ? 1
            : !i
              ? +obstacleGrid[0][j - 1]
              : !j
                ? +obstacleGrid[i - 1][0]
                : +obstacleGrid[i - 1][j] + +obstacleGrid[i][j - 1]
      }
    }
    return +obstacleGrid[m - 1][n - 1]
  }
  // console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))
  console.log(uniquePathsWithObstacles([[1, 0]]))
}
// better code
{
  var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length,
      n = obstacleGrid[0].length
    const paths = new Array(m).fill(0)

    paths[0] = 1
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][j]) {
          paths[i] = 0
        } else if (i > 0) {
          paths[i] += paths[i - 1]
        }
      }
    }

    return paths[m - 1]
  }
}
