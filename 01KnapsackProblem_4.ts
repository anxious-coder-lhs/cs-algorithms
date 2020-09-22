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
function findMaxProfitDPTableWithWeights(profits: number[], weights: number[], capacity: number) {
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

    // Backrack the solution to find the weights for the results.
    const result = []
    let row = weights.length - 1, col = capacity
    while(col > 0) {
        if (row >= 1 && netProfits[row][col] === netProfits[row - 1][col]) {
            // We inherited the result from the last item and hence did not add the current item to the result.
            row--
        } else {
            // Adding the results back
            result.push(weights[row])
            col -= weights[row]
            row--
        }
    }

    return {
        chosenWeights: result,
        chosenProfit: netProfits[weights.length - 1][capacity]
    }
}

// Test Cases
function runTestDPTableWithWeights(profits: number[], weights: number[], capacity: number) {
    const result = findMaxProfitDPTableWithWeights(profits, weights, capacity);
    console.log(`Max Profit using the profits: ${profits}, weights: ${weights}, capacity: ${capacity} = ${result.chosenProfit}, with resulting weights: ${result.chosenWeights}`);
}

runTestDPTableWithWeights([1, 6, 10, 16], [1, 2, 3, 5], 7);
runTestDPTableWithWeights([1, 6, 10, 16], [1, 2, 3, 5], 6);
runTestDPTableWithWeights([1, 6, 10, 16], [1, 2, 3, 5], 1);
runTestDPTableWithWeights([1, 6, 10, 16], [1, 2, 3, 5], 2);