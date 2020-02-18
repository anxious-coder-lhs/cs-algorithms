// Problem: Given an array of positive integers and a target integer, find the minimum contiguous subarray
// whose sum is greater than or equal to the integer passed.

// Input...
// Array of positive integers of 0 or more length
// A target positive integer
// not sorted

// Output...
// minimal length or else 0


// Naive Solution
// O(n) for all the possible pair lengths, leading to total O(n^2)
function minimumSubarrayLength(array, target) {
// Finding all the possible pairs of numbers starting from length 1 and more.
// C(n, 1) + C(n, 2) + C(n, 3) + C(n, 4) ..... + C(n, n)
// Make a helper function to create all the pairs, whose sum is greater, starting with the lowest pair, exit when done.
    for (let i=1;i<=array.length;i++) {
        if (minimumSubarrayLengthHelper(array, target, i)) {
            return i
        }
    }

    return 0
}


// O(n) runtime, O(1) space
function minimumSubarrayLengthHelper(array, target, pairLength) {
// Find out all the pairs of the given pair length
// Match the sum, if the sum is matching return true else false.
// Use a sliding window to create pairs of the given pair length and moving over.

   let sum = array.slice(0, pairLength).reduce((sum, elem) => sum + elem, 0)
   if (sum >= target)
    return true
   for (let start = 0, end = pairLength - 1; end < array.length - 1;end++, start++) {
       sum = (sum - array[start]) + array[end + 1]
       if (sum  >= target)
        return true
   }

   return false
}

clear()
console.log(minimumSubarrayLength([], 2))
console.log(minimumSubarrayLength([1, 3], 2))
console.log(minimumSubarrayLength([1, 3, 4, 5, 11], 10))
console.log(minimumSubarrayLength([1, 3, 4, 5, 9], 10))
console.log(minimumSubarrayLength([1, 3, 4, 5, 4], 10))


function minimumSubarrayLength1(array, target) {
// Can use multiple pointers or a sort of sliding window to figure out the answer.
// The window can be used to figure out the sum to match the condition.
// At each step if the window is not enough, we can expand the window to include additional elements
// If the sum is enough, we can squeeze the window.
// With each success, we can take a stab at the count to find the best solution.
    
    let start = 0, end = 0
    let sum = array[0]
    let maxCount = Infinity
    let done = false
    while(!done) {
        if (sum >= target) {
            maxCount = Math.min(end - start + 1, maxCount)
            sum -= array[start]
            start++
        } else if (end < array.length) {
            end++
            sum += array[end]
        } else {
            done = true
        }
    }

    return maxCount === Infinity ? 0 : maxCount
}


console.log("------")
console.log(minimumSubarrayLength1([], 2))
console.log(minimumSubarrayLength1([1, 3], 2))
console.log(minimumSubarrayLength1([1, 3, 4, 5, 11], 10))
console.log(minimumSubarrayLength1([1, 3, 4, 5, 9], 10))
console.log(minimumSubarrayLength1([1, 3, 4, 5, 4], 10))
