/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: An integer array with 0 or more elements.
// Outout: Minimum Continuous subarray length
// Condition: If subarray is sorted, then the entire array would be sorted.

// O(n * n) run-time, O(1) space time
var findUnsortedSubarray = function(nums) {
    
    // Intution: Let A be the array and a be the sub-array. Let B be the final sorted array. Comparing the arrays one by one, we can obviously see that the earliest point of mismatch from the sorted property from the 2 ends is the range.
    // This is a space optimization as compared to last algorithm in favour of not creating additional storage. However, the run-time is poor as compared to other.
    let leftPos = 0, rightPos = nums.length - 1
    
    // Navigating from left to find the point of change from sorted to unsorted.
    while(leftPos < nums.length && isMin(nums, leftPos)) leftPos++
    
    // Navigating from right to find the point of change from sorted to unsorted.
    while(rightPos >= 0 && isMax(nums, rightPos)) rightPos--
    
    if (leftPos >= rightPos) {
        return 0
    }
    
    return nums.length - ((nums.length - rightPos - 1) + (leftPos))
};

function isMin(nums, pos) {
    for (let i=pos+1;i<nums.length;i++) {
        if (nums[i] < nums[pos]) return false
    }
    
    return true
}

function isMax(nums, pos) {
    for (let i=pos-1;i>=0;i--) {
        if (nums[i] > nums[pos]) return false
    }
    
    return true
}
