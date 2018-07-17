{
  // 吸取62&63的经验后给出如下算法，beat 100%
  let minPathSum = function(grid) {
    const m = grid.length,
      n = grid[0].length
    const paths = new Array(n).fill(0)
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (j === 0) {
          paths[j] += grid[i][j]
        } else {
          paths[j] =
            grid[i][j] + (i ? Math.min(paths[j], paths[j - 1]) : paths[j - 1])
        }
      }
    }
    return paths[n - 1]
  }
  console.log(minPathSum([[1, 2], [1, 1]]))
  console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
}
