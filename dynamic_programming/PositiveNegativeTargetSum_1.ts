/**
 * Problem: Given an array of postive numbers, and a target sum 'S', assign each number a positive or a negative sign such that the total sum becomes the target sum S.
 * Solution: Brute force will create all possible combinations of the numbers with a positive and negative signs. It means that each number will have 2 choices
 * to pick up the number, a positive or a negative sign.
 * 
 * Complexity: Time Complexity would be O(2^n) since all the possible sign combinations(2) will have to be taken for each number in all possible ways.
 * Complexity: Space: O(n) since the recursion has to go at max n depth.
 * 
 * @param nums 
 * @param sum 
 */
function positiveNegativeTargetSumBF(nums: number[], sum: number) {
    return positiveNegativeTargetSumBFHelper(nums, sum);
}

/**
 * Recursively creating all the possible subsets of the arrays creating a combination of positive or negative
 * sign on each number as it appears. At each possible completion of the subset, we intent to make the achievable
 * sum as 0.
 * 
 * @param nums 
 * @param sum 
 */
function positiveNegativeTargetSumBFHelper(nums: number[], sum: number, item: number = 0) {

    // Return base condition as count 1 if the sum of 0 can be achieved.
    if (sum === 0 && item >= nums.length) return 1

    // Return base condition as a failure to achieve sum as 0 until the end.
    if (item >= nums.length) return 0

    // Consider valid counts for each possible sign for each numbers. Subtract from sum to achieve a target of 0.
    const countWithPositiveSign = positiveNegativeTargetSumBFHelper(nums, sum - nums[item], item + 1);
    const countWithNegativeSign = positiveNegativeTargetSumBFHelper(nums, sum + nums[item], item + 1);
    return countWithNegativeSign + countWithPositiveSign;
}

function testPositiveNegativeTargetSumBF(nums: number[], sum: number) {
    console.log(`Total Count for positive negative target sum for input: ${nums} and target sum: ${sum} = ${positiveNegativeTargetSumBF(nums, sum)}`)
}

testPositiveNegativeTargetSumBF([1, 1, 2, 3], 1)
testPositiveNegativeTargetSumBF([1, 2, 7, 1], 9)