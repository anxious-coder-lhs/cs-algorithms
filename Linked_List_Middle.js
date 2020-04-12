// You have to implement the findMid() function, which will take a linked list as an input and return the middle node. 
// If the length of the list is even, the middle value will occur at length2\dfrac{length}{2}​2​​length​​. 
// For a list of odd length, the middle value will be length2+1\dfrac{length}{2}+1​2​​length​​+1.

// Using multiple traversal using double loops to find out the middle element.
// O(n) runtime and O(1) space.

function findMid(list) {
  let length = 0
  let current = list.getHead()
  while(current !== null) {
    length++
    current = current.nextElement
  }

  const mid = (length % 2 === 0) ? length/2 : Math.floor(length/2) + 1
  current = list.getHead()
  for (let i=1;i<mid;i++) {
    current = current.nextElement
  }
  return current;
}

// This approach uses multiple pointers to traverse the array - 1st pointer and a 2nd pointer.
// At each step of 1st pointer, if the 2nd pointer moves 2 steps, 1st pointer will always point at the middle of 
// zero to 2nd pointer.
// O(n) runtime and O(1) space
function findMid(list) {

  if (list.isEmpty() || list.getHead().nextElement === null) {
    return null
  }

  let middle = list.getHead()
  let current = list.getHead().nextElement
  while(current !== null && current.nextElement !== null) {
    middle = middle.nextElement
    current = current.nextElement
    if (current.nextElement !== null) {
      current = current.nextElement
    }
  }

  return middle
}
