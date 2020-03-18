/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: An integer array with 0 or more elements.
// Outout: Minimum Continuous subarray length
// Condition: If subarray is sorted, then the entire array would be sorted.

// O(n log n) run-time, O(1) space time
var findUnsortedSubarray = function(nums) {
    
    // Brute force solution:
    // Find all the possible pairs of indexes that can make a subarry.
    // Since we are looking for the shortest subarray as the result, we should expand the brute force array such that we increase the length of it.
    // For each shortest subarray, sort the subarray and check if the entire array is now sorted.
    
    if (nums.length <= 1 || isSorted(nums)) {
        return 0
    }
    
    for (let windowSize=2;windowSize<=nums.length;windowSize++) {
        for (let leftIdx=0;leftIdx<=nums.length - windowSize;leftIdx++) {
            const sortedSubarray = nums.slice(leftIdx, leftIdx + windowSize).sort((a, b) => a-b)
            const sortedArray = nums.slice(0, leftIdx).concat(sortedSubarray.concat(nums.slice(leftIdx + windowSize)))
            // console.log(sortedArray)
            if (isSorted(sortedArray)) {
                return windowSize
            }
        }    
    }
};

function isSorted(nums) {
    let last = -Infinity
    for (const num of nums) {
        if (num < last) return false
        last = num
    }
    
    return true
}
