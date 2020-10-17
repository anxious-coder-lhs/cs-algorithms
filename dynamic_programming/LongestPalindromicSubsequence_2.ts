/**
 * 
 * Problem: Given a string of "n" characters, find the longest palindromic subsequence
 * of the input string. The subsequnce can remove one or more elements from the original
 * string retaining the original order of the string. This is a very different problem
 * from finding the longest palindromic substring without the constraint of removing any
 * elements.
 * 
 * Use the brute force to generate all possible subsequences. While in a subsequence,
 * if the string is already a palindrome from the ends, continue proceeding inwards.
 * If it is not palindrome from the end, we can continue ignoring one elements from
 * the left and right to see if we can achieve a palindromic subsequence. while the brute
 * force exploration happens, we need to cache all the pre-computed results in an
 * additional DP storage for use.
 * 
 * Complexity....
 * Time: O(n^2) since beg * end is the worst case of computation, rest of the computations
 * are cached. Space: O(n^2 + n) since in the worst case, we would have all the n^2 positions 
 * cahced and stored. Additionally, O(n) space would be used for the recursion stack.
 * 
 * @param input 
 */
function findLongestPalSubseq1(input: string) {
    return findLongestPalSubseqHelper1(input, 0, input.length - 1);
}

function findLongestPalSubseqHelper1(input: string, beg: number, end: number, dp: number[][] = []): number {

    dp[beg] = dp[beg] || [];

    if (dp[beg][end] !== undefined)
        return dp[beg][end];

    if (end < beg) return 0;
    else if (end === beg) return 1;
    else if (input[beg] === input[end]) {
        // Ends are matching, continue inwards.
        dp[beg][end] = 2 + findLongestPalSubseqHelper1(input, beg + 1, end - 1);
        return dp[beg][end]
    }

    // If the ends are not matching, we may try to skip an element from the end, to attempt
    // to make a palindromic string
    const maxWithLeftInclusion = findLongestPalSubseqHelper1(input, beg + 1, end);
    const maxWithRightInclusion = findLongestPalSubseqHelper1(input, beg, end - 1);
    dp[beg][end] = Math.max(maxWithLeftInclusion, maxWithRightInclusion);
    return dp[beg][end];
}

function testLongestPlalindSubseq1(input: string) {
    console.log(`Longest Palindromic Subsequence for input ${input}: ${findLongestPalSubseq1(input)}`)
}

testLongestPlalindSubseq1("abdbca")
testLongestPlalindSubseq1("cddpd")
testLongestPlalindSubseq1("pqr")