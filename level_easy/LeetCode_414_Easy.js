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

//     console.log(maxWindow)
    return maxWindow[0] !== -Infinity ? maxWindow[0] : maxWindow[2]
};

function addToMaxWindow(num, maxWindow) {
    console.log(num, maxWindow)
    let i=0
    while(num >= maxWindow[i]) i++
    if (num === maxWindow[i-1]) return
    for (let j=0;j<i-1;j++) {
        maxWindow[j] = maxWindow[j+1]
    }
    maxWindow[i-1] = num
}
