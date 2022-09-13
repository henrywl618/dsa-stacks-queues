/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);

    if(this.first){
      newNode.next = this.first;
      this.first = newNode;
      this.size++;
    }else{
      this.first = newNode;
      this.last = newNode;
      this.size++;
    }
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if(this.size === 0){
      throw new Error("This is an empty stack!")
    } else{
      const removedNode = this.first;
      if(this.size === 1){
        this.first = null;
        this.last = null;
        this.size--;
        return removedNode.val;
      }else {
        this.first = removedNode.next;
        removedNode.next = null;
        this.size--;
        return removedNode.val;
      }
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first ? this.first.val : null;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Stack;