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

function positiveNegativeTargetSumBFHelper(nums: number[], sum: number) {
    
}