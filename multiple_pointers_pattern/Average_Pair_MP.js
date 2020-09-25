// Problem: Given a sorted array of integers and a target number, we need to find a pair of integers from the 
// array whose average is equal to the target number.
// Could have more than 1 pair.

// Input...
// Array of integers - pos/neg
// Sorted Array
// undefined, empty

// Output...
// true if exists false otherwisse


// O(n ^ 2)
function hasAverageSumPair(array, target) {

    if (!array)
        return false


    for (let i=0;i<array.length - 1;i++) {
        for (let j=i+1;j<array.length; j++) {
            const average = (array[i] + array[j])/2
            if (average === target)
                return true
        }
    }

    return false
// Naive solution - find out all the pairs C(n, 2)
// Loop for all the elements.
//  Sub loop for making all the pairs.
//      Keep making the average if it matches return success.
}

clear()
console.log(hasAverageSumPair(undefined, 1))
console.log(hasAverageSumPair([], 1))
console.log(hasAverageSumPair([1, 2], 1))
console.log(hasAverageSumPair([1, 2], 1.5))
console.log(hasAverageSumPair([1, 2, 2], 2))



// O(n) using the multiple pointer approach
function hasAverageSumPair1(array, target) {
// Use 2 pointer approach to leverage the sorted property.
// start with a left pointer to 0, an end pointer to the length
// Keep on making the average and compare.
// Based on the average and target, navigate left or right.


    if (!array || array.length <= 1)
        return false

    let left = 0, right = array.length - 1
    while(left < right) {
        const average = (array[left] + array[right])/2
        if (average === target)
            return true
        else if (average < target)
            left++
        else
            right--
    }

    return false
}

console.log("====")
console.log(hasAverageSumPair1(undefined, 1))
console.log(hasAverageSumPair1([], 1))
console.log(hasAverageSumPair1([1, 2], 1))
console.log(hasAverageSumPair1([1, 2], 1.5))
console.log(hasAverageSumPair1([1, 2, 2], 2))
