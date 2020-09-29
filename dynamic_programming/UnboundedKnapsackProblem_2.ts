/**
 * Problem: Given an input array of weights of n items and associated profits of n items, with a target capacity.
 * Find out how you can maximize the profits of the knapsack given that you can pick any number of items of any weights.
 * Example: Items: {Banana, Carrot, Tomato}, Weights: {1, 2, 3}, Profits: {15, 20, 50}, Capacity: 5
 * Example Output: Max Profit: 2 Banana + 1 Tomato => Max Profit: 80.
 * 
 * Solution: Brute Force technique to create all the combinations of the elements with as many inclusions as possible.
 * At each step of capacity, there are 2 options: we either choose to include the current element or either exclude it.
 * If we choose to include an item for the knapsack, in the next iteration we can still choose that item again.
 * 
 * We use caching to ensure same combination is not computed again.
 * 
 * Complexity: Time: O(N * C), Space: O(N * C) + O(N + C) where N is the number of items, C is the capacity.
 * N * C recursions would happen at max. Any repeatitions will be cached. N * C storage space would be used by the table.
 * N + C recursion step would happen at max.
 * 
 * @param profits 
 * @param weights 
 * @param capacity 
 * @param item 
 */
function unboundedKnapsackDP(profits: number[], weights: number[], capacity: number, item: number = 0, dp: number[][] = undefined) {

    if (item >= weights.length || capacity <= 0) return 0;

    if (dp === undefined) {
        dp = Array.from({length: weights.length}, () => Array(capacity + 1).fill(undefined));
    } else if (dp[item][capacity] !== undefined) {
        return dp[item][capacity];
    }

    let profitWithInclusion = 0;
    if (weights[item] <= capacity) {
        profitWithInclusion = profits[item] + unboundedKnapsackDP(profits, weights, capacity - weights[item], item, dp)
    }

    const profitWithExclusion = unboundedKnapsackDP(profits, weights, capacity, item + 1, dp)
    dp[item][capacity] = Math.max(profitWithInclusion, profitWithExclusion);
    return dp[item][capacity];
}

function testUnboundedKnapsackDP(profits: number[], weights: number[], capacity: number) {
    console.log(`Max Profit for Unbounded Knapsack problem for profit: ${profits}, weights: ${weights}, capacity: ${capacity}: ${unboundedKnapsackDP(profits, weights, capacity)}`);
}

testUnboundedKnapsackDP([15, 50, 60, 90], [1, 3, 4, 5], 8);