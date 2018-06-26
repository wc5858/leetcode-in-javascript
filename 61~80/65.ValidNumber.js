/**
 * @param {string} s
 * @return {boolean}
 */
// I do not think it is a good question.
{
  var isNumber = function(s) {
    s = s.trim()
    return !(isNaN(+s) || !s.length)
  }
}
{
  //by regular match
  var isNumber = function(s) {
    return !!s.match(/^\s*[+-]?(\d+\.\d+|\d+\.|\.\d+|\d+)(\e[+-]?\d+)?\s*$/)
  }
}
