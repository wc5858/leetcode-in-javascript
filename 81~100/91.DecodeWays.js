/**
 * @param {string} s
 * @return {number}
 */
{
  // 我的解法，80ms
  var numDecodings = function (s) {
    let len = s.length
    if (len === 0 || s[0] === '0') {
      // 加上这个判断后减少到60ms
      return 0;
    }
    let cache = []
    function decoder(index) {
      if (cache[index] !== undefined) return cache[index]
      if (len - index === 1) {
        return s[index] === '0' ? 0 : 1
      }
      if (len - index === 2) {
        let data = +s.substring(index)
        if (data < 27) {
          if (data <= 9) return 0
          if (data === 10 || data === 20) return 1
          return 2
        } else {
          return s[index + 1] === '0' ? 0 : 1
        }
      }
      let ans = 0
      if (s[index] !== '0') {
        ans += decoder(index + 1)
      }
      let data = +s.substr(index, 2)
      if (data > 9 && data < 27) {
        ans += decoder(index + 2)
      }
      cache[index] = ans
      return ans
    }
    return decoder(0)
  };


  let tester = require('../tester')
  var testCases = [
    {
      data: ['12'],
      res: 2,
    },
    {
      data: ['226'],
      res: 3,
    },
    {
      data: ['1212'],
      res: 5,
    },
    {
      data: ['121200'],
      res: 0,
    },
    {
      data: ['121200'],
      res: 0,
    },
    {
      data: ['928329310'],
      res: 1,
    },
    {
      data: ['01'],
      res: 0,
    },
    {
      data: ['012'],
      res: 0,
    },
    {
      data: ['230'],
      res: 0,
    },
  ]
  tester(numDecodings, testCases)
}
{
  // 56ms solution
  // 感觉和我用递归的思路是一样的，其实现方式值得学习
  var numDecodings = function (s) {
    if (s.length === 0 || s[0] === '0') {
      return 0;
    }
    var c1 = 1, c2 = 1;
    for (var i = 1; i < s.length; i++) {
      if (s[i] === '0') {
        c2 = 0;
        // 这个判断可以提前终止一些循环，但是没有提升性能，说明这样的用例（有连续2个0）不多
        // if(c1===0) return 0
      }
      if (s[i - 1] === '1' || s[i - 1] === '2' && parseInt(s[i]) <= 6) {
        let temp = c2
        c2 = c1 + c2;
        c1 = temp;
        // 等效为
        // c1 = c2 - c1
      } else {
        c1 = c2;
      }
      console.log(c1,c2)
    }
    return c2;
  };
  numDecodings('1212')
}