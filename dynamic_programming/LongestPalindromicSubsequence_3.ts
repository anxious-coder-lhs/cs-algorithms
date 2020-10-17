/**
 * 
 * Problem: Given a string of "n" characters, find the longest palindromic subsequence
 * of the input string. The subsequnce can remove one or more elements from the original
 * string retaining the original order of the string. This is a very different problem
 * from finding the longest palindromic substring without the constraint of removing any
 * elements.
 * 
 * Bottoms up dynamic programming is solution is used for identifying the max subsequence.
 * We start by including one character at a time. With each iteration, we include one more
 * character. Wuth each new character, there are n^2 possible subsequences, we create those
 * possible subsequences. With each subsequence, we identify the max palindromic length
 * using earlier computation and preserved results.
 * 
 * Complexity....
 * Time: O(n^2) since we are creating all the possible subsequences 
 * Space: O(n^2) since in the worst case, we would have to store the results of the entire possible combination.
 * @param input 
 */
function findLongestPalSubseq2(input: string) {
    return findLongestPalSubseqHelper2(input);
}

function findLongestPalSubseqHelper2(input: string): number {

    const dp: number[][] = Array.from({length: input.length}, () => Array(input.length).fill(0));
    for (let idx = 0; idx < input.length; idx++)
        dp[idx][idx] = 1;

    /**
     * DP table is built by including one additional position at each step.
     * We start from right to left, in order to use the DP formulation function.
     * At each character that is included, we need to consider its pair of subsequences
     * with all the other positions/characters identified before.
     */
    for (let beg = input.length - 1; beg >= 0; beg--) {
        for (let end = beg + 1; end < input.length; end++) {
            if (input[beg] === input[end]) {
                // If the perfect palindrome is created from the end, we squeeze.
                dp[beg][end] = dp[beg + 1][end - 1] + 2;
            } else {
                // If not, we see the max possible from either left or right.
                dp[beg][end] = Math.max(dp[beg + 1][end], dp[beg][end - 1]);
            }
        }
    }

    return dp[0][input.length - 1];
}

function testLongestPlalindSubseq2(input: string) {
    console.log(`Longest Palindromic Subsequence for input ${input}: ${findLongestPalSubseq2(input)}`)
}

testLongestPlalindSubseq2("abdbca")
testLongestPlalindSubseq2("cddpd")
testLongestPlalindSubseq2("pqr")