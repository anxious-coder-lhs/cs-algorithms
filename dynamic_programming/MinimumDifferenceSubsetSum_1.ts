/**
 * Problem: Given an input array, find out the minimum difference that can be retrieved from any 2 subsets of the input array.
 * Example: Input: [1, 2, 3, 9], Output: 3, Using: {1, 2, 3} and {9}.
 * 
 * Brute force solution: Explores all the possible subsets to figure out the minimum difference that is achievable from any of the subsets.
 * 
 * Time Complexity: O(2^n) as the entire solution space will be explored which makes up a decision tree of 2 child at each step.
 * Space Complexity: O(n) as there would be at max n depths of recursion.
 * 
 * @param nums
 */
function findMinimumDifferenceSubsetSumBF(nums: number[]) {
    const sum = nums.reduce((sum, item) => sum + item, 0);
    const maxSubsetSum = findMinimumDifferenceSubsetSumHelperBF(nums, Math.floor(sum/2));
    return sum - 2 * maxSubsetSum; // Since the found subset is added twice for the difference.
}

/**
 * Helper method to derive the maximum sum achievable using a subset. Since the sum passed is equal to half of the entire sum of all the elements of the array.
 * If the sum can be achieved using a subset, it means we can achieve a minimum difference of 0.
 * Else, we need to deduce the maximum sum possible using any subset.
 * 
 * Uses the brute force technique for expanding the entire solution space (which is O(2^n)) since that many combinations will be explored.
 * 
 * @param nums 
 * @param sum 
 * @param item 
 */
function findMinimumDifferenceSubsetSumHelperBF(nums: number[], sum: number, item: number = 0): number {

    // Exiting when we have exhausted all the items.
    if (item >= nums.length) return 0

    // Maximize the current sum to be equal to the maxSum or less.
    // As a brute force, we pick each item in the array and see if:
        // Case 1: The item addition is less than the maxSum and it maximizes the current sum.
        // Case 2: If we better skip this item and picks up another to maximize the current sum.

    let sumWithInclusion = 0
    if (nums[item] <= sum) {
        sumWithInclusion = nums[item] + findMinimumDifferenceSubsetSumHelperBF(nums, sum - nums[item], item + 1)
    }

    return Math.max(sumWithInclusion, findMinimumDifferenceSubsetSumHelperBF(nums, sum, item + 1))
}

function testMinDifferenceSumBF(nums: number[]) {
    console.log(`Minimum Difference Subset sum for input: ${nums} = ${findMinimumDifferenceSubsetSumBF(nums)}`);
}

testMinDifferenceSumBF([1, 2, 3, 9])
testMinDifferenceSumBF([1, 2, 7, 1, 5])
testMinDifferenceSumBF([1, 3, 100, 4])