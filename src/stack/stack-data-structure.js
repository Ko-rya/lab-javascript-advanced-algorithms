class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
    this.MIN_SIZE = 0;
  }

  canPush() {
    if (this.stackControl.length < this.MAX_SIZE)
      return true
      else return false
  }

  isEmpty() {
    if (this.stackControl.length === this.MIN_SIZE)
    return true
    else return false
  }

  push(item) {
    if (this.canPush() === true){
    this.stackControl.push(item)
    return this.stackControl  
  }
    else throw new Error('STACK_OVERFLOW');
  }

  pop() {
    if (this.isEmpty() === false){
      let removedElement = this.stackControl.pop()
      return removedElement
    }
      else throw new Error('STACK_UNDERFLOW');
  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
