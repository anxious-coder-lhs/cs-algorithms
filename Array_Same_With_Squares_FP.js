// Input arrays of numbers (negative/positive) and can have 0 elements.
// Check if the 2nd array has the same elements as in the 1st with numbers squared. Same numbers and frequency
// Output boolean (true if arrays are same) false otherwise
function matchArraysSquared(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length)
        return false

    const map = arrayOne.reduce((result, elem) => {
        const squared = elem * elem
        result[squared] = (result[squared] || 0) + 1
        return result
    }, {})

    for (let elem of arrayTwo) {
        if (map[elem] > 0)
            map[elem]--
        else
            return false
    }

    return true
    // Start with an empty map and add all the elements of arrayOne with every number squared.
    // For each element in 2nd, see if the element exist in 1st and decrease frequence.
    // Return true if the entire match is done.
}


// Input arrays of numbers (negative/positive) and can have 0 elements.
// Check if the 2nd array has the same elements as in the 1st with numbers squared. Same numbers and frequency
// Output boolean (true if arrays are same) false otherwise
function matchArraysSquaredBF(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length)
        return false

    for (let elem of arrayOne) {
        const squared = elem * elem
        const foundIdx = arrayTwo.indexOf(squared)
        if (foundIdx === -1)
            return false

        arrayTwo.splice(foundIdx, 1)
    }

    return true
    // Start with an empty map and add all the elements of arrayOne with every number squared.
    // For each element in 2nd, see if the element exist in 1st and decrease frequence.
    // Return true if the entire match is done.
}

