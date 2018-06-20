var rotate = function(matrix) {
  let n = matrix[0].length
  let i=0
  let j=n-1
  let k = 0
  while(i<j){
    for(let idx = i;idx<j;idx++) {
      let temp = matrix[k][idx]
      matrix[k][idx] = matrix[n-1-idx][k]
      matrix[n-1-idx][k] = matrix[n-1-k][n-1-idx]
      matrix[n-1-k][n-1-idx] = matrix[idx][n-1-k]
      matrix[idx][n-1-k] = temp
    }
    i++
    j--
    k++
  }
};

let m = [[0]
]
rotate(m)
console.log(m)