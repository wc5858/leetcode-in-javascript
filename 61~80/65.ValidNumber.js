/**
 * @param {string} s
 * @return {boolean}
 */
// I do not think it is a good question.
{
  let isNumber = function(s) {
    s = s.trim()
    return !(isNaN(+s) || !s.length)
  }
}
{
  //by regular match
  let isNumber = function(s) {
    return !!s.match(/^\s*[+-]?(\d+\.\d+|\d+\.|\.\d+|\d+)(\e[+-]?\d+)?\s*$/)
  }
}
