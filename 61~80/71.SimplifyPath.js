let tester = require('../tester')
/**
 * @param {string} path
 * @return {string}
 */
let simplifyPath = function(path) {
  let arr = path.split('/')
  let stack = []
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '':
      case '.':
        break
      case '..':
        stack.pop()
        break
      default:
        stack.push(arr[i])
        break
    }
  }
  return '/' + stack.join('/')
}
let testCases = [
  {
    data: ['/home/'],
    res: '/home',
  },
  {
    data: ['/a/./b/../../c/'],
    res: '/c',
  },
  {
    data: ['/../'],
    res: '/',
  },
  {
    data: ['/home//foo/'],
    res: '/home/foo',
  },
]
tester(simplifyPath, testCases)
