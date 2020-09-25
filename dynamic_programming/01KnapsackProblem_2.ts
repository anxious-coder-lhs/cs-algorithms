/**
 * Solve the knapsack problem by maximizing the total profit while keeping the total items choosen to remain within the total capacity allocated.
 * Use of dynamic programming using the memoization techniques.
 * Complexity: Time = O(N * C) since at max with DP, we will compute the function of the product of capacity and items in the worst case.
 * Complexity: Space = O(N * C) since that the memoization table size. O(N) for the recursion.
 * 
 * @param profits 
 * @param weights 
 * @param capacity 
 */
function findMaxProfitDP(profits: number[], weights: number[], capacity: number) {
    /**
     * With DP, we will save the results of the pre-computed functionc call before.
     */
    return calculateMaxProfitDP(profits, weights, capacity, 0);
}

/**
 * Calculate the maximum profit available using the given profits, weights, capacity, etc.
 * Uses an expansion on all the possible solution space expanding to 2^n to figure out all the combinations.
 * In any particular chosen combination mode, we can either choose an item or skip an item.
 * However, we use memoization to save the results in prior computations.
 * 
 * @param profits 
 * @param weights 
 * @param capacity 
 * @param item 
 */
function calculateMaxProfitDP(
    profits: number[], 
    weights: number[], 
    capacity: number, 
    item: number = 0, 
    dp: number[][] = Array.from({ length: capacity + 1 }, () => Array(weights.length + 1).fill(-1))): number {

    // Use Memoized results if available.
    if (dp[capacity][item] !== -1) {
        return dp[capacity][item]
    }

    // Base case, exit the recursion process
    if (capacity <= 0 || item >= weights.length) return 0;

    let profitWithInclusion = 0
    // Select the element in one mode, hence reducing the total capacity available.
    if (capacity >= weights[item]) {
        // If the left over capacity is greater than the current item weight.
        profitWithInclusion = profits[item] + calculateMaxProfitDP(profits, weights, capacity - weights[item], item + 1)
    }

    // Skip the element in another mode, hence making no changes to the total capacity available.
    const profitWithoutInclusion = calculateMaxProfitDP(profits, weights, capacity, item + 1)

    // Returning the maximum profit.
    const result = Math.max(profitWithInclusion, profitWithoutInclusion);
    dp[capacity][item] = result;
    return result;
}

// Test Cases
function runTestDP(profits: number[], weights: number[], capacity: number) {
    console.log(`Max Profit using the profits: ${profits}, weights: ${weights}, capacity: ${capacity} = ${findMaxProfitDP(profits, weights, capacity)}`);
}

runTestDP([1, 6, 10, 16], [1, 2, 3, 5], 7);
runTestDP([1, 6, 10, 16], [1, 2, 3, 5], 6);
runTestDP([1, 6, 10, 16], [1, 2, 3, 5], 1);
runTestDP([1, 6, 10, 16], [1, 2, 3, 5], 2);