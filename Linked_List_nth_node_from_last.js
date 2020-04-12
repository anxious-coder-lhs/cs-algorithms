// In the findNth function, a certain N is specified as an argument. You simply need to return the node, which is N spaces away from the end of the linked list.

//Function to find the nth node from the end of a Linked List
// O(n) runtime and O(1) space.
// This algorithm uses multiple pointers approach with one pointer ahead of other pointer by n items.
function findNth(list, n) {
  if(list.isEmpty()) {
    return null
  }

  let first = list.getHead()
  for (let i=0;i<n;i++) {
    first = first.nextElement
    if (first === null) {
      return null
    }
  }

  let second = list.getHead()
  while(first !== null) {
    second = second.nextElement
    first = first.nextElement
  }

  return second
}
