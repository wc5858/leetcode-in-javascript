let intToRoman = function (num) {
  let result = ''
  let nums = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
  let count = 1
  let temp = num % 10
  let append = ''
  while (num > 0) {
    if (temp == 9) {
      append = nums[count - 1] + nums[count + 1]
    } else if (temp < 9 && temp >= 5) {
      append = nums[count] + nums[count - 1].repeat(temp % 5)
    } else if (temp == 4) {
      append = nums[count - 1] + nums[count]
    } else {
      append = nums[count - 1].repeat(temp)
    }
    result = append + result
    count += 2
    num = Math.floor(num / 10)
    temp = num % 10
  }
  return result
};
console.log(intToRoman(10))