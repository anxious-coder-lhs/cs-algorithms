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
 * the left and right to see if we can achieve a palindromic subsequence.
 * 
 * Complexity....
 * Time: O(2^n) since we are making choices for recursion at each step. We choose to
 * either ignore an element or to include id.
 * Space: O(n) since in the worst case, we would have all the n positions opened to be
 * compared.
 * 
 * @param input 
 */
function findLongestPalSubseq(input: string) {
    return findLongestPalSubseqHelper(input, 0, input.length - 1);
}

function findLongestPalSubseqHelper(input: string, beg: number, end: number): number {

    if (end < beg) return 0;
    else if (end === beg) return 1;
    else if (input[beg] === input[end]) {
        // Ends are matching, continue inwards.
        return 2 + findLongestPalSubseqHelper(input, beg + 1, end - 1);
    }

    // If the ends are not matching, we may try to skip an element from the end, to attempt
    // to make a palindromic string
    const maxWithLeftInclusion = findLongestPalSubseqHelper(input, beg + 1, end);
    const maxWithRightInclusion = findLongestPalSubseqHelper(input, beg, end - 1);
    return Math.max(maxWithLeftInclusion, maxWithRightInclusion);
}

function testLongestPlalindSubseqBF(input: string) {
    console.log(`Longest Palindromic Subsequence for input ${input}: ${findLongestPalSubseq(input)}`)
}

testLongestPlalindSubseqBF("abdbca")
testLongestPlalindSubseqBF("cddpd")
testLongestPlalindSubseqBF("pqr")