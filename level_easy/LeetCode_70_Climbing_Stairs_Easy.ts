/**
 * Problem: Given a stair case of n steps, find out how many ways it can be climbed up if we can take 1 or 2 steps.
 * 
 * Solution: Uses Memoization DP to compute the result recrusively, we solve each sub-problem from top down
 * to cache the individual results which can later be used for other operations.
 * 
 * Complexity: Time O(n) and Space O(n) for storing and recursively compute all results.
 * 
 * @param n 
 * @param dp 
 */
function climbStairs(n: number, dp: number[] = Array(n + 1).fill(undefined)): number {
  
    // Base condition to exit.
    if (n === 0) return 1
    else if (n < 0) return 0
    
    // If the result has already been computed, return.
    if (dp[n] !== undefined)
        return dp[n]
    
    // Compute recrusively using top down recursion.
    dp[n] = climbStairs(n - 2, dp) + climbStairs(n - 1, dp)
    return dp[n]
};