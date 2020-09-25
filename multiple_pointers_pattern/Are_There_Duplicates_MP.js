// Problem: Finding if the variable arguments (array) has any duplicates in it.

// Input...
// Variable arguments - essentially an array
// Numbers/string
// 0 or more arguments - length of array
// there is no order


// Output...
// true if there are else false.


// O(n) spacce and run
function hasDuplicates(...args) {
//     Loop through each element.
// Add the element to a frequency counter.
// break and return if already exists.

    const frequencyMap = {}
    for (let elem of args) {
        if(frequencyMap[elem]) {
            return true
        } else {
            frequencyMap[elem] = true
        }
    }

    return false
}

clear()
console.log(hasDuplicates(1, 2, 3, 4))
console.log(hasDuplicates(1, 2, 3, 4, 1))
console.log(hasDuplicates())
console.log(hasDuplicates(1, 1, 1))


// O(n log n) rutnime, O(1) space.
function hasDuplicates1(...args) {
// Sort the array.
// Iterate through the array, if we have consequitive elements as same, return false.
    const sorted = args.slice().sort()
    for(let i=1;i<sorted.length;i++) {
        if (sorted[i] === sorted[i-1]) {
            return true
        }
    }

    return false
}

console.log("===")
console.log(hasDuplicates1(1, 4, 1, 2))
console.log(hasDuplicates1(1, 2, 3, 4, 1))
console.log(hasDuplicates1())
console.log(hasDuplicates1(1, 1, 1))
