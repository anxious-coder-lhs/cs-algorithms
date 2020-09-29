/**
 * Problem: Given the infinite supply of the denominations, find out the total number of unique ways to make the total amount.
 * 
 * Solution: Brute force solution finds out all the possible ways of making the coin change by creating
 * all the subsets possible with the given denominations that makes up the total target amount.
 * 
 * Complexity: Time O(C*T) C the total coins and T being the total amount to make.
 * Complexity: Space O(C*T) as the total storage space required.
 * 
 * @param denominations 
 * @param totalAmount 
 */
function countCoinChangeDP(denominations: number[], totalAmount: number): number {

    // Create a table for the storage of all sub-problems and initialize it.
    const totalWays: number[][] = Array.from({length: denominations.length}, () => Array(totalAmount + 1).fill(0));

    for (let idx = 0; idx < denominations.length; idx++) {
        totalWays[idx][0] = 1;  // Total ways of making total 0 is 1 for any element.
    }

    for (let amount = 1; amount <= totalAmount; amount++) {
        totalWays[0][amount] = (amount % denominations[0] === 0) ? 1 : 0;   // 1 Way to make the amount using only given denomination if it makes a factor.
    }

    // Solve all the sub-problems leading upto the final problem.
    for (let idx = 1; idx < denominations.length; idx++) {
        for (let amount = 1; amount <= totalAmount; amount++) {
            // if we can use this denomination, add it to the result.
            if (amount >= denominations[idx]) {
                totalWays[idx][amount] = totalWays[idx][amount - denominations[idx]]
            }

            // we also try to make combinations skipping the item.
            totalWays[idx][amount] += totalWays[idx - 1][amount]
        }
    }

    return totalWays[denominations.length - 1][totalAmount];
}

function testCoinChangeDP(denominations: number[], totalAmount: number) {
    console.log(`Total Ways of making coin change for denominations: ${denominations} and total amount: ${totalAmount} = ${countCoinChangeDP(denominations, totalAmount)}`)
}

testCoinChangeDP([1, 2, 3], 5);