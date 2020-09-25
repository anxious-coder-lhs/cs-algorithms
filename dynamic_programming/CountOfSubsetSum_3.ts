/**
 * Problem: Given an input array of positive numbers, find the total number of subsets that exists which makes the total sum to be equal to the target sum.
 * Solution: Brute Force Technique to figure out all the possible pairs of subsets and returns the subsets where the sum matches.
 * 
 * Complexity: Time: O(N * S) where N is the length of the array and S is the total target sum.
 * Complexity: Space O(S) for the total worst case storage. Additionally O(N) for the recursion stack.
 * 
 * @param nums 
 */
function countOfSubsetSumDP1(nums: number[], sum: number): number {
    return countOfSubsetSumDP1Helper(nums, sum);
}

/**
 * Brute force technique to find all pairs of numbers for subsets. Adds to the count, if the sum of the numbers is equal to the target sum offered.
 * Additionally uses the bottoms up dynamic programming technique to save the results into the table to be re-used in other iterations.
 * 
 * @param nums 
 * @param sum 
 * @param item 
 */
function countOfSubsetSumDP1Helper(nums: number[], sum: number): number {

    // Init the DP table with base conditions
    const dp: number[][] = Array.from({length: 2}, () => Array(sum + 1).fill(0))
    dp[0][0] = dp[1][0] = 1
    for (let s = 1; s <= sum; s++) {
        dp[0][s] = (nums[0] === s) ? 1 : 0
    }

    for (let idx = 1; idx < nums.length; idx++) {
        dp[1] = Array(sum + 1).fill(1)
        for (let s = 1; s <= sum; s++) {
            // Counting for all the subsets that might include the following item and others that might not.
            const countWithInclusion = (s >= nums[idx]) ? dp[0][s - nums[idx]] : 0
            const countWithExclusion = dp[0][s];
            dp[1][s] = countWithInclusion + countWithExclusion;
        }

        // Rolling over storage for optimal use of 2 rows.
        dp[0] = dp[1]
    }

    return dp[1][sum];
}

function testCountOfSubsetSumDP1Helper(nums: number[], sum: number) {
    console.log(`Count of subset sum for input: ${nums} and sum: ${sum} = ${countOfSubsetSumDP1(nums, sum)}`)
}

testCountOfSubsetSumDP1Helper([1, 1, 2, 3], 4)
testCountOfSubsetSumDP1Helper([1, 2, 7, 1, 5], 9)