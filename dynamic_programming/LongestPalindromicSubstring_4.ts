/**
 * Problem: Longest Palindromic Substring.
 * Given a string, find the longest possible palindromic substring of the string. The
 * substring should be of the exact order without skipping any elements in between.
 * 
 * Solution: Solution is based on simple brute force. We recursively navigate from two ends to squeeze inside. At each step, we check if the
 * entire string including the 2 endpoints are palindromes. If the entire string with the 2 ends are not palindromes (which we can compare with
 * the lengths equality), we may try to squeeze the endpoints. At each level of squeezing we squeeze eihter left or right.
 * 
 * Adds DP table for caching previous saved results.
 * 
 * Complexity...
 * Time: O(3^n) since at each character positions, we are expanding the solution space to 3 more childs.
 * Space: O(n) since at any point of time, recursion stack is at max n.
 * 
 * @param input 
 */
function findLongestPalindromicSubstring4(input: string) {
    return findLongestPalSubseqHelper4(input, 0, input.length - 1, Array.from({length: input.length}, () => Array(input.length)));
}

function findLongestPalSubseqHelper4(input: string, beg: number, end: number, dp: number[][]) {
    // Boundary/Base conditions to terminate the loop.
    if (beg > end) return 0;
    if (beg === end) return 1;

    // Check if the results are already cached.
    if (dp[beg][end] !== undefined) {
        return dp[beg][end];
    }

    // Recursive palindromic checks.
    if (input[beg] === input[end]) {
        // If the 2 endpoints are equal, we may attempt to recursively check the palindrome.
        const maxWithInclusion = 2 + findLongestPalSubseqHelper4(input, beg + 1, end - 1, dp);
        
        // Since, we must include adjacent chars and cannot skip from either side at each level, we should validate
        // the length.
        if (maxWithInclusion === end - beg + 1) {
            return maxWithInclusion;
        }
    }
    
    // If the 2 ends are not equal, we may try to check substring with beg or end only.
    const maxWithExclusion1 = findLongestPalSubseqHelper4(input, beg, end - 1, dp);
    const maxWithExclusion2 = findLongestPalSubseqHelper4(input, beg + 1, end, dp);
    dp[beg][end] =  Math.max(maxWithExclusion1, maxWithExclusion2);
    return dp[beg][end]
}

function testLongestPal4(input: string) {
    console.log(`Longest Palindromic substring length for input: ${input} is ${findLongestPalindromicSubstring4(input)}`);
}

testLongestPal4("abdbca")
testLongestPal4("cddpd")
testLongestPal4("pqr")