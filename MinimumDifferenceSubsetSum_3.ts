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
 * Space Complexity: O(S) + O(N) as there would be at max n depths of recursion, and S storage space.
 * 
 * @param nums
 * 
 */
function findMinimumDifferenceSubsetSumDP1(nums: number[]) {
    const sum = nums.reduce((sum, item) => sum + item, 0);
    const maxSubsetSum = findMinimumDifferenceSubsetSumHelperDP1(nums, Math.floor(sum/2));
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
function findMinimumDifferenceSubsetSumHelperDP1(nums: number[], sum: number): number {

    // Initiailize the DP table using opt storage and with base cases.
    const dp: number[][] = Array.from({length: 2}, () => Array(sum + 1).fill(0));
    dp[0][0] = dp[1][0] = 0

    // Initialize max weights for all the sums given a single weight.
    for (let s = 1; s <= sum; s++) {
        if (nums[0] <= s) dp[0][s] = nums[0]
        else dp[0][s] = 0
    }

    // Build the DP table for all items included and for all the possible sum weights.
    for (let idx = 1; idx < nums.length; idx++) {
        dp[1] = Array(sum + 1).fill(0)
        for (let s = 1; s <= sum; s++) {
            if (nums[idx] <= s) {
                // Item can be used for the sum, lets use it and figure out rest of the max weights from previous iterations of items.
                dp[1][s] = nums[idx] + dp[0][s - nums[idx]]
            } else {
                // Alternatively, use the last item max sum weight possible.
                dp[1][s] = dp[0][s]
            }
        }

        // Roll over for optimization and use of single rows.
        dp[0] = dp[1]
    }

    return dp[1][sum]
}

function testMinDifferenceSumDP1(nums: number[]) {
    console.log(`Minimum Difference Subset sum for input: ${nums} = ${findMinimumDifferenceSubsetSumDP1(nums)}`);
}

testMinDifferenceSumDP1([1, 2, 3, 9])
testMinDifferenceSumDP1([1, 2, 7, 1, 5])
testMinDifferenceSumDP1([1, 3, 100, 4])