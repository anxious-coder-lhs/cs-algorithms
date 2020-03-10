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
    // Use a window of 3 top most numbers.
    // Just like the insertion and selection sort, with each iteration - use the top 3 window to find the maximum number.
    // The max window should always be sorted.
    
    const maxWindow = [-Infinity, -Infinity, nums[0]]
    for (let i=1;i<nums.length;i++) {
        addToMaxWindow(nums[i], maxWindow)
    }

    return maxWindow[0] !== -Infinity ? maxWindow[0] : maxWindow[2]
};

function addToMaxWindow(num, window) {
    if (window[0] < num) {
        if (window[1] < num) {
            if (window[2] < num) {
                window[0] = window[1]
                window[1] = window[2]
                window[2] = num
            } else if (window[2] > num) {
                window[0] = window[1]
                window[1] = num
            }
        } else if (window[1] > num) {
            window[0] = num
        }
    }
}
