/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Input: An array of integers and an integer k.
// Output: No. of unique k-diff pairs (Unique)
// K-Diff pair such that (i, j) have absolute difference of k.
var findPairs = function(nums, k) {
    // Brute force approach - find all possible pairs of number.
    // Find if the absolute difference is k.
    // Add to the list of k-pairs if unique.
    // get the result.
    
    const uniquePairs = {}
    for (let i=0;i<nums.length;i++) {
        for (let j=i+1;j<nums.length;j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                const key = Math.min(nums[i], nums[j]) + "-" + Math.max(nums[i], nums[j])
                uniquePairs[key] = true
            }
        }
    }
    
    return Object.keys(uniquePairs).length
};
