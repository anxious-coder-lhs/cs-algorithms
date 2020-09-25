/**
 * Solve the knapsack problem by maximizing the total profit while keeping the total items choosen to remain within the total capacity allocated.
 * Complexity: Time = O(2^n) since all the possible space of combinations needs to be chosen by combination (brute force).
 * Complexity: Space = O(n) since the recursion tree is expanding to all the nodes available.
 * 
 * @param profits 
 * @param weights 
 * @param capacity 
 */
function findMaxProfit(profits: number[], weights: number[], capacity: number) {
    /**
     * Use a brute force technique to figure out all the combination of the weights such that the total sum is less than the capacity.
     * With each weight combination figure out a maximum profit and return.
     */
    return calculateMaxProfitDP(profits, weights, capacity, 0);
}

/**
 * Calculate the maximum profit available using the given profits, weights, capacity, etc.
 * Uses an expansion on all the possible solution space expanding to 2^n to figure out all the combinations.
 * In any particular chosen combination mode, we can either choose an item or skip an item.
 * 
 * @param profits 
 * @param weights 
 * @param capacity 
 * @param item 
 */
function calculateMaxProfit(profits: number[], weights: number[], capacity: number, item: number = 0): number {
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
    return Math.max(profitWithInclusion, profitWithoutInclusion);
}

// Test Cases
function runTest(profits: number[], weights: number[], capacity: number) {
    console.log(`Max Profit using the profits: ${profits}, weights: ${weights}, capacity: ${capacity} = ${findMaxProfit(profits, weights, capacity)}`);
}

runTest([1, 6, 10, 16], [1, 2, 3, 5], 7);
runTest([1, 6, 10, 16], [1, 2, 3, 5], 6);
runTest([1, 6, 10, 16], [1, 2, 3, 5], 1);
runTest([1, 6, 10, 16], [1, 2, 3, 5], 2);