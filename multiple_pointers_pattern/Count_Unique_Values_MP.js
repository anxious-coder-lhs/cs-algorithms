// Input...
// Array - undefined, of any size
// Positive or Negative numbers
// Sorted -> most impor

// Output...
// Unique values
// Count, not items.


// O(n) runtime and O(1) space
function uniqueCounter(array) {

    if (!array || array.length === 0)
        return 0

// Frequency counter is of no use, because the elements are sorteed.
// Keep moving the pointers, only changing the count once we have a new item.
    let count = 1

//     Create 2 pointers, side by side of each other.
// Iterate over the array for each pointer till we reach end of it.
//      Move the 2nd pointer to each location.
//      1st pointer to be moved only when we have a new item.
    
    for (let uniquePointer = 0, iterPointer = 0; iterPointer < array.length; iterPointer++) {
        if(array[iterPointer] !== array[uniquePointer]) {
            count++
            uniquePointer = iterPointer
        }
    }

    return count
}

clear()
console.log(uniqueCounter())
console.log(uniqueCounter([]))
console.log(uniqueCounter([1]))
console.log(uniqueCounter([1, 1]))
console.log(uniqueCounter([1, 1, 2, 2, 3]))


function uniqueCounter1(array) {
//     Do inplace mutation.
// Create a pointer to iterate throught the entire array
//      for each element if there is a unique position, move the counter array and do inaplace mutation for next comparson

    if (!array || array.length === 0)
        return 0

    for (let counterPointer = 0, iterPointer = 0; iterPointer < array.length; iterPointer++) {
        if (array[iterPointer] !== array[counterPointer]) {
            counterPointer++
            array[counterPointer] = array[iterPointer]
        }
    }

    return countterPointer + 1
}


console.log("=======")
console.log(uniqueCounter1())
console.log(uniqueCounter1([]))
console.log(uniqueCounter1([1]))
console.log(uniqueCounter1([1, 1]))
console.log(uniqueCounter([1, 1, 2, 2, 3]))
