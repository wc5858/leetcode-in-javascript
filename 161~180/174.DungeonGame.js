/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  let w = dungeon[0].length
  let h = dungeon.length
  let dp = new Array(w + 1)
  dp[w] = 1
  for (let i = h - 1; i >= 0; i--) {
    for (let j = w - 1; j >= 0; j--) {
      let health = 0
      if (i == h - 1) health = dp[j + 1] - dungeon[i][j]
      else if (j == w - 1) health = dp[j] - dungeon[i][j]
      else health = Math.min(dp[j + 1], dp[j]) - dungeon[i][j]
      dp[j] = health <= 0 ? 1 : health
    }
  }
  return dp[0]
}

console.log(calculateMinimumHP([[-2, -3, 3], [-5, -10, 1], [10, 30, -5]]))
console.log(calculateMinimumHP([[0, 0, 0], [1, 1, -1]]))
