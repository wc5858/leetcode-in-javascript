module.exports = function(func, testCases, check) {
  for (let i of testCases) {
    try {
      let ans = func(...i.data)
      let checker = check || ((a, b) => a === b)
      if (!checker(ans, i.res, i)) {
        console.error('Wrong Answer:' + ans)
      }
    } catch (e) {
      console.log(e)
      console.log('last case:' + i)
    }
  }
}
