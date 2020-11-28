/**
 * Leet Code 322
 * 
 * Solution uses dynamic programming to compute the results for making all target amount from 0 till max for all
 * the possible coins denominations from 0 to end. This is because the problem can be divided into sub problems
 * as picking a coin leaves up the same problem as original with less target sum.
 * 
 * Brute force
 * 
 * Time: O(m^n) where n is the number of coin denominations and m is the target sum.
 * Space: O(n*m) for storing all possible results.
 * 
 * @param coins 
 * @param amount 
 */
function coinChange(coins: number[], amount: number): number {
    const totalChange = coinChangeHelper(coins, amount, 0);
    return totalChange === Infinity ? -1 : totalChange;
};

function coinChangeHelper(coins: number[], amount: number, current: number): number {
    
    // Return 0 if target amount is 0
    if (amount <= 0) return 0;
    
    // All the amount is done using this coin.
    if (coins[current] === amount) return 1;
    
    // All the coins are done processing and we do not have a result
    if (current >= coins.length) return Infinity;
    
    let coinsWithInclusion = Infinity, coinsWithoutInclusion = Infinity;
    if (amount >= coins[current]) {
        // A number of current coin denominations can be used.
        coinsWithInclusion = 1 + coinChangeHelper(coins, amount - coins[current], current);
    }
    
    coinsWithoutInclusion = coinChangeHelper(coins, amount, current + 1);
    
    return Math.min(coinsWithInclusion, coinsWithoutInclusion);
}