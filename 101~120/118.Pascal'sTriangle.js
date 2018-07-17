/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
  let ans = []
  for(let i = 0;i<numRows;i++) {
    let row = [1]
    for(let j = 1;j < i;j++) {
      row[j] = ans[i-1][j-1] + ans[i-1][j]
    }
    if(i>0) {
      row.push(1)
    }
    ans.push(row)
  }
  return ans
};
console.log(generate(1))
console.log(generate(2))
console.log(generate(5))