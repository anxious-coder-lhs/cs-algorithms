/**
 * Problem: Given an array of possible ribbon lengths and the total ribbon length 'n', we need to find the
 * maximum number of pieces that the ribbon can be cut into.
 * Example: I/P: [2, 3, 5], Total: 5, O/P: 2, I/P: [2, 3], Total: 7, O/P: 3
 * 
 * Solution: Bottoms up Dynamic programming by computing all the sub-problems till the final problem.
 * We solve the problem for each possible ribbon length and each possible length types.
 * 
 * Complexity: Time - O(N*L) where N is the ribbon length and L is the possible ribbon lengths.
 * Complexity: Space - O(N*L) + O(N+L) for the possible storage space and recursion depth.
 * 
 * @param lengths 
 * @param ribbonLength 
 * @param current 
 * @param dp 
 */
function maximumRibbonCutsDP1(lengths: number[], ribbonLength: number) {

    // Base condition
    if (lengths.length <= 0 || ribbonLength <= 0) return 0;

    // Create the DP table and init from the base conditions.
    const maxCuts: number[][] = Array.from({ length: lengths.length }, () => Array(ribbonLength + 1).fill(0));
    for (let idx = 0; idx < lengths.length; idx++) maxCuts[idx][0] = 1
    for (let length = 1; length <= ribbonLength; length++) maxCuts[0][length] = (length % lengths[0] === 0) ? 1 : 0

    // Solve all the sub-problems for all possible length types and max length.
    for (let idx = 1; idx < lengths.length; idx++) {
        for (let length = 1; length <= ribbonLength; length++) {
            
            // Include the item in the result, if it can frame a valid length using past.
            let countWithInclusion = 0;
            if (length >= lengths[idx] && maxCuts[idx][length - lengths[idx]] > 0) {
                countWithInclusion = 1 + maxCuts[idx][length - lengths[idx]] 
            }

            // Exclude the item and build from the rest.
            const countWithExclusion = maxCuts[idx - 1][length]

            maxCuts[idx][length] = Math.max(countWithInclusion, countWithExclusion);
        }
    }

    return maxCuts[lengths.length - 1][ribbonLength]
}

function testMaximumRibbonCutsDP1(lengths: number[], ribbonLength: number) {
    console.log(`Max Ribbon Cuts for length: ${ribbonLength} and lengths: ${lengths} = ${maximumRibbonCutsDP1(lengths, ribbonLength)}`);
}

testMaximumRibbonCutsDP1([2, 3, 5], 5)
testMaximumRibbonCutsDP1([2, 3], 7)
testMaximumRibbonCutsDP1([3, 5, 7], 13)