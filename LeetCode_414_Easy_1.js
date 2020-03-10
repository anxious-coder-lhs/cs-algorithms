/**
 * @param {number[]} nums
 * @return {number}
 */
// Problem: Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

// Input: Non-Empty arrays of integers, can have 1 or more elements and can have duplicates.
// Output: 3rd maximum number if exists.
// If does not exists then the best available should be returned.
// If the duplicate exists for a number, that should not count as individual best
var thirdMax = function(nums) {

    // Using a sliding window approach. with each iteration the lowest element from the 
    // window is deleted, so that we have a set of the top 3.
    
    const maxSet = new Set()
    for (const num of nums) {
        maxSet.add(num)
        if (maxSet.size > 3) {
            const min = Math.min(...maxSet)
            maxSet.delete(min)
        }
    }

    return maxSet.size === 3 ? Math.min(...maxSet) : Math.max(...maxSet)
};
