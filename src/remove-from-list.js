const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k/* l, k */) {
  
  while (l.value === k) {
    l = l.next;
  }
  let virtualHead = l;
  
  // while (virtualHead!== null) {
  //   if ((virtualHead.next) && (virtualHead.next.value === k)){
  //     if(virtualHead.next.next){
  //       virtualHead.next = virtualHead.next.next;
  //       virtualHead = virtualHead.next;
  //     } else {
  //       virtualHead.next = null;
  //     }
  //   } else {
  //     virtualHead = virtualHead.next;
  //   }
  // }
  while (virtualHead!== null) {
    if ((virtualHead.next) && (virtualHead.next.value === k)){
      if(virtualHead.next.next){
        let virtualHead1 = virtualHead;
        virtualHead = virtualHead.next;
        while (virtualHead.value===k) {
          virtualHead = virtualHead.next;
        }
        virtualHead1.next = virtualHead;
      } else {
        virtualHead.next = null;
      }
    } else {
      virtualHead = virtualHead.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
