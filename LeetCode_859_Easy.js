// Problems: Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

// Input: Two strings of any length of size 0 or more.
// Strins of lower case letters and hence can fit into ascii range to an array/.
// Output: true if with a swap strings became same, or else no.
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
// Intuition: Removing the noise and reducing the problem using a linear scan and using frequency pattern.
// If 3 or more elments are different, there is no way one swap can make them same.
// If there are exactly 2 elements different, we can have the solution only if.
    // The two position elements can be replaced.
// If 0 elements diff, we can have solution only if.
    // There is a repeatition of one or more elements.
    
    if (A.length !== B.length)
        return false

    // Counting difference counts and adding the difference maps.
    const elemCount=Array.from({length: 26}, () => 0)
    let repititions = 0
    const diff = []
    for (let i=0;i<A.length;i++) {
        if (A[i] !== B[i]) {
            diff.push(i)
        } else {
            const code = A.charCodeAt(i) - 97
            if (elemCount[code] > 0) repititions++
            elemCount[code]++
        }
    }
    
    // special check for cases where the string matches exactly but has repeat elements to be swapped individually without making a string change.
    if (diff.length === 0 && repititions >= 1) return true
    
    // base conditions of difference map, can be optimized by short circuiting for loop.
    if (diff.length !== 2)
        return false
    
    // checking if the differences can be swapped for the matching strings.
    return A[diff[0]] === B[diff[1]] && A[diff[1]] === B[diff[0]]
};
