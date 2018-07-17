/**
 * @param {number} n
 * @return {number[]}
 */
{
  let grayCode = function (n) {
    let res = [0]
    if (n === 0) return [0]
    let arr = new Array(n).fill(false)
    let index = n - 1
    for (let i = 1; i < Math.pow(2, n); i++) {
      for (let j = 0; j < n; j++) {
        let base = Math.pow(2, j)
        let t = base * 2
        if (Math.floor((i + base) / t) > Math.floor((i - 1 + base) / t)) {
          arr[j] = !arr[j]
          break
        }
      }
      res.push(getNum(arr))
    }
    return res
  }
  function getNum(biArr) {
    let len = biArr.length - 1
    return biArr.reduce((pre, cur, i) => pre + (cur ? Math.pow(2, i) : 0), 0)
  }
  console.log(grayCode(4))
}
// for(let i of [0,1,3,2,6,7,5,4,12,13,15,14,10,11,9,8]) {
//   console.log((16+i).toString(2))
// }

{
  // 其他人的代码，位操作；感觉很秀
  // Bit Manipulation
  let grayCode = function (n) {
    let res = [];
    // 1 << n即2的n次方
    for (let i = 0; i < 1 << n; i++) {
      // console.log(i.toString(2),(i >> 1).toString(2),(i ^ i >> 1).toString(2))
      // 按位异或操作，这个得研究下真值表
      res.push(i ^ i >> 1);
    }

    return res;
  };
  console.log(grayCode(4))
}