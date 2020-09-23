/**
 * Finding if an array of numbers can be divided into 2 subsets such that the sum of the 2 subsets are equal.
 * This use the brute force approach to solving this provlem. The brute force approach is going to explore the entire solution sapce.
 * The entire solution space includes making possibility for each item to be part of the subset or not.
 * The entire solution space exploration would take O(2^n) time complexity and O(n) space complexity for the stack.
 * 
 * Time Complexity: O(N * S) where N is the total number of records and S is the total sum.
 * Space Complexity: O(N * S) where N is the total number of records and S is the total sum.
 * 
 * Uses the bottoms up approach of solving the DP problem, viz. using tabulization.
 * 
 * @param nums 
 */
function canPartitionEqualSubsetDP1(nums: number[]) {

    // Finding the total sum of the entire numbers array.
    const sum = nums.reduce((sum: number, val: number) => sum + val, 0);
    if (sum % 2 === 1) return false
    const subsetSum = sum/2;

    // Create and initialize a DP table for processing and storing the results.
    const sumPossible: boolean[][] = Array.from({length: nums.length +  1}, () => Array(subsetSum + 1).fill(false))

    // Initiailize the 1st row and 1st column of the dp table for the results.
    for (let idx = 0; idx < nums.length; idx++) sumPossible[idx][0] = true
    for (let sum = 1; sum <= subsetSum; sum++) sumPossible[0][sum] = nums[0] === sum

    // Identify the results for all the possible sums using all the possible items. We use the DP table for getting the results if they are already computed.
    for (let idx = 1; idx < nums.length; idx++) {
        for (let sum = 1; sum <= subsetSum; sum++) {
            if (nums[idx] <= sum) {
                // Case 1: Add the item at the idx location to the target sum, if possible.
                sumPossible[idx][sum] = sumPossible[idx - 1][sum - nums[idx]]
            } else {
                // Case 2: Skip the item and don't include it in the target sum.
                sumPossible[idx][sum] = sumPossible[idx - 1][sum]
            }
        }
    }

    // Return the last result, which is the total subset sum achievable from all the items included or not.
    return sumPossible[nums.length - 1][subsetSum]
}

function testEqualSubsetDP1(nums: number[]) {
    const result = canPartitionEqualSubsetDP1(nums);
    console.log(`Result for the equal subset parition for array: ${nums} = ${result}`)
}

testEqualSubsetDP1([1, 2, 3, 4])
testEqualSubsetDP1([1, 1, 3, 4, 7])
testEqualSubsetDP1([2, 3, 4, 6])