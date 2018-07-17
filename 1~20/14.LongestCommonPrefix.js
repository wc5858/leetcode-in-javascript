/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
  let result = ''
  let last
  if(strs.length === 0) {
    return ''
  }
  if(strs.length === 1) {
    return strs[0]
  }
  outer:for(let cursor = 0;true;cursor++) {
    last = ''
    for(let i = 0;i<strs.length;i++) {
      if(cursor>=strs[i].length || (last && strs[i][cursor] !== last)) {
        break outer
      } else if(last && strs[i][cursor] === last && i===strs.length - 1) {
        result += last
      } else if(!last) {
        last = strs[i][cursor]
      }
    }
  }
  return result
};