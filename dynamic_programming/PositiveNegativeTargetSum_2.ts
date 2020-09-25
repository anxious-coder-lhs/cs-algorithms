/**
 * Problem: Given an array of postive numbers, and a target sum 'S', assign each number a positive or a negative sign such that the total sum becomes the target sum S.
 * Solution: Brute force will create all possible combinations of the numbers with a positive and negative signs. It means that each number will have 2 choices
 * to pick up the number, a positive or a negative sign. Dynamic Programming will save and use existing results.
 * 
 * Complexity: Time Complexity would be O(N * S) where N is all the numbers and S is not the target sum, but the sum of all the numbers (*2 since in worst case all negative will also be computed.)
 * Complexity: Space: O(N * S) + O(N) since recursion will take a depth of N at max and O(N*S) space will be used by memoization.
 * 
 * @param nums 
 * @param sum 
 */
function positiveNegativeTargetSumDP(nums: number[], sum: number) {
    return positiveNegativeTargetSumDPHelper(nums, sum);
}

/**
 * Recursively creating all the possible subsets of the arrays creating a combination of positive or negative
 * sign on each number as it appears. At each possible completion of the subset, we intent to make the achievable
 * sum as 0.
 * 
 * @param nums 
 * @param sum 
 */
function positiveNegativeTargetSumDPHelper(nums: number[], sum: number, item: number = 0, dp: number[][] = []) {

    // Init, if not there.
    dp[item] = dp[item] || []

    // Initialize an initial memoization structure.
    if (dp[item][sum] !== undefined) {
        return dp[item][sum]
    }

    // Return base condition as count 1 if the sum of 0 can be achieved.
    if (sum === 0 && item >= nums.length) return 1

    // Return base condition as a failure to achieve sum as 0 until the end.
    if (item >= nums.length) return 0

    // Consider valid counts for each possible sign for each numbers. Subtract from sum to achieve a target of 0.
    const countWithPositiveSign = positiveNegativeTargetSumDPHelper(nums, sum - nums[item], item + 1, dp);
    const countWithNegativeSign = positiveNegativeTargetSumDPHelper(nums, sum + nums[item], item + 1, dp);
    dp[item][sum] = countWithNegativeSign + countWithPositiveSign;
    return dp[item][sum];
}

function testPositiveNegativeTargetSumDP(nums: number[], sum: number) {
    console.log(`Total Count for positive negative target sum for input: ${nums} and target sum: ${sum} = ${positiveNegativeTargetSumDP(nums, sum)}`)
}

testPositiveNegativeTargetSumDP([1, 1, 2, 3], 1)
testPositiveNegativeTargetSumDP([1, 2, 7, 1], 9)