// Given an array, can you re-arrange its elements in such a way that the negative elements appear at one 
// side and positive elements appear in the other? Solve this problem in JavaScript and see if your code runs correctly!

// This function also uses the multiple pointers approach to leverage the property of the sorted array in order
// to effeciently traverse the array and use the sorted property in 1 pass.
O(n) space and run-time
function reArrange(arr) {
  const newArray = arr.slice()
  let left = 0, right = arr.length - 1
  for (const num of arr) {
    if (num < 0) {
      newArray[left++] = num
    } else {
      newArray[right--] = num
    }
  }

  return newArray
}
