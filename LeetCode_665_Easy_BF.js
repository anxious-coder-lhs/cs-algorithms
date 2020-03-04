/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Given an array of length n - n >= 1 && <= 10,000
// Array is unsorted.
// Find if the array is sorted in ascending order if we just modify 1 element.
var checkPossibility = function(nums, outOfOrder=0) {
// Brute force
// Iterate through the array for each pair.
// If we find an out of order.
    // Change item 1 and run through the loop
    // Change item 2 and run through the loop
    
    for (let i=0;i<nums.length-1;i++) {
        if (nums[i] > nums[i+1]) {
            // Found out of order items.
            outOfOrder++
            if (outOfOrder >= 2) {
                return false
            } else {
                const first = nums[i]
                const second = nums[i+1]
                const newOne = nums.slice()
                newOne.splice(i, 1, second)
                const newTwo = nums.slice()
                newTwo.splice(i+1, 1, first)
                return checkPossibility(newOne, outOfOrder) || checkPossibility(newTwo, outOfOrder)
            }
        }
    }
    
    return true
};
