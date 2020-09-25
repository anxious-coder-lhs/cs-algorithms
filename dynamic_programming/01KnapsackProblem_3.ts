/**
 * Solve the knapsack problem by maximizing the total profit while keeping the total items choosen to remain within the total capacity allocated.
 * Use of dynamic programming using the memoization techniques.
 * Complexity: Time = O(N * C) since at max with DP, we will compute the function of the product of capacity and items in the worst case.
 * Complexity: Space = O(N * C) since that the memoization table size. O(N) for the recursion.
 * Table of [items idx][capacity]
 * 
 * @param profits 
 * @param weights 
 * @param capacity 
 */
function findMaxProfitDPTable(profits: number[], weights: number[], capacity: number) {
    const netProfits: number[][] = Array.from({length: weights.length}, () => Array(capacity + 1).fill(0))
    
    // Initialize the net profits for all the capacities with 0 items to be 0.
    for(let idx = 0; idx < weights.length; idx++) {
        netProfits[idx][0] = 0
    }

    // Initialize the net profits for all the capacities with only 1 item to be the same as the item.
    for (let cap = 1; cap <= capacity; cap++) {
        if (weights[0] <= cap) netProfits[0][cap] = profits[0]
    }

    // Build the DP table for each item index to be included with all the capacities possible from 0 to total capacity.
    for (let idx = 1; idx < weights.length; idx++) {
        for (let cap = 1; cap <= capacity; cap++) {
            /**
             * For each index of the available items and for each possible capacity, we calculate the new profit achievable.
             * Each item index means inclusion of one or more items till the index level.
             * Each capacity indicates the maximum capacity that is allowed to be filled till now.
             */
            let profitWithInclusion = 0
            if (cap >= weights[idx]) {
                profitWithInclusion = netProfits[idx - 1][cap - weights[idx]] + profits[idx]
            }

            netProfits[idx][cap] = Math.max(profitWithInclusion, netProfits[idx - 1][cap])
        }
    }

    return netProfits[weights.length - 1][capacity];
}

// Test Cases
function runTestDPTable(profits: number[], weights: number[], capacity: number) {
    console.log(`Max Profit using the profits: ${profits}, weights: ${weights}, capacity: ${capacity} = ${findMaxProfitDPTable(profits, weights, capacity)}`);
}

runTestDPTable([1, 6, 10, 16], [1, 2, 3, 5], 7);
runTestDPTable([1, 6, 10, 16], [1, 2, 3, 5], 6);
runTestDPTable([1, 6, 10, 16], [1, 2, 3, 5], 1);
runTestDPTable([1, 6, 10, 16], [1, 2, 3, 5], 2);