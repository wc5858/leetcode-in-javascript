/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
// beat 99%
// 不过测试用例中intervals长度比较小，用binary search比较冗余；
// 如果intervals中数据量较大，则可考虑用binary search改进查找部分的算法
var insert = function(intervals, newInterval) {
  let len = intervals.length

  let i = 0
  // 查找newInterval.start的位置
  while (i < len && intervals[i].start <= newInterval.start) {
    i++
  }
  // 确定其是在区间内还是在区间间隔中
  let iIn = i !== 0 && newInterval.start <= intervals[i - 1].end
  // 处理末尾的特殊情况
  if (i === len && !iIn) {
    intervals.push(newInterval)
    return intervals
  }

  // newInterval.end同理
  let j = i
  while (j < len && intervals[j].start <= newInterval.end) {
    j++
  }
  let jIn = j !== 0 && newInterval.end <= intervals[j - 1].end
  if (j === 0 && !jIn) {
    intervals.unshift(newInterval)
    return intervals
  }

  // 构造要插入的区间，并确定插入位置
  if (iIn) {
    i--
    newInterval.start = intervals[i].start
  }
  if (jIn) {
    j--
    newInterval.end = intervals[j].end
  }
  intervals.splice(i, j - i + (jIn ? 1 : 0), newInterval)

  return intervals
}

// 辅助代码，方便本地测试
{
  let trans = pair => ({ start: pair[0], end: pair[1] })
  let localInsert = (intervals, newInterval) =>
    insert(intervals.map(trans), trans(newInterval))
  console.log(localInsert([[1, 5]], [0, 0]))
}
