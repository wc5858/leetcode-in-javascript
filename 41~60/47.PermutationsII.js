var permute = function(nums) {
  if (nums.length === 1) return [nums]
  const res = []
  function p(arr, data) {
    console.log(arr,data)
    if (arr.length === 1) {
      data.unshift(arr[0])
      res.push(data)
      return
    }
    for (let i = 0; i < arr.length; i++) {
      if(arr.indexOf(arr[i])!==i) continue
      let clone = [...arr]
      p(clone, [clone.splice(i, 1)[0]].concat(data || []))
    }
  }
  p(nums)
  return res
}
console.log(permute([1, 1, 3]))
