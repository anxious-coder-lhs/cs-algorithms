"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Set the value of HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}

// Reversing a linked list using an iteration is pretty simple.
// Leverages a single scan tracking multiple pointers approach (last, current, next)
// At each iteration, keeps updating the pointer from last to current and replace it to current to last.
// Next pointer helps with the traversal without loosing the index.
function reverse(list) {
  let current = list.getHead()
  let last = null
  while(current !== null) {
    const next = current.nextElement
    current.nextElement = last
    last = current
    current = next
  }

  this.head = last
}
