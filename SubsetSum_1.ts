/**
 * Finds if there exists a subset of the input array whose total sum is equal to the target sum provided.
 * Uses the brute force approach to figure out all the possible subsets that exists for the given array.
 * For each subset, we figure out if any subset sum is equal to the target sum and return true on 1st subset.
 * 
 * Time Complexity: O(2^n) as the solution space to explore includes 2 choices at each level N (numeber of input)
 * Space Complexity: O(n) since thee would be at max n recursions.
 * 
 * @param nums 
 * @param sum 
 */
function hasSubsetSumBF(nums: number[], sum: number): boolean {
    return hasSubsetSumBFHelper(nums, sum)
}

/**
 * Brute force approach traverse the entire array of elements and make 2 decisions at each step.
 * It could include the number at a given position into the final sum, or it may choose to skip it.
 * With each decision made at any level (index of the input array), we expand the decision tree using the same logic at each step.
 * 
 * @param nums 
 * @param sum 
 * @param item 
 */
function hasSubsetSumBFHelper(nums: number[], sum: number, item: number = 0): boolean {

    // Base Condition
    if (item >= nums.length) return false;
    if (nums[item] === sum) return true;
 
    // Attempt to include the given number into the subset. It can only be done if the item is less than equal to the pending sum.
    if (sum >= nums[item]) {
        // If we pick this item, the final pending sum would be reduced and recursion would figure out for the rest of the items.
        const result = hasSubsetSumBFHelper(nums, sum - nums[item], item + 1)
        if (result) return result
    }

    // Alternatively, skip the item and compute the sum for rest of the array.
    return hasSubsetSumBFHelper(nums, sum, item + 1);
}

function runSubsetTestsBF(nums: number[], sum: number) {
    console.log(`Can subset exists for ${nums} for sum ${sum}: ${hasSubsetSumBF(nums, sum)}`)
}

runSubsetTestsBF([1, 2, 3, 7], 6)
runSubsetTestsBF([1, 2, 7, 1, 5], 10)
runSubsetTestsBF([1, 3, 4, 8], 6)