/**
 * Problem: Given an infinite supply of 'n' denominations and a target amount, find out the minimum number
 * of coins needed to make up the target amount.
 * Example I/P: [1, 2, 3], Target Amount: 5, Output: 2
 * 
 * Uses DP to compute all the sub-problems for each possible target amount and each possible coin denominations.
 * 
 * Complexity: Time - O(N * A) where N is the target amount and A is the amount.
 * Space - O(N * A) for the recursion depth.
 * 
 * @param denominations 
 * @param targetAmount 
 * @param current 
 */
function findMinimalCoinChangeDP(denominations: number[], targetAmount: number, current = 0) {   
    
    if (denominations.length === 0 || targetAmount === 0) return 0;

    // Init the DP table for storage of results.
    const coinChanges: number[][] = Array.from({length: denominations.length}, () => Array(targetAmount + 1).fill(Infinity));
    for (let idx = 0; idx < denominations.length; idx++) {
        coinChanges[idx][0] = 0
    }

    for (let amount = 1; amount <= targetAmount; amount++) {
        coinChanges[0][amount] = (amount % denominations[0] === 0) ? (amount / denominations[0]) : Infinity
    }

    // Build DP for all
    for (let idx = 1; idx < denominations.length; idx++) {
        for (let amount = 1; amount <= targetAmount; amount++) {
            // Include the coin adding 1 to the change needed.
            const coinsWithInclusion = (amount >= denominations[idx]) ?
                1 + coinChanges[idx][amount - denominations[idx]] :
                Infinity;
            
            // Excluding the coin.
            const coinsWithExclusion = coinChanges[idx - 1][amount]
            coinChanges[idx][amount] = Math.min(coinsWithInclusion, coinsWithExclusion);
        }
    }

    return coinChanges[denominations.length - 1][targetAmount]
}

function testFindMinimalCoinChangeDP(denominations: number[], targetAmount: number) {
    console.log(`Minimum Coin Change need for ${denominations} and amount ${targetAmount} = ${findMinimalCoinChangeDP(denominations, targetAmount)}`)
}

testFindMinimalCoinChangeDP([1, 2, 3], 5);
testFindMinimalCoinChangeDP([1, 2, 3], 11);