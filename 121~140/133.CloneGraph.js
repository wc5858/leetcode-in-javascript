/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function (graph) {
  if (graph === null) return null
  let map = new Map()
  let stack = [graph]
  let g = new UndirectedGraphNode(graph.label)
  map.set(graph.label, g)
  while (stack.length > 0) {
    let cur = stack.pop()
    let neighbors = map.get(cur.label).neighbors
    cur.neighbors.forEach(item => {
      if (map.has(item.label)) {
        neighbors.push(map.get(item.label))
      } else {
        let g = new UndirectedGraphNode(item.label)
        map.set(item.label, g)
        stack.push(item)
        neighbors.push(g)
      }
    })
  }
  return g
};