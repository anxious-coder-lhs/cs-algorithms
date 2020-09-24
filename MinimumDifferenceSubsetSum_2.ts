/**
 * Problem: Given an input array, find out the minimum difference that can be retrieved from any 2 subsets of the input array.
 * Example: Input: [1, 2, 3, 9], Output: 3, Using: {1, 2, 3} and {9}.
 * 
 * Dynamic Programming Solution: Since the program needs to exponentially explore all the options and the solution space for answer which is O(2^n).
 * This solution space needs to make decisions of subset inclusion or exclusion for each item, it expands the decision tree to O(2^n).
 * 
 * We can use memoization to fix this problem.
 * 
 * Time Complexity: O(N * S) where N is the total number of items and S is the total sum or sum/2 in worst case.
 * Space Complexity: O(N) as there would be at max n depths of recursion.
 * 
 * @param nums
 * 
 */
function findMinimumDifferenceSubsetSum(nums: number[]) {
    const sum = nums.reduce((sum, item) => sum + item, 0);
    const maxSubsetSum = findMinimumDifferenceSubsetSumHelper(nums, Math.floor(sum/2));
    return sum - 2 * maxSubsetSum; // Since the found subset is added twice for the difference.
}

/**
 * Helper method to derive the maximum sum achievable using a subset. Since the sum passed is equal to half of the entire sum of all the elements of the array.
 * If the sum can be achieved using a subset, it means we can achieve a minimum difference of 0.
 * Else, we need to deduce the maximum sum possible using any subset.
 * 
 * Uses the DP with the memoization techniques.
 * 
 * @param nums 
 * @param sum 
 * @param item 
 */
function findMinimumDifferenceSubsetSumHelper(nums: number[], sum: number, item: number = 0, dp: number[][] = undefined): number {

    // Exiting when we have exhausted all the items.
    if (item >= nums.length) return 0

    if (dp === undefined) {
        dp = Array.from({length: nums.length}, () => Array(sum + 1))
    } else if (dp[item][sum] !== undefined) {
        return dp[item][sum];
    }

    // Maximize the current sum to be equal to the maxSum or less.
    // As a brute force, we pick each item in the array and see if:
        // Case 1: The item addition is less than the maxSum and it maximizes the current sum.
        // Case 2: If we better skip this item and picks up another to maximize the current sum.
    // We use DP for saving derived results.

    let sumWithInclusion = 0
    if (nums[item] <= sum) {
        sumWithInclusion = nums[item] + findMinimumDifferenceSubsetSumHelper(nums, sum - nums[item], item + 1)
    }

    dp[item][sum] = Math.max(sumWithInclusion, findMinimumDifferenceSubsetSumHelper(nums, sum, item + 1))
    return dp[item][sum]
}

function testMinDifferenceSumBF(nums: number[]) {
    console.log(`Minimum Difference Subset sum for input: ${nums} = ${findMinimumDifferenceSubsetSum(nums)}`);
}

testMinDifferenceSumBF([1, 2, 3, 9])
testMinDifferenceSumBF([1, 2, 7, 1, 5])
testMinDifferenceSumBF([1, 3, 100, 4])