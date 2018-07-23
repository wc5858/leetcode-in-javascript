/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = str => str.trim().split(/\s+/g).reverse().join(' ')
console.log(reverseWords("  the sky   is blue  "))