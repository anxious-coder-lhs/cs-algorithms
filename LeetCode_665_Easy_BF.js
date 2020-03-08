/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Given an array of length n - n >= 1 && <= 10,000
// Array is unsorted.
// Find if the array is sorted in ascending order if we just modify 1 element.
var checkPossibility = function(nums) {
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

function checkSeqValid(nums) {
    let last = -Infinity
    for (const num of nums) {
        if (num < last)
            return false
        last = num
    }
    return true
}
