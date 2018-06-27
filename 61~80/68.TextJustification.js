/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let count = 0
  let width = 0
  let res = []
  for (let i = 0; i < words.length; i++) {
    temp = width + words[i].length
    if ((count && count - 1) + temp + 1 > maxWidth) {
      if (count !== 0) {
        let cur
        if (count === 1) {
          cur = words[i - 1]
          if (maxWidth - cur.length) {
            cur += ' '.repeat(maxWidth - cur.length)
          }
        } else {
          let left = maxWidth - width
          let spaces1 = ' '.repeat(Math.floor(left / (count - 1)))
          let extraSpaces = left % (count - 1)
          let spaces2 = spaces1 + ' '
          let s = i - count
          cur = words[s]
          for (let j = 1; j < count; j++) {
            cur += (j <= extraSpaces ? spaces2 : spaces1) + words[s + j]
          }
        }
        res.push(cur)
      }
      width = words[i].length
      count = 1
    } else {
      width = temp
      count++
    }
  }
  if (count > 0) {
    let s = words.length - count
    let cur = words[s]
    console.log(cur)
    for (let j = s + 1; j < words.length; j++) {
      cur += ' ' + words[j]
    }
    if (maxWidth - cur.length) {
      cur += ' '.repeat(maxWidth - cur.length)
    }
    res.push(cur)
  }
  return res
}
// console.log(
//   fullJustify(
//     [
//       'Science',
//       'is',
//       'what',
//       'we',
//       'understand',
//       'well',
//       'enough',
//       'to',
//       'explain',
//       'to',
//       'a',
//       'computer.',
//       'Art',
//       'is',
//       'everything',
//       'else',
//       'we',
//       'do',
//     ],
//     20,
//   ),
// )
console.log(
  fullJustify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16),
)
// console.log(
//   fullJustify(['Listen', 'to', 'many,', 'speak', 'to', 'a', 'few.'], 6),
// )
