/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
  let index = digits.length - 1
  while (digits[index] == 9) {
    digits[index] = 0
    index--
  }
  if (index >= 0) {
    digits[index]++
  } else {
    digits.unshift(1)
  }
  return digits
}
