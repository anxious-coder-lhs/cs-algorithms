/**
 * Problem: Given an input array of positive numbers, find the total number of subsets that exists which makes the total sum to be equal to the target sum.
 * Solution: Brute Force Technique to figure out all the possible pairs of subsets and returns the subsets where the sum matches.
 * 
 * Complexity: Time: O(N * S) where N is the length of the array and S is the total target sum.
 * Complexity: Space O(N * S) for the total worst case storage. Additionally O(N) for the recursion stack.
 * 
 * @param nums 
 */
function countOfSubsetSumDP(nums: number[], sum: number): number {
    return countOfSubsetSumDPHelper(nums, sum);
}

/**
 * Brute force technique to find all pairs of numbers for subsets. Adds to the count, if the sum of the numbers is equal to the target sum offered.
 * Additionally uses the top down dynamic programming technique to save the results into the table to be re-used in other iterations.
 * 
 * @param nums 
 * @param sum 
 * @param item 
 */
function countOfSubsetSumDPHelper(nums: number[], sum: number, item: number = 0, dp: number[][] = undefined): number {

    // If we have created a subset successfully with the pending sum as 0, we can return a count of 1.
    if (sum === 0) {
        return 1
    }

    // Return count as 0, since we have consumed all the items and yet the sum has not reached.
    if (item >= nums.length) {
        return 0
    }

    if (dp === undefined) {
        dp = Array.from({length: nums.length}, () => Array(sum + 1).fill(0))
    } else if (dp[item][sum] !== undefined) {
        return dp[item][sum]
    } 

    // Counting for all the subsets that might include the following item and others that might not.
    const countWithInclusion = sum >= nums[item] ? countOfSubsetSumDPHelper(nums, sum - nums[item], item + 1) : 0
    const countWithExclusion = countOfSubsetSumDPHelper(nums, sum, item + 1)
    dp[item][sum] = countWithExclusion + countWithInclusion
    return dp[item][sum];
}

function testCountOfSubsetSumDPHelper(nums: number[], sum: number) {
    console.log(`Count of subset sum for input: ${nums} and sum: ${sum} = ${countOfSubsetSumDP(nums, sum)}`)
}

testCountOfSubsetSumDPHelper([1, 1, 2, 3], 4)
testCountOfSubsetSumDPHelper([1, 2, 7, 1, 5], 9)