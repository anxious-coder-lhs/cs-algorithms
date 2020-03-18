/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: An integer array with 0 or more elements.
// Outout: Minimum Continuous subarray length
// Condition: If subarray is sorted, then the entire array would be sorted.

// O(n log n) run-time, O(n) space
var findUnsortedSubarray = function(nums) {
    
    // Intution: Let A be the array and a be the sub-array. Let B be the final sorted array. Comparing the arrays one by one, we can obviously see that the earliest point of mismatch from the sorted property from the 2 ends is the range.
    
    const sortedNums = nums.slice().sort((a, b) => a-b)
    let leftPos = 0, rightPos = nums.length - 1
    
    // Navigating from left to find the point of change from sorted to unsorted.
    while(leftPos < nums.length && nums[leftPos] === sortedNums[leftPos]) leftPos++
    
    // Navigating from right to find the point of change from sorted to unsorted.
    while(rightPos >= 0 && nums[rightPos] === sortedNums[rightPos]) rightPos--
    
    if (leftPos >= rightPos) {
        return 0
    }
    
    return nums.length - ((nums.length - rightPos - 1) + (leftPos))
};
