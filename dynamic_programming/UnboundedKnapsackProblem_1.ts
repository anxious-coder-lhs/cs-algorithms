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
 * Complexity: Time: O(2^N), Space: O(N + C) where N is the number of items in the input.
 * Each recursion step makes 2 decision tree navigation and the recursion tree depth at max would be N + C.
 * 
 * @param profits 
 * @param weights 
 * @param capacity 
 * @param item 
 */
function unboundedKnapsackBF(profits: number[], weights: number[], capacity: number, item: number = 0) {

    if (item >= weights.length || capacity <= 0) return 0;

    let profitWithInclusion = 0;
    if (weights[item] <= capacity) {
        profitWithInclusion = profits[item] + unboundedKnapsackBF(profits, weights, capacity - weights[item], item)
    }

    const profitWithExclusion = unboundedKnapsackBF(profits, weights, capacity, item + 1)
    return Math.max(profitWithInclusion, profitWithExclusion);
}

function testUnboundedKnapsackBF(profits: number[], weights: number[], capacity: number) {
    console.log(`Max Profit for Unbounded Knapsack problem for profit: ${profits}, weights: ${weights}, capacity: ${capacity}: ${unboundedKnapsackBF(profits, weights, capacity)}`);
}

testUnboundedKnapsackBF([15, 50, 60, 90], [1, 3, 4, 5], 8);