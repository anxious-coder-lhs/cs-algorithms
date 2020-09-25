/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Given an array of length n - n >= 1 && <= 10,000
// Array is unsorted.
// Find if the array is sorted in ascending order if we just modify 1 element.

// Pattern: Reducing the problem size.

// Complexity: O(n) runtime, O(1) space.
var checkPossibility = function(nums) {
    // Solution Approach Pattern - Minimizing the noise in the problem by breaking
    // the problem into smaller problem. If the problem can be broken down into a 
    // small problem, it can be easy to fix or approach.

    // Moving from left most to the right, till we find a problem (Problem index from left)
    // Moving from right most to the left, till we find a problem (Problem index from right)
    // If the problem indexes do not exist, bypass each other - there is no problem.
        // have a distance of < 2, there is nothing to solve. "2" because the window size is 3 starting from 2nd index.
    // If the problem indexes are less than 4 distance apart, one BF scan can fix/check it.
    // If it is greater than 4, there are 2 separate problems, that need more than one scan.
    
    // Scanning with a window of 3 to find the 2 problem indexes.
    let i=0, j=nums.length - 1
    while(i+2<nums.length && nums[i] <= nums[i+1] && nums[i+1] <= nums[i+2]) i++
    while(j-2>=0 && nums[j-2] <= nums[j-1] && nums[j-1] <= nums[j]) j--

    // No problem exists
    if (j - i + 1 <= 2) return true

    // 2 distinct problems
    if (j-i+1 >= 5) return false

    // Try BF to see if this can be fixed. O(1) for constant size of 4.
    return checkPossibilityBF(nums.slice(i, j+1))
};

// Complexity: O(n*n) runtime, O(1) space.
var checkPossibilityBF = function(nums) {
    // Brute force solution by trying all the possibilities for making a change.
    // Best case solution assumes that there is no change required.
    // Another possible solution requires that there is only one change.
        // One change means that only a single element has to change.
        // Only single element that ensures result is making A[i] to A[i-1]
        // Making A[i] to -Infinity in case i is 0.

   // A BF solution will try making all the possible changes and looking for result.

   for (let i=0;i<nums.length;i++) {
       const original = nums[i]
       nums[i] = i === 0 ? -Infinity : nums[i-1]
       if (checkSeqValid(nums)) {
           return true
       }
       nums[i] = original
   }

   return false
};

// O(n) runtime and O(1) space
function checkSeqValid(nums) {
    let last = -Infinity
    for (const num of nums) {
        if (num < last)
            return false
        last = num
    }
    return true
}
