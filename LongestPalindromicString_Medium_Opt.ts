/**
* Problem: Finding longest palindromic substring in a string.
* Brute Force Approach: Find all the substrings in the string starting from longest to smallest.
* Figure out if any of it is palindromic and return.
* Complexity: O(n*n) time, and O(n) space.
*/
export function longestPalindromicSubstring(string: string) {
  // Start at each index and expand from there to see if we can make a 
	// palindrome using the index position as base.
	let maxSubstrBeg = 0, maxSubstrEnd = 0, maxSubstrLength = 1
	for (let idx = 1; idx < string.length; idx++) {
		// Trying the odd length palindrome by expanding to one in both directions and even by expanding in one.
		const odd = findPalindromeFrom(string, idx - 1, idx + 1);
		const even = findPalindromeFrom(string, idx - 1, idx);
		if (odd.length > maxSubstrLength || even.length > maxSubstrLength) {
			if (odd.length > even.length) {
				maxSubstrLength = odd.length
				maxSubstrBeg = odd.begPos
				maxSubstrEnd = odd.endPos
			} else {
				maxSubstrLength = even.length
				maxSubstrBeg = even.begPos
				maxSubstrEnd = even.endPos
			}
		}
	}
	
	return string.substring(maxSubstrBeg, maxSubstrEnd + 1)
}

/**
* Find a palindrome from the string given at the current position.
* Atleast size of 1 will be returned with only one character as position.
*/
function findPalindromeFrom(string: string, leftPos: number, rightPos: number): {begPos: number, endPos: number, length: number} {
	// Atleast the palindrome will be of size 1 starting and ending at the given index.
	// We expand on the left and the right to see if we can find a palindrome.
	while(isPalindromeAtIdx(string, leftPos, rightPos)) {
			leftPos -= 1
			rightPos += 1
	}
	
	leftPos++; rightPos--;
	return {begPos: leftPos, endPos: rightPos, length: rightPos - leftPos + 1}
}

/**
* Returns true if the string is a palindrome with the 2 positions given, assuming everygthing in between
* is already a palindrome.
*/
function isPalindromeAtIdx(string: string, leftPos: number, rightPos: number) {
	return leftPos >= 0 && rightPos < string.length && string[leftPos] === string[rightPos];
}
