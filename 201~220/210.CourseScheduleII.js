const addCourse = (order, course, requires) => {
  order.push(course)

  let requiredBy = requires.requiredBy[course]
  if (requiredBy) {
    let requiresCount = requires.requiresCount

    requiredBy.forEach(requiredByCourse => {
      if (--requiresCount[requiredByCourse] === 0) {
        addCourse(order, requiredByCourse, requires)
      }
    })
  }
}

const createRequires = prerequisites => {
  let requiredBy = [],
    requiresCount = []

  if (prerequisites) {
    prerequisites.forEach(prerequisite => {
      let course = prerequisite[0],
        courseRequires = prerequisite[1]

      let requiredByCourses = requiredBy[courseRequires]
      if (requiredByCourses) {
        requiredByCourses.push(course)
      } else {
        requiredBy[courseRequires] = [course]
      }

      requiresCount[course] = 1 + (requiresCount[course] || 0)
    })
  }

  return {
    requiredBy: requiredBy,
    requiresCount: requiresCount,
  }
}

/**
 * @param {number} courses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (courses, prerequisites) => {
  let order = [],
    requires = createRequires(prerequisites),
    requiresCount = requires.requiresCount

  for (let course = 0; course < courses; course++) {
    if (requiresCount[course] === undefined) {
      addCourse(order, course, requires)
    }
  }

  if (order.length !== courses) {
    order = []
  }

  return order
}
