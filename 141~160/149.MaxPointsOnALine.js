/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
// 这题有点坑，而且还有最大安全整数的问题
// 下方这个解法不是最优解，也没有完美解决大整数问题，但是性能居然还不错
var maxPoints = function(points) {
  let len = points.length
  if (len < 3) return len
  let max = 2
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      let ans = 2
      let _x = points[j].x - points[i].x
      let _y = points[j].y - points[i].y
      if (points[j].x === points[i].x && points[j].y === points[i].y) {
        for (let k = j + 1; k < len; k++) {
          if (points[k].y === points[i].y && points[j].y === points[j].y) ans++
        }
      } else {
        for (let k = 0; k < len; k++) {
          if (k !== i && k !== j) {
            let dy = points[k].y - points[i].y
            let dx = points[k].x - points[i].x
            if (dy * _x === dx * _y && dy * _x < Number.MAX_SAFE_INTEGER) {
              ans++
            }
          }
        }
      }
      if (ans > max) max = ans
    }
  }
  return max
}
