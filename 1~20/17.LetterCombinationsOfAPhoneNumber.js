/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function(digits) {
  let result = []
  let temp = []
  for (let i = 0; i < digits.length; i++) {
    if (result.length === 0) {
      let code = 97 + (+digits[i] - 2) * 3
      switch (digits[i]) {
        case '7':
          result.push('s')
          break
        case '8':
          code++
          break
        case '9':
          code++
          result.push('z')
          break
        default:
          break
      }
      for (let j = 0; j < 3; j++) {
        result.push(String.fromCharCode(code + j))
      }
    } else {
      result.forEach(val => {
        let code = 97 + (+digits[i] - 2) * 3
        switch (digits[i]) {
          case '7':
            temp.push(val + 's')
            break
          case '8':
            code++
            break
          case '9':
            code++
            temp.push(val + 'z')
            break
          default:
            break
        }
        for (let j = 0; j < 3; j++) {
          temp.push(val + String.fromCharCode(code + j))
        }
      })
      result = temp
      temp = []
    }
  }
  return result
}

console.log(letterCombinations('999'))
