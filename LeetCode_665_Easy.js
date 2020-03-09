/**
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
// Given an array of length n - n >= 1 && <= 10,000
// Array is unsorted.
// Find if the array is sorted in ascending order if we just modify 1 element.

// Pattern: Reducing the problem size. Finding the indexes where A[i] > A[i+1], we have a problem.
// If there are more than one index, answer is False
// If there are 0, answer is True
// If there is 1 place, following sub-conditions apply.
    // Checking A[i-2], A[i-1], A[i], A[i+1], A[i+2] to see if the order is maintained.

var checkPossibility = function(nums) {
// Iterate through each pair of array to check for these conditions.
// Case 1: If val(i+1) >= val(i) continue
// Case 2: If val(i+1) < val(i) following conditions apply for d=val(i)-val(i+1)
    // Case 2.1 val(i) - d <= val(i-1) continue
    // Case 2.2 val(i+1) + d <= val(i+2) continue
    // else break
    
    let outOfOrder = 0
    for (let i=0;i<nums.length-1;i++) {
        if (!isValid(nums, i, i+1)) {
            outOfOrder++
            if (outOfOrder >= 2 || !canBeMutated(nums, i, i+1))
                return false
        }
    }
        
    return true
}

// Can we change one of the number so that the array is in order.
// Given an out of order pair, either the 1st num or 2nd can be changed, impacting 0th and 1st order, or 1st and 2nd.
function canBeMutated(nums, i, j) {
    if (i === 0 || j === nums.length - 1) return true
    const diff = nums[i] - nums[j]
    return nums[i] - diff >= nums[i-1] || nums[j] + diff <= nums[j+1]
}

// If the numbers are in order
function isValid(nums, i, j) {
    return nums[i] <= nums[j]
}
