/**
 * Leet Code 322
 * 
 * Solution uses dynamic programming to compute the results for making all target amount from 0 till max for all
 * the possible coins denominations from 0 to end. This is because the problem can be divided into sub problems
 * as picking a coin leaves up the same problem as original with less target sum.
 * 
 * The solution uses the bottoms up approach to compute all the results.
 * 
 * Time: O(n*m) where n is the number of coin denominations and m is the target sum.
 * Space: O(n*m) for storing all possible results.
 * 
 * @param coins 
 * @param amount 
 */
function coinChange(coins: number[], amount: number): number {
    
    // Create a DP Table
    const dpTable: number[][] = Array.from({length: coins.length + 1}, () => Array(amount + 1).fill(Infinity));
    
    // For all the amount with a single coin, we calculate the initial min coins.
    for (let amt = 1; amt <= amount; amt++) {
        if (amt % coins[0] === 0) {
            dpTable[0][amt] = Math.floor(amt / coins[0]);
        } else {
            dpTable[0][amt] = Infinity;
        }
    }
    
    // For amount 0, we need 0 coins.
    for (let coin = 0; coin < coins.length; coin++) dpTable[coin][0] = 0;
    
    // Calculate rest of the figures.
    for (let coin = 1; coin < coins.length; coin++) {
        for (let amt = 1; amt <= amount; amt++) {
            
            // Only if the new amount is greater than the coin.
            if (amt >= coins[coin]) {
                dpTable[coin][amt] = 1 + dpTable[coin][amt - coins[coin]];
            }
            
            // Also try without adding the current coin.
            dpTable[coin][amt] = Math.min(dpTable[coin][amt], dpTable[coin - 1][amt])
        }
    }
    
    const result = dpTable[coins.length - 1][amount];
    return result === Infinity ? -1 : result;
};