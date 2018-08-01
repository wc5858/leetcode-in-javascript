/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if(grid[i][j]==='1') {
        grid[i][j]='0'
        search(i,j)
        ans++
      }
    }
  }
  function search(i,j) {
    if(i > 0 && grid[i-1][j]==='1') {
      grid[i-1][j] = '0'
      search(i-1,j)
    }
    if(j > 0 && grid[i][j-1]==='1') {
      grid[i][j-1] = '0'
      search(i,j-1)
    }
    if(j < grid[0].length && grid[i][j+1]==='1') {
      grid[i][j+1] = '0'
      search(i,j+1)
    }
    if(i < grid.length && grid[i+1][j]==='1') {
      grid[i+1][j] = '0'
      search(i+1,j)
    }
  }
  return ans
}
