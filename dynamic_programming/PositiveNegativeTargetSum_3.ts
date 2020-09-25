
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
 * 
 * Total Sum: 11, TS: 13
 * AD: 2
 * Negative: 2, Positive: TS
 * Positive: 2, Negative: TS
 * 
 * Case 1: TaS > ToS: Nothing can happen.
 * Case 2: TaS <= ToS: ToS - X -X = TaS?
 * X = (ToS - TaS)/2
 * 
 * 
 * Solution is based on the fact that a set of numbers should be found that can be used as a negative numbers to achieve the target sum
 * using the total sum. These set of numbers (sum) would be deducted twice from the total sum as described above.
 */
function positiveNegativeTargetSumDP(nums: number[], targetSum: number) {
    // Calculate the range of maximum sum that can be achieved from the numbers.
    const totalSum = nums.reduce((sum, val) => sum + val, 0);
    const negationSum = (Math.abs(targetSum - totalSum))/2;

    // Create a DP table for bottom up execution and storage of results.
    const dp: number[][] = Array.from({length: nums.length}, () => Array(negationSum + 1).fill(0))

    for (let idx = 0; idx < nums.length; idx++) {
        dp[idx][0] = 1
    }

    for (let s = 1; s <= negationSum; s++) {
        dp[0][s] = (nums[0] === s) ? 1 : 0
    }

    for (let idx = 1; idx < nums.length; idx++) {
        for (let s = 1; s <= negationSum; s++) {
            // At each iteration to achieve the target sum using the given index of the item of the set.
            // We can either include the item in the target set or not include the item itself.
            if (s >= nums[idx])
                dp[idx][s] = dp[idx - 1][s - nums[idx]]

            dp[idx][s] += dp[idx - 1][s]
        }
    }

    return dp[nums.length - 1][negationSum];
}

function testPositiveNegativeTargetSumDP(nums: number[], sum: number) {
    console.log(`Total Count for positive negative target sum for input: ${nums} and target sum: ${sum} = ${positiveNegativeTargetSumDP(nums, sum)}`)
}

testPositiveNegativeTargetSumDP([1, 1, 2, 3], 1)
testPositiveNegativeTargetSumDP([1, 2, 7, 1], 9)