/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function(n) {
  let str = '1'
  for(let i=1;i<n;i++) {
    let temp = ''
    let count = 0
    let pre = undefined
    for(let j=0;j<str.length;j++) {
      if(str[j] === pre || pre === undefined) {
        count++
      } else {
        temp += count + pre
        count = 1
      }
      pre = str[j]
    }
    temp += count + str[str.length-1]
    str = temp
  }
  return str
};