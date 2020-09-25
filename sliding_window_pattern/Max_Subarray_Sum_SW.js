// Problem: Finding maximum sum of a subarray of a length k from an array of length n.

// Input....
// Array - positive/negative numbers, unsorted, undefined, empty.
// Target number - number of sequential elements.

// Output...
// A single sum for the given sequence.
// 0 on edge cases.


// Naive Solution
function maxSubArraySum(array, target) {

    if (!array || array.length < target)
        return 0

    let max = -Infinity
    
    for (let i=0;i<=array.length - target;i++) {
        let sum = 0
        for (let j=i;j<=i+target-1;j++) {
            sum += array[j]
        }

        max = Math.max(sum, max)
    }

    return max
// Loop for all the elements
//     Sub-loop for the next "target" elements
//     Compare the sum with the max till now.

// return the max.
}

clear()
console.log(maxSubArraySum(undefined))
console.log(maxSubArraySum([], 4))
console.log(maxSubArraySum([1, 2, 3], 4))
console.log(maxSubArraySum([1, 2, 3, 4, 5, 6], 4))
console.log(maxSubArraySum([1, 2, 3, 4, 1, 1], 4))

function maxSubArraySum1(array, target) {

    if (!array || array.length < target)
        return 0

//     Define two pointers for sliding window - start, end with size as target
    let start = 0, end = target - 1
    let sum = array.slice(0, target).reduce((sum, elem) => sum + elem, 0)

//     Loop through all the elements of the array terminate when the end is at the border.
    let max = sum
    while(end < array.length - 1) {
//         console.log(start, end, sum, max)
        end++
        sum = (sum - array[start]) + array[end]
        start++
        max = Math.max(sum, max)
    }

    return max
//          At each pointer, deduct the last start, and add the new end of the sliding windows.
//          update the max sum at each step.

//      return result
}

console.log("=====")
console.log(maxSubArraySum1(undefined))
console.log(maxSubArraySum1([], 4))
console.log(maxSubArraySum1([1, 2, 3], 4))
console.log(maxSubArraySum1([1, 2, 3, 4, 5, 6], 4))
console.log(maxSubArraySum1([1, 2, 3, 4, 1, 1], 4))
