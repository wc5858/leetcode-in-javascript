var groupAnagrams = function(strs) {
  let res = {}
  let primeNumbers = {
    a: 2,
    b: 3,
    c: 5,
    d: 7,
    e: 11,
    f: 13,
    g: 17,
    h: 19,
    i: 23,
    j: 29,
    k: 31,
    l: 37,
    m: 41,
    n: 43,
    o: 47,
    p: 53,
    q: 59,
    r: 61,
    s: 67,
    t: 71,
    u: 73,
    v: 83,
    w: 89,
    x: 97,
    y: 101,
    z: 103,
  }
  for (let i = 0; i < strs.length; i++) {
    let data = 1
    for (let j = 0; j < strs[i].length; j++) {
      data *= primeNumbers[strs[i][j]]
    }
    if (res[data]) {
      res[data].push(strs[i])
    } else {
      res[data] = [strs[i]]
    }
  }
  let result = []
  for (let r in res) {
    result.push(res[r])
  }
  return result
}
