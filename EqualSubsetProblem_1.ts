/**
 * Finding if an array of numbers can be divided into 2 subsets such that the sum of the 2 subsets are equal.
 * This use the brute force approach to solving this provlem. The brute force approach is going to explore the entire solution sapce.
 * The entire solution space includes making possibility for each item to be part of the subset or not.
 * The entire solution space exploration would take O(2^n) time complexity and O(n) space complexity for the stack.
 * 
 * @param nums 
 */
function canPartitionEqualSubsetBF(nums: number[]) {

    // Finding the total sum of the entire numbers array.
    const sum = nums.reduce((sum: number, val: number) => sum + val, 0);
    if (sum % 2 === 1) return false

    // Recursively creating all the pairs to find a partition which has a sum = sum/2
    return canPartitionEqualSubsetBFHelper(nums, sum/2)
}

/**
 * Recursively finds a partition or a subet of the total numbers whose total sum matches the given target sum.
 * The subset cannot have all the elements of the array, as this will not create an absolute subset.
 * 
 * @param nums 
 * @param sum 
 * @param item 
 */
function canPartitionEqualSubsetBFHelper(nums: number[], sum: number, item: number = 0) {

    if (item >= nums.length) return false
    if (sum === 0) return true

    // If the item can fit well within the bounds of the target sum, we shall recursively try adding the item withing the sum for a result.
    if (sum >= nums[item]) {
        if (canPartitionEqualSubsetBFHelper(nums, sum - nums[item], item + 1)) return true;
    }
    
    // Try skipping the item assuming it will be part of the different set.
    return canPartitionEqualSubsetBFHelper(nums, sum, item + 1);
}

function testEqualSubsetBF(nums: number[]) {
    const result = canPartitionEqualSubsetBF(nums);
    console.log(`Result for the equal subset parition for array: ${nums} = ${result}`)
}

testEqualSubsetBF([1, 2, 3, 4])
testEqualSubsetBF([1, 1, 3, 4, 7])
testEqualSubsetBF([2, 3, 4, 6])