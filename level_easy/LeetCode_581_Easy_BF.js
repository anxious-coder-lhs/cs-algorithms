/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: An integer array with 0 or more elements.
// Outout: Minimum Continuous subarray length
// Condition: If subarray is sorted, then the entire array would be sorted.

// O(n * n) run-time, O(1) space time
var findUnsortedSubarray = function(nums) {
    
    // Brute force solution:
    // Find all the possible pairs of indexes that can make a subarry.
    // Since we are looking for the shortest subarray as the result, we should expand the brute force array such that we increase the length of it.
    // For each shortest subarray, sort the subarray and check if the entire array is now sorted.
    
    // In the brute force solution, we are exploiting few properties of the solution state:
        // 1. Left subarray would be sorted.
        // 2. Right subarray would be sorted.
        // 3. Min of center subarray is >= last element of left.
        // 4. Max of center subarray is <= 1st element of right.
    
    if (nums.length <= 1 || isSorted(nums)) {
        return 0
    }
    
    for (let windowSize=2;windowSize<=nums.length;windowSize++) {
        for (let leftIdx=0;leftIdx<=nums.length - windowSize;leftIdx++) {
            const rightIdx = leftIdx + windowSize
            const [min, max] = findMinMax(nums, leftIdx, rightIdx)
//             console.log(leftIdx, rightIdx, min, max)
            if (isSorted(nums, 0, leftIdx) && 
                isSorted(nums, rightIdx, nums.length) && 
                (leftIdx === 0 ? true : nums[leftIdx-1] <= min) && 
                (rightIdx === nums.length ? true : nums[rightIdx] >= max)) {
                return windowSize
            }
        }    
    }
    
    return nums.length
};

// Finding the min and the max number from a given array.
function findMinMax(nums, start, end) {
    let min = nums[start]
    let max = nums[start]
    for (let i=start+1;i<end;i++) {
        if (nums[i] < min) {
            min = nums[i]
        }
        
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    
    return [min, max]
}

// Find if the array is sorted
function isSorted(nums, start = 0, end = nums.length) {
    let last = nums[start]
    for (let i=start+1;i<end;i++) {
        if (nums[i] < last) return false
        last = nums[i]
    }
    
    return true
}
