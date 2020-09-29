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
 * We use dynamic programming to compute the results of the sub-problem before computing the results of the 
 * bigger parent problems.
 * 
 * Complexity: Time: O(N * C), Space: O(C) where N is the number of items, C is the capacity.
 * We compute the results of all the N*C sub-problems. We store the results of 2*C sub-problems.
 * 
 * @param profits 
 * @param weights 
 * @param capacity 
 * @param item 
 */
function unboundedKnapsackDP1(profits: number[], weights: number[], capacity: number) {

    // Create and initialize a DP table for the storage of results.
    const netProfits: number[][] = Array.from({length: 2}, () => Array(capacity + 1).fill(0));
    netProfits[0][0] = netProfits[1][0] = 0
    for (let cap = 1; cap <= capacity; cap++) {
        if (weights[0] <= capacity) netProfits[0][cap] = profits[0]
    }

    // Calculate the maximum profit for each item and the max capacity
    for (let idx = 1; idx < weights.length; idx++) {
        netProfits[1] = Array(capacity + 1).fill(0)
        for (let cap = 1; cap <= capacity; cap++) {
            const profitWithInclusion = (cap >= weights[idx]) ? profits[idx] + netProfits[1][cap - weights[idx]] : 0
            const profitWithExclusion = netProfits[0][cap]
            netProfits[1][cap] = Math.max(profitWithExclusion, profitWithInclusion)
        }

        // Roll over the DP table rows
        netProfits[0] = netProfits[1]
    }

    return netProfits[1][capacity];
}

function testUnboundedKnapsackDP1(profits: number[], weights: number[], capacity: number) {
    console.log(`Max Profit for Unbounded Knapsack problem for profit: ${profits}, weights: ${weights}, capacity: ${capacity}: ${unboundedKnapsackDP1(profits, weights, capacity)}`);
}

testUnboundedKnapsackDP1([15, 50, 60, 90], [1, 3, 4, 5], 8);