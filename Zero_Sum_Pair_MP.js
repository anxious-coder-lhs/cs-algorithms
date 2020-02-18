// Input...
// Array with zero or more length
// Sorted array (in order)
// Output...
// Pair of numbers if exists.
// only the 1st one.
// undefined if no exists.


// Naive Implementation
// O(n^2) - C(n, 2) choice to make
function zeroSumPair1(array) {
    if (!array)
        return undefined

// Brute force
// Figure out every pair of the array and sum to see the sum.
// loop through twice.
    for (let i=0;i<array.length;i++) {
        for (let j=i+1;j<array.length;j++) {
            const sum = array[i] + array[j]
            if (sum === 0)
                return [i, j]
        }
    }

    return undefined
}

console.log(zeroSumPair1(undefined))
console.log(zeroSumPair1([]))
console.log(zeroSumPair1([-1, 0, 1, 2, 3]))
console.log(zeroSumPair1([-1, 0, 2, 4]))


function zeroSumPair2(array) {
// Leverage the sorted propery of array
// Use multiple pointers for the sum game.
// Iterate with 2 pointers, 1st starting from the beginning and 2nd starting from last.
// Move each pointers calculating the sum.
// Increment a pointer based on the sorted order of the sum.

    if (!array)
        return undefined

    let start = 0, end = array.length - 1
    while(start < end) {
        const sum = array[start] + array[end]
        if (sum === 0)
            return [start, end]
        else if (sum > 0)
            end -= 1
        else
            start += 1
    }
    
    return undefined
}

console.log(zeroSumPair2(undefined))
console.log(zeroSumPair2([]))
console.log(zeroSumPair2([0]))
console.log(zeroSumPair2([1]))
console.log(zeroSumPair2([-1, 0, 1, 2, 3]))
console.log(zeroSumPair2([-1, 0, 2, 4]))
