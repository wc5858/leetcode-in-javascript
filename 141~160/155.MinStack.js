class MinStack {
  constructor() {
    this.stack = []
    // 这个min的栈能使getMin达到O(1)
    this.min = []
  }

  push(x) {
    const preMin = this.min.length === 0 ? x : this.min[this.min.length - 1]
    const currentMin = preMin < x ? preMin : x

    this.stack.push(x)
    this.min.push(currentMin)
  }

  pop() {
    this.stack.pop()
    this.min.pop()
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  getMin() {
    return this.min[this.min.length - 1]
  }
}
