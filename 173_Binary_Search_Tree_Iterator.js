class Iterator {
  constructor(root) {
    this.stack = [[root, 0]];
  }

  hasNext() {
    return this.stack.length !== 0;
  }

  next() {
    let returnedVal;

    // While the top of the stack has visited !== 1
    while (this.stack.length !== 0 && this.stack[this.stack.length - 1][1] !== 1) {
      let [node, visited] = this.stack.pop();
      if (node === null) {
        // Ignore null nodes.
        continue;
      } else if (visited === 0) {
        // Haven't visited left yet.
        this.stack.push([node, visited + 1]);
        this.stack.push([node.left, 0]);
      } else if (visited === 1) {
        // Already visited left.
        // If returnedVal is defined, that means we're doing cleaning up.
        if (returnedVal !== undefined) {
          break;
        }
        // Otherwise, set returnedVal to node (meaning we found the "next" node),
        // but we still got to perform clean up: visit the right.
        returnedVal = node;
        this.stack.push([node, visited + 1]);
        this.stack.push([node.right, 0]);
      } else {
        // Visited both left AND right.
        continue;
      }
    }

    // This value is undefined if hasNext() is false.
    return returnedVal;
  }
}
