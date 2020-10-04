/**
 * Problem: Given a stair case of n steps, find out how many ways it can be climbed up if we can take 1 or 2 steps.
 * 
 * Solution: Uses bottoms up DP table to compute the results to the sub-problems upto the top for a solution with for the complete n steps.
 * 
 * Complexity: Time - O(n) for iterating over the entire n steps.
 * Space - O(1) for storing only a few results.
 * 
 * @param n 
 * @param dp 
 */
function climbStairs1(n: number): number {
    
    const ways: number[] = Array(2).fill(0)
    ways[1] = 1
    ways[2] = 2
    
    if (n <= 0) return 0
    else if (n <= 2) return ways[n]
    
    for (let idx = 3; idx <= n; idx++) {
        const newWays = ways[1] + ways[2]
        ways[1] = ways[2]
        ways[2] = newWays
    }
  
    return ways[2]
};