// Detecting a loop in the linked list.

"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}

// Simplest method is to use a flag within each node describing whether the node has been traversed earlier or not.
// If the node has not been traversed earlier, the flag would not be set.
// O(n) runtime and O(1) space complexity.
// However, linked list has to be immutable.
function detectLoop(list) {
  let cycle = null; //Set to true or false
  //Write your code here
  let current = list.getHead()
  while(current !== null) {
    if (current.isTraversed) {
      return true
    }

    current.isTraversed = true
    current = current.nextElement
  }

  return false;
}

"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}

// Uses an algorithm with 2 pointers. The idea is that if the 2 pointers run at different speeds and if there exists
// loops in the list, then the 2 pointers will overlap at some point. One possible choice of the movement is to use
// 1 step for the pointer 1 and 2 steps for pointer 2.
function detectLoop(list) {
  let pointer1 = list.getHead()
  let pointer2 = list.getHead()
  while(pointer1 !== null && pointer2 !== null && pointer2.nextElement !== null) {
    pointer1 = pointer1.nextElement
    pointer2 = pointer2.nextElement.nextElement

    if (pointer1 == pointer2) {
      return true
    }
  }

  return false
}
