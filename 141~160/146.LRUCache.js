/**
 * @param {number} capacity
 */
// 最佳性能的方案是哈希表+双向链表
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = {}
    this.head = null
    this.tail = null
    this.size = 0
  }

  get(key) {
    let node = this.map[key]
    if (!node) return -1
    this._addHead(node)
    return node.value
  }

  put(key, value) {
    let node = this.map[key]
    if (!node) {
      this.size++

      if (this.size > this.capacity) {
        this._removeTail()
        this.size--
      }

      node = new Node(key, value)
      this.map[key] = node
    } else {
      node.value = value
    }

    this._addHead(node)
  }

  _addHead(node) {
    // 把node从原来的位置取出来，放到最前面
    if (node === this.head) return

    if (!this.head && !this.tail) {
      this.head = this.tail = node
      return
    }

    if (node === this.tail) {
      this.tail = node.prev
      this.tail.next = null
    }

    if (node.prev && node.next) {
      node.prev.next = node.next
      node.next.prev = node.prev
    }

    node.next = this.head
    this.head.prev = node
    this.head = node
    return node
  }

  _removeTail() {
    const prev = this.tail.prev
    delete this.map[this.tail.key]
    if (prev) {
      prev.next = null
    }
    this.tail = prev
  }
}

class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }

  remove() {
    if (this.prev) {
      this.prev.next = this.next
    }
    if (this.next) {
      this.next.prev = this.prev
    }
    this.next = null
    this.prev = null
  }
}

let aLRUCache = new LRUCache(3)
let data1 = [
  'put',
  'put',
  'put',
  'put',
  'get',
  'get',
  'get',
  'get',
  'put',
  'get',
  'get',
  'get',
  'get',
  'get',
]
let data2 = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [4],
  [3],
  [2],
  [1],
  [5, 5],
  [1],
  [2],
  [3],
  [4],
  [5],
]
let ans = []
for (let i = 0; i < data1.length; i++) {
  if (data1[i] === 'put') {
    ans.push(aLRUCache.put(...data2[i]) || null)
  } else {
    ans.push(aLRUCache.get(...data2[i]) || null)
  }
}
console.log(ans)
console.log([null, null, null, null, 4, 3, 2, -1, null, -1, 2, 3, -1, 5])

{
  // 还有一种黑科技利用了js本身的特性
  // keys返回了一个迭代器，且是按插入顺序排列的
  class LRUCache {
    constructor(capacity) {
      this.capacity = capacity
      this.map = new Map()
    }

    get(key) {
      let val = this.map.get(key)
      if (typeof val === 'undefined') {
        return -1
      }
      this.map.delete(key)
      this.map.set(key, val)
      return val
    }

    put(key, value) {
      if (this.map.has(key)) {
        this.map.delete(key)
      }
      this.map.set(key, value)
      let keys = this.map.keys()
      if (this.map.size > this.capacity) {
        this.map.delete(keys.next().value)
      }
    }
  }
}
