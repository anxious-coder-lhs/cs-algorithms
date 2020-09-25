/**
 * Problem: Given an input array of positive numbers, find the total number of subsets that exists which makes the total sum to be equal to the target sum.
 * Solution: Brute Force Technique to figure out all the possible pairs of subsets and returns the subsets where the sum matches.
 * 
 * Complexity: Time: O(2^N) where N is the length of the array as the entire solution space is explored with all combinations.
 * Complexity: Space O(N) for N is the max depth of the recursion stack.
 * 
 * @param nums 
 */
function countOfSubsetSumBF(nums: number[], sum: number): number {
    return countOfSubsetSumBFHelper(nums, sum);
}

/**
 * Brute force technique to find all pairs of numbers for subsets. Adds to the count, if the sum of the numbers is equal to the target sum offered.
 * 
 * @param nums 
 * @param sum 
 * @param item 
 */
function countOfSubsetSumBFHelper(nums: number[], sum: number, item: number = 0): number {
    
    // If we have created a subset successfully with the pending sum as 0, we can return a count of 1.
    if (sum === 0) {
        return 1
    }

    // Return count as 0, since we have consumed all the items and yet the sum has not reached.
    if (item >= nums.length) {
        return 0
    }

    // Counting for all the subsets that might include the following item and others that might not.
    const countWithInclusion = sum >= nums[item] ? countOfSubsetSumBFHelper(nums, sum - nums[item], item + 1) : 0
    const countWithExclusion = countOfSubsetSumBFHelper(nums, sum, item + 1)
    return countWithExclusion + countWithInclusion
}

function testCountOfSubsetSumBFHelper(nums: number[], sum: number) {
    console.log(`Count of subset sum for input: ${nums} and sum: ${sum} = ${countOfSubsetSumBF(nums, sum)}`)
}

testCountOfSubsetSumBFHelper([1, 1, 2, 3], 4)
testCountOfSubsetSumBFHelper([1, 2, 7, 1, 5], 9)