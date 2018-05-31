/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/**
 * 
 * 
 * 
 * 没做出来- -
 * 
 * 
 * 
 * 
 */
let updateSet = function(sets, i, j, item) {
  // 更新关联集合
  for (let m = 0; m < 9; m++) {
    if (sets[m + '-' + j]) {
      sets[m + '-' + j].data.delete(item)
    }
    if (sets[i + '-' + m]) {
      sets[i + '-' + m].data.delete(item)
    }
    let x =
      sets[
        Math.floor(i / 3) * 3 +
          Math.floor(m / 3) +
          '-' +
          (Math.floor(j / 3) * 3 + m % 3)
      ]
    if (x) {
      x.data.delete(item)
    }
  }
}
let simplify = function(board, count, sets) {
  // 利用size为1的集合，能进行很大程度上的简化
  let flag = true
  while (count > 0 && flag) {
    flag = false
    for (let item in sets) {
      if (sets[item].data.size === 1) {
        flag = true
        count--
        let num = [...sets[item].data][0]
        board[sets[item].i][sets[item].j] = num
        updateSet(sets, sets[item].i, sets[item].j, num)
        delete sets[item]
      }
    }
  }
  return count
}
let clone = function(sets) {
  let s = {}
  for(let item in sets) {
    s[item] = {
      data: new Set([...sets[item].data]),
      i: sets[item].i,
      j: sets[item].j
    }
  }
  return s
}
let simplifyClone = function(sets) {
  let flag = true
  while (flag) {
    flag = false
    for (let item in sets) {
      if (sets[item].data.size === 1) {
        flag = true
        let num = [...sets[item].data][0]
        updateSet(sets, sets[item].i, sets[item].j, num)
        sets[item].str = num
      }
    }
  }
}
let checkValid = function(sets) {
  for(let item in sets) {
    if(!sets[item].str&&sets[item].data.size === 0) {
      return false
    }
  }
  return true
}
let branch = function(sets) {
  for (let item in sets) {
    if (sets[item].data.size === 2) {
      let data = [...sets[item].data]
      for(let i of data) {
        let s = clone(sets)
        updateSet(s, sets[item].i, sets[item].j, i)
        simplifyClone(s)
        if(checkValid(s)) {
          return s
        }
      }
    }
  }
}
let print = function(board) {
  // 打印输出，用于调试
  for (let i = 0; i < 9; i++) {
    let l = ''
    for (let j = 0; j < 9; j++) {
      let num = board[i][j]
      if (typeof num != 'string') {
        l += [...num].join('-') + ','
      } else {
        l += num + '  ,  '
      }
    }
    console.log(l)
  }
}
var dealBranch = function(board, count, sets) {
  // 利用size为1的集合，能进行很大程度上的简化
  let flag = true
  while (count > 0 && flag) {
    flag = false
    for (let item in sets) {
      if (sets[item].str) {
        flag = true
        count--
        board[sets[item].i][sets[item].j] = sets[item].str
        delete sets[item]
      }
    }
  }
  return count
}
var solveSudoku = function(board) {
  // 分析已占用数据
  let data = {}
  for (let i = 0; i < 9; i++) {
    let str1 = 'row' + i
    data[str1] = new Set()
    for (let j = 0; j < 9; j++) {
      let str2 = 'col' + j
      if (i === 0) {
        data[str2] = new Set()
      }
      let str3 = 'blo' + (Math.floor(i / 3) * 3 + Math.floor(j / 3))
      if (i % 3 === 0 && j % 3 === 0) {
        data[str3] = new Set()
      }
      let num = board[i][j]
      if (num === '.') continue
      data[str1].add(num)
      data[str2].add(num)
      data[str3].add(num)
    }
  }
  // 在每个待定位上创建集合，指明可能值
  let a = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  let count = 0
  let sets = {}
  for (let i = 0; i < 9; i++) {
    let str1 = 'row' + i
    for (let j = 0; j < 9; j++) {
      let str2 = 'col' + j
      let str3 = 'blo' + (Math.floor(i / 3) * 3 + Math.floor(j / 3))
      let num = board[i][j]
      if (num === '.') {
        let occupied = [...data[str1], ...data[str2], ...data[str3]]
        sets[i + '-' + j] = {
          data: new Set(a.filter(x => !occupied.includes(x))),
          i: i,
          j: j,
        }
        count++
      }
    }
  }
  count = simplify(board, count, sets)
    sets = branch(sets)
    count = dealBranch(board, count, sets)
    print(board)
    console.log(sets)
  return board
}
solveSudoku([
  ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
  ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
  ['.', '.', '7', '.', '.', '.', '2', '4', '.'],
  ['.', '6', '4', '.', '1', '.', '5', '9', '.'],
  ['.', '9', '8', '.', '.', '.', '3', '.', '.'],
  ['.', '.', '.', '8', '.', '3', '.', '2', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '2', '7', '5', '9', '.', '.'],
])
