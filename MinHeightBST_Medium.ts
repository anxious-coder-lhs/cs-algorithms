// Given a sorted input array, need to construct a BST which has the minimum height.


// Since the in-order traversal of a binary tree is going to give us the sorted array
// We can recursively construct the tree using a binary search traversal.
//[1, 2, 5, 7, 10, 13, 14, 15, 22]
//
//							7
//				2					14
//	1					5	10			15
//								13				22

export function minHeightBst(array: number[]) {
  return minHeightBstHelper(array, 0, array.length - 1)
}

function minHeightBstHelper(array: number[], min: number, max: number) {
	if (max < min) {
		return null;
	}
	
	const pivot = Math.floor((min + max)/2)
	const tree = new BST(array[pivot])
	tree.left = minHeightBstHelper(array, min, pivot - 1)
	tree.right = minHeightBstHelper(array, pivot + 1, max)
	return tree
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

