/**
 * Finds if there exists a subset of the input array whose total sum is equal to the target sum provided.
 * Uses the brute force approach to figure out all the possible subsets that exists for the given array.
 * For each subset, we figure out if any subset sum is equal to the target sum and return true on 1st subset.
 * 
 * Time Complexity: O(N * S) as the solution space to explore includes 2 choices at each level N, but we are using the DP to get the results.
 * Space Complexity: O(N + S) since thee would be at max n recursions and the storage space is optimized for O(S)
 * 
 * @param nums 
 * @param sum 
 */
function hasSubsetSumDP(nums: number[], sum: number): boolean {

    // Create initial DP table for the bottoms up evaluation of the results. Also intialize if with the base conditions.
    // Sum 0 can be achieved with any/all the numbers. Target sum can only be achieved by a single number if they are equal.
    // Since we are only interested in looking back one row (for the item - 1), we can only store 2 rows.
    const dp: boolean[][] = Array.from({length: 2}, () => Array(sum + 1).fill(false))
    dp[0][0] = dp[1][0] = true
    for (let s = 1; s <= sum; s++) dp[0][s] = nums[0] === s

    // Run the bottoms up approach for the entire solution space, leveraging the previous saved results.
    // Skipping the 1st index as it has already been computed.
    for (let idx = 1; idx < nums.length; idx++) {
        dp[1] = Array(sum + 1).fill(false);     // Imp to initialize only at the beginning to avoid over writing.
        for (let s = 1; s <= sum; s++) {
            // If the pending sum is greater than the current element, we may make a combination with the current element.
            if (s >= nums[idx]) dp[1][s] = dp[0][s - nums[idx]]
            dp[1][s] = dp[1][s] || dp[0][s]
        }

        // Rolling over the rows to leverage the same space.
        dp[0] = dp[1]
    }

    return dp[1][sum]
}

function runSubsetTestsDP(nums: number[], sum: number) {
    console.log(`Can subset exists for ${nums} for sum ${sum}: ${hasSubsetSumDP(nums, sum)}`)
}

runSubsetTestsDP([1, 2, 3, 7], 6)
runSubsetTestsDP([1, 2, 7, 1, 5], 10)
runSubsetTestsDP([1, 3, 4, 8], 6)