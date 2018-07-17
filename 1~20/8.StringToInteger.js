/**
 * @param {string} str
 * @return {number}
 */
let myAtoi = function(str) {
  let res = parseInt(str.trim()) || 0
  if (res > 2147483647) res = 2147483647
  if (res < -2147483648) res = -2147483648
  return res
};