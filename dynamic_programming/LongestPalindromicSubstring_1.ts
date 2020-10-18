/**
 * Problem: Longest Palindromic Substring.
 * Given a string, find the longest possible palindromic substring of the string. The
 * substring should be of the exact order without skipping any elements in between.
 * 
 * Solution: Solution is based on simple brute force. We create the boundary pairs of
 * the substring using a quadratic loop. For each substring boundary conditions, we invoke
 * the check for is palindrome which does an iteraction of O(n) to validate if the string
 * is palindrome.
 * 
 * Complexity...
 * Time: O(n^3) since the elements are iterated in 3 nested levels.
 * Space: O(1) since no other additional space is used.
 * 
 * @param input 
 */
function findLongestPalindromicSubstring1(input: string) {
    let maxLength = 0;
    for (let beg = 0; beg < input.length; beg++) {
        for(let end = beg; end < input.length; end++) {
            if (isPalindrome1(input, beg, end)) {
                maxLength = Math.max(maxLength,end - beg + 1);
            }
        }
    }

    return maxLength;
}

function isPalindrome1(input: string, beg: number, end: number) {
    while(beg !== end) {
        if (input[beg] !== input[end]) return false
        beg++;
        end--;
    }

    return true;
}

function testLongestPal1(input: string) {
    console.log(`Longest Palindromic substring length for input: ${input} is ${findLongestPalindromicSubstring1(input)}`);
}

testLongestPal1("abdbca")
testLongestPal1("cddpd")
testLongestPal1("pqr")