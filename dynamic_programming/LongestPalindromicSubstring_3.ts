/**
 * Problem: Longest Palindromic Substring.
 * Given a string, find the longest possible palindromic substring of the string. The
 * substring should be of the exact order without skipping any elements in between.
 * 
 * Solution: DP solution uses the bottom up solution to identify the longest palindromic substring with one
 * character at a time. With each new character added, we validate if it makes the entire string palindrome from
 * end to end. We do that in O(1) time operation by comparing the ends and comparing the substring excluding the ends.
 * On the other side, if the entire string is not palindrome, we check if any of the 2 ends can be skipped to have
 * a perfect palindrome. The entire sequence is repeated till we add each character.
 * 
 * Complexity...
 * Time: O(n^2) since the elements are iterated in 2 nested levels.
 * Space: O(n^2) since entire substring ends combination is saved, althought it can be reduced to O(n).
 * 
 * @param input 
 */
function findLongestPalindromicSubstring3(input: string) {

    // New DP table for caching.
    const dp: number[][] = Array.from({length: input.length + 1}, () => Array(input.length).fill(0));

    // Initialize the DP table for boundary conditions
    for (let idx = 0; idx < input.length; idx++) dp[idx][idx] = 1;

    // Build the entire table
    for (let beg = input.length - 1; beg >= 0; beg--) {
        for (let end = beg + 1; end < input.length; end++) {
            if (input[beg] === input[end] && dp[beg + 1][end - 1] + 2 === end - beg + 1) {
                dp[beg][end] = 2 + dp[beg + 1][end - 1];
            } else {
                dp[beg][end] = Math.max(dp[beg + 1][end], dp[beg][end - 1]);
            }
        }
    }

    return dp[0][input.length - 1];
}

function testLongestPal3(input: string) {
    console.log(`Longest Palindromic substring length for input: ${input} is ${findLongestPalindromicSubstring3(input)}`);
}

testLongestPal3("abdbca")
testLongestPal3("cddpd")
testLongestPal3("pqr")