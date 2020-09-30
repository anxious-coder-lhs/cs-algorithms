/**
 * Problem: Given an array of possible ribbon lengths and the total ribbon length 'n', we need to find the
 * maximum number of pieces that the ribbon can be cut into.
 * Example: I/P: [2, 3, 5], Total: 5, O/P: 2, I/P: [2, 3], Total: 7, O/P: 3
 * 
 * Solution: Brute force attack with memoization so that the sub-problems are solved recursively
 * and cached, so that solutions to bigger problems can be composed from smaller ones.
 * 
 * Complexity: Time - O(N*L) where N is the ribbon length and L is the possible ribbon lengths.
 * Complexity: Space - O(N*L) + O(N+L) for the possible storage space and recursion depth.
 * 
 * @param lengths 
 * @param ribbonLength 
 * @param current 
 * @param dp 
 */
function maximumRibbonCutsDP(lengths: number[], ribbonLength: number, current: number = 0, dp: number[][] = undefined) {
    if (lengths.length <= 0 || ribbonLength <= 0) return 0;

    // Base case as the element alone can be chosen.
    if (current === lengths.length - 1 && lengths[current] === ribbonLength) return 1;
    
    // Cannot make up the complete ribbon length completely.
    if (current >= lengths.length) return -Infinity;

    // Return from memoized table if the results already exists.
    if (dp === undefined) {
        dp = Array.from({length: lengths.length}, () => Array(ribbonLength + 1).fill(undefined))
    } else if (dp[current][ribbonLength] !== undefined) {
        return dp[current][ribbonLength];
    }

    // Compute the result successively adding 1 to the total cuts. If not possible, return -Infinity to negate.
    const countWithInclusion = ribbonLength >= lengths[current] ?
        1 + maximumRibbonCutsDP(lengths, ribbonLength - lengths[current], current, dp) :
        -Infinity;

    // Exclude the item and recursively compute from the rest.
    const countWithExclusion = maximumRibbonCutsDP(lengths, ribbonLength, current + 1, dp);
    dp[current][ribbonLength] =  Math.max(countWithInclusion, countWithExclusion)
    return dp[current][ribbonLength];
}

function testMaximumRibbonCutsDP(lengths: number[], ribbonLength: number) {
    console.log(`Max Ribbon Cuts for length: ${ribbonLength} and lengths: ${lengths} = ${maximumRibbonCutsDP(lengths, ribbonLength)}`);
}

testMaximumRibbonCutsDP([2, 3, 5], 5)
testMaximumRibbonCutsDP([2, 3], 7)
testMaximumRibbonCutsDP([3, 5, 7], 13)