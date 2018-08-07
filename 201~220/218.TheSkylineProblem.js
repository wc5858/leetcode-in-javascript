/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
// 暴力破解法
// var getSkyline = function (buildings) {
//   if(buildings.length === 0) return []
//   let map = []
//   for (let i = 0; i < buildings.length; i++) {
//     for(let j = buildings[i][0];j<=buildings[i][1];j++) {
//       if(map[j]===undefined || map[j] < buildings[i][2]) {
//         map[j] = buildings[i][2]
//       }
//     }
//   }
//   let pre = 0
//   let ans = []
//   for (let i = buildings[0][0]; i < map.length; i++) {
//     if(map[i]===undefined) map[i] = 0
//     if(map[i]>pre) {
//       ans.push([i,map[i]])
//       pre = map[i]
//     } else if (map[i]<pre) {
//       ans.push([i-1,map[i]])
//       pre = map[i]
//     }
//   }
//   ans.push([buildings[buildings.length-1][1],0])
//   return ans
// };

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
// http://www.bowdoin.edu/~ltoma/teaching/cs231/fall13/Inclass-exercises/ex-divideandconquer-withSOLUTION.pdf
// 分治法解
var getSkyline1 = function (buildings) {
  //console.log('buildings=', buildings);
  if (buildings.length === 0) return [];
  if (buildings.length === 1) {
    // 解构赋值
    const [l, r, h] = buildings[0];
    let ret = [[l, h], [r, 0]];
    //console.log('buildings=', buildings, 'ret=', ret);
    return ret;
  }

  let m = buildings.length >>> 1;
  //console.log('m=',m);
  let a = getSkyline(buildings.slice(0, m));
  let b = getSkyline(buildings.slice(m));
  console.log('a,b=', a, b);
  let ret = [];
  let i = 0, j = 0;
  let h1 = 0, h2 = 0;
  while (i < a.length && j < b.length) {
    let x = 0, h = 0;
    let x1 = a[i][0], x2 = b[j][0];
    if (x1 < x2) {
      h1 = a[i][1];
      h = Math.max(h1, h2);
      ret.push([x1, h]);
      i++;
    } else if (x1 > x2) {
      h2 = b[j][1];
      h = Math.max(h1, h2);
      ret.push([x2, h]);
      j++;
    } else {
      h1 = a[i][1];
      h2 = b[j][1];
      h = Math.max(h, h1, h2);
      ret.push([x1, h]);
      i++; j++;
    }
  }
  while (i < a.length) {
    ret.push(a[i]);
    i++;
  }
  while (j < b.length) {
    ret.push(b[j]);
    j++;
  }
  //console.log('buildings=', buildings, 'ret=', ret);
  //console.log('ret=', ret);
  // remove dup
  let ret2 = [];
  for (let i = 0; i < ret.length; i++) {
    if (i > 0 && ret[i][1] === ret[i - 1][1])
      continue;
    ret2.push(ret[i]);
  }
  //console.log('ret2=', ret2);
  return ret2;
};

// https://news.ycombinator.com/item?id=8255332
// 这种方法看起来有点像我前面暴力破解的优化版
// https://www.youtube.com/watch?v=11dq8ux25oE 这里有个类似的方法
var getSkyline2 = function (buildings) {
  const events = [];
  buildings.forEach(function (x) {
    events.push([x[0], 'add', x[2]]); // [l,h]
    events.push([x[1], 'rem', x[2]]); // [r,h]
  });

  events.sort(function (x, y) {
    return x[0] - y[0];
  });
  //console.log('events=', events);

  const height_stack = [];
  const ret = events.map((e) => {
    const [x, cmd, y] = e;
    switch (cmd) {
      case "add":
        height_stack.push(y);
        return [x, Math.max(0, ...height_stack)];
      case "rem":
        height_stack.splice(height_stack.indexOf(y), 1);
        return [x, Math.max(0, ...height_stack)];
      default:
        throw new TypeError("No such command: " + cmd);
    }
  });
  //console.log('ret.1=', ret);
  // remove dup
  let ret2 = [];
  for (let i = 0; i < ret.length; i++) {
    if (i > 0 && ret[i][1] === ret[i - 1][1])
      continue;
    ret2.push(ret[i]);
  }

  return ret2;
};
// js中第一种方法的性能比较好，可能是求max比较费力
const getSkyline = true ? getSkyline1 : getSkyline2;
console.log(getSkyline([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]))