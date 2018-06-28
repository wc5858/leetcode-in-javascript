/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let isAns = num => num * num <= x && ++num * num > x
  let num = Math.floor(x / 2),
    left = 0,
    right = x
  while (!isAns(num)) {
    let data = num * num
    if (data < x) {
      left = num
      num = Math.ceil((num + right) / 2)
    } else {
      right = num
      num = Math.floor((num + left) / 2)
    }
  }
  return num
}
{
  // test case
  for (let i = 0; i < 1000; i++) {
    let ans = mySqrt(i)
    if (ans !== Math.floor(Math.sqrt(i))) {
      console.error(`Wrong Answer:${i}`)
    } else {
      console.log(i, ans)
    }
  }
}
