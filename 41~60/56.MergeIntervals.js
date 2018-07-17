/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
let merge = function(intervals) {
  intervals.sort((a, b) => a.start - b.start || a.end - b.end)
  let i = 0
  while (i < intervals.length - 1) {
    if (intervals[i].start === intervals[i + 1].start) {
      intervals.splice(i, 1)
    } else if (intervals[i].end >= intervals[i + 1].start) {
      if (intervals[i].end >= intervals[i + 1].end) {
        intervals.splice(i + 1, 1)
      } else {
        intervals[i + 1].start = intervals[i].start
        intervals.splice(i, 1)
      }
    } else {
      i++
    }
  }
  return intervals
};
