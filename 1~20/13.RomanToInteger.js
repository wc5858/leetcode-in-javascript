/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
  let nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let last = 0
  let res = 0
  let cur = 0
  for (let i = s.length - 1; i >= 0; i--) {
    cur = nums[s[i]]
    if (cur <= last) {
      res -= cur
    } else {
      res += cur
    }
    last = cur
  }
  return res
};

console.log(romanToInt("MCMXCIV"))