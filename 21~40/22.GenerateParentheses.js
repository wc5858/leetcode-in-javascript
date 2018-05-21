/**
 * @param {number} n
 * @return {string[]}
 */
// 使用排列组合的方式来处理，避免递归操作
// 以n=3为例，相当于把两个右括号插入(*(*(*)的三个位置中，要求第一个位置的括号数不能超过1
// n大于3时，插入限制的计算会稍复杂些，具体表现为27行k的限制条件
var generateParenthesis = function(n) {
  if (n == 1) return ['()']
  let data = [
    {
      rest: n - 1,
      str: '(',
    },
    {
      rest: n - 2,
      str: '()',
    },
  ]
  let res = []
  for (let i = 1; i < n; i++) {
    let temp = []
    for (let j = 0; j < data.length; j++) {
      if (i != n - 1) {
        for (
          let k = 0;
          k <= i + 1 - (n - 1 - data[j].rest) && k <= data[j].rest;
          k++
        ) {
          temp.push({
            rest: data[j].rest - k,
            str: data[j].str + '(' + ')'.repeat(k),
          })
        }
      } else {
        res.push(data[j].str + '(' + ')'.repeat(data[j].rest) + ')')
      }
    }
    data = temp
  }
  return res
}
