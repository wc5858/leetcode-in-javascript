/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = code => code > 47 && code < 58 || code > 64 && code < 91
let isPalindrome = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    let codeL, codeR
    do {
      codeL = s.charCodeAt(left++)
      if (codeL > 96 && codeL < 123) {
        codeL = codeL - 32
      }
    } while (left < right && !isValid(codeL))
    do {
      codeR = s.charCodeAt(right--)
      if (codeR > 96 && codeR < 123) {
        codeR = codeR - 32
      }
    } while (left < right && !isValid(codeR))
    console.log(codeL, codeR, left, right)
    if (codeL !== codeR) {
      return !(isValid(codeR) && isValid(codeL))
    }
  }
  return true
};
let tester = require('../tester')
let testCases = [
  {
    data: ["A man, a plan, a canal: Panama"],
    res: true,
  },
  {
    data: ["race a car"],
    res: false,
  },
  {
    data: [".,"],
    res: true,
  },
  {
    data: ["0P"],
    res: false,
  },
  {
    data: ["ab"],
    res: false,
  }
]
tester(isPalindrome, testCases)
{
  // 别人写的一种更简单的方法（通过正则预先处理字符串）
  let isPalindrome = function (s) {

    s = s.toLowerCase().replace(/([^a-z0-9])/g, '');

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };
}