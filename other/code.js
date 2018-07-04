// 给多个字符串添加字符串停止位的问题？
// 比如现在我发送多串字符，每个字符可以是[0,9]其中的一个，现在我想对原始内容做一个编码，定义一个代表本串截止的字符。
// 	定义方法：	使用单个的0作为每串字符的结束标志字符，字符串中如果出现了0，则将其变成00，比如
// 			两串字符   12034 24056 ，编码后变成  12003402400560
// 	我的问题：若某串字符内容以0开头或者以0结尾，这种编码方式会造成不知道内容中的0属于相邻两个字符串中的哪一个，如：
// 			两串字符	1230 234	， 编码后变成 123000234，
// 解码的时候就有两种理解： 1230 234  或 123 0234    ，求问这个问题如何解决呢？

// 思路：连续出现的0 表示成00八进制数表示的0的个数00，同时这个八进制数里面的0用8表示

function encode(strs) {
  let res = ''
  for (let i of strs) {
    if (res) {
      res += '0'
    }
    let count = 0
    for (let j of i) {
      if (j !== '0') {
        if (count) {
          res += '00' + count.toString(8).replace(/0/g, '8') + '00' + j
          count = 0
        } else {
          res += j
        }
      } else {
        count++
      }
    }
    if (count) {
      res += '00' + count.toString(8).replace(/0/g, '8') + '00'
    }
  }
  return res
}



function decode(str) {
  let index = 0
  let s = ''
  let res = []
  while (index < str.length) {
    if (str[index] !== '0') {
      s += str[index]
      index++
    } else {
      if (str[index + 1] === '0'&&str[index + 2] !== '0') {
        index += 2
        let temp = ''
        while (str[index] !== '0') {
          temp += str[index]
          index++
        }
        s += '0'.repeat(parseInt(temp.replace(/8/g, '0'), 8))
        index += 2
      } else {
        res.push(s)
        s = ''
        index++
      }
    }
  }
  res.push(s)
  return res
}
let test1 = ['10', '1']
let test2 = ['100000000000000000000', '1']
console.log(encode(test1))
console.log(encode(test2))
console.log(decode(encode(test1)))
console.log(decode(encode(test2)))