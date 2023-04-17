const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.memory = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    // if(this.memory){
    //   let last = this.memory;
    //   while (true) {
    //     // last = this.memory.next;
    //     // console.log(last);
    //     if(!last.next){
    //       return last;
    //     } else {
    //       last = last.next;
    //     }
    //   }
    // }
    return this.memory
  }

  enqueue(value/* value */) {
    const element = new ListNode(value)
    if (!this.memory){
      this.memory = element;
    } else {
      let last = this.memory;
      while (true) {
        if(!last.next){
          last.next = element;
          break
        } else {
          last = last.next;
        }
      }
    }
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    // element.next = element;
    // this.memory
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    const value = this.memory.value; 
    this.memory = this.memory.next;
    return value

  }
}

module.exports = {
  Queue
};
