/**
 * Problem: Longest Palindromic Substring.
 * Given a string, find the longest possible palindromic substring of the string. The
 * substring should be of the exact order without skipping any elements in between.
 * 
 * Solution: Solution is based on simple brute force. We recursively navigate from two ends to squeeze inside. At each step, we check if the
 * entire string including the 2 endpoints are palindromes. If the entire string with the 2 ends are not palindromes (which we can compare with
 * the lengths equality), we may try to squeeze the endpoints. At each level of squeezing we squeeze eihter left or right.
 * 
 * Complexity...
 * Time: O(3^n) since at each character positions, we are expanding the solution space to 3 more childs.
 * Space: O(n) since at any point of time, recursion stack is at max n.
 * 
 * @param input 
 */
function findLongestPalindromicSubstring2(input: string) {
    return findLongestPalSubseqHelper2(input, 0, input.length - 1);
}

function findLongestPalSubseqHelper2(input: string, beg: number, end: number) {
    // Boundary/Base conditions to terminate the loop.
    if (beg > end) return 0;
    if (beg === end) return 1;

    // Recursive palindromic checks.
    if (input[beg] === input[end]) {
        // If the 2 endpoints are equal, we may attempt to recursively check the palindrome.
        const maxWithInclusion = 2 + findLongestPalSubseqHelper2(input, beg + 1, end - 1);
        
        // Since, we must include adjacent chars and cannot skip from either side at each level, we should validate
        // the length.
        if (maxWithInclusion === end - beg + 1) {
            return maxWithInclusion;
        }
    }
    
    // If the 2 ends are not equal, we may try to check substring with beg or end only.
    const maxWithExclusion1 = findLongestPalSubseqHelper2(input, beg, end - 1);
    const maxWithExclusion2 = findLongestPalSubseqHelper2(input, beg + 1, end);
    return Math.max(maxWithExclusion1, maxWithExclusion2);
}

function testLongestPal2(input: string) {
    console.log(`Longest Palindromic substring length for input: ${input} is ${findLongestPalindromicSubstring2(input)}`);
}

testLongestPal2("abdbca")
testLongestPal2("cddpd")
testLongestPal2("pqr")