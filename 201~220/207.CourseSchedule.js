/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
{
  let canFinish = function(numCourses, prerequisites) {
    // 这应该是一个拓扑排序问题
    // 不过我这个方法跑了5000+ms（捂脸
    let visitedCourses = new Set()
    let edges = new Set(prerequisites)
    let tag = true
    while (visitedCourses.size < numCourses && tag) {
      tag = false
      outer: for (let j = 0; j < numCourses; j++) {
        if (visitedCourses.has(j)) continue
        for (let i of edges.values()) {
          if (i[1] === j) continue outer
        }
        tag = true
        visitedCourses.add(j)
        for (let i of edges.values()) {
          if (i[0] === j) edges.delete(i)
        }
      }
    }
    return tag
  }
}
{
  // 这个解法通过创建临接矩阵，将时间复杂度优化到O(n^2)
  let helper = function(n, record, adj) {
    if (record[n] == 1) return false
    if (record[n] == 2) return true
    let oneList = adj[n]
    // 1表示冲突，所以要返回false
    record[n] = 1
    let flag = true
    for (let i = 0; i < oneList.length; i++) {
      if (!helper(oneList[i], record, adj)) {
        flag = false
        break
      }
    }
    record[n] = 2
    return flag
  }
  let canFinish = function(numCourses, prerequisites) {
    let adj = new Array(numCourses)
    let record = new Array(numCourses)
    record.fill(0)

    for (let i = 0; i < numCourses; i++) {
      adj[i] = []
    }

    // 根据prerequisites创建临接矩阵
    for (let i = 0; i < prerequisites.length; i++) {
      let oneList = adj[prerequisites[i][0]]
      oneList[oneList.length] = prerequisites[i][1]
    }

    for (let i = 0; i < record.length; i++) {
      if (!helper(i, record, adj)) {
        return false
      }
    }
    return true
  }
}
