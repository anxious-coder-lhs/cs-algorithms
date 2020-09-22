/**
 * Solve the knapsack problem by maximizing the total profit while keeping the total items choosen to remain within the total capacity allocated.
 * Use of dynamic programming using the bottoms up techniques.
 * Use the optimization techniques by only saving one additional row for the bottoms up storage.
 * 
 * Complexity: Time = O(N * C) since at max with DP, we will compute the function of the product of capacity and items in the worst case.
 * Complexity: Space = O(C) since that the memoization table size is optimized to only contain the 2 rows. O(N) for the recursion.
 * Table of [items idx][capacity]
 * 
 * @param profits 
 * @param weights 
 * @param capacity 
 */
function findMaxProfitDPTableOpt(profits: number[], weights: number[], capacity: number) {
    const netProfits: number[][] = Array.from({length: 2}, () => Array(capacity + 1).fill(0))
    
    // Initialize the net profits for all the capacities with 0 items to be 0.
    netProfits[0][0] = 0
    netProfits[1][0] = 0

    // Initialize the net profits for all the capacities with only 1 item to be the same as the item.
    for (let cap = 1; cap <= capacity; cap++) {
        if (weights[0] <= cap) netProfits[0][cap] = profits[0]
    }

    // Build the DP table for each item index to be included with all the capacities possible from 0 to total capacity.
    for (let idx = 1; idx < weights.length; idx++) {
        netProfits[1] = Array(capacity).fill(0)
        for (let cap = 1; cap <= capacity; cap++) {
            /**
             * For each index of the available items and for each possible capacity, we calculate the new profit achievable.
             * Each item index means inclusion of one or more items till the index level.
             * Each capacity indicates the maximum capacity that is allowed to be filled till now.
             */
            let profitWithInclusion = 0
            if (cap >= weights[idx]) {
                profitWithInclusion = netProfits[0][cap - weights[idx]] + profits[idx]
            }

            netProfits[1][cap] = Math.max(profitWithInclusion, netProfits[0][cap])
        }

        netProfits[0] = netProfits[1]
    }

    return netProfits[1][capacity];
}

// Test Cases
function runTestDPTableOpt(profits: number[], weights: number[], capacity: number) {
    console.log(`Max Profit using the profits: ${profits}, weights: ${weights}, capacity: ${capacity} = ${findMaxProfitDPTableOpt(profits, weights, capacity)}`);
}

runTestDPTableOpt([1, 6, 10, 16], [1, 2, 3, 5], 7);
runTestDPTableOpt([1, 6, 10, 16], [1, 2, 3, 5], 6);
runTestDPTableOpt([1, 6, 10, 16], [1, 2, 3, 5], 1);
runTestDPTableOpt([1, 6, 10, 16], [1, 2, 3, 5], 2);