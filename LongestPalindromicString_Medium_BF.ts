/**
* Problem: Finding longest palindromic substring in a string.
* Brute Force Approach: Find all the substrings in the string starting from longest to smallest.
* Figure out if any of it is palindromic and return.
* Complexity: O(n*n*n) time, and O(n) space.
*/
export function longestPalindromicSubstring(string: string) {
	if (string.length === 1) return string[0];
  let substringSize = string.length
	
	// Loop till we are done with all possible sizes of substrings.
	while(substringSize > 1) {
		for (let idx = 0; idx <= string.length - substringSize; idx++) {
			// Extract substring and validate for palindromic.
			const substring = string.substring(idx, idx + substringSize)
			if (isPalindromic(substring)) return substring
		}
		substringSize--
	}
	
	return string[0]
}

/**
* Returns true if the string is a palindrome
*/
function isPalindromic(string: string) {
	let beg = 0, end = string.length - 1
	while (beg <= end) {
		if (string[end] !== string[beg]) return false
		beg++; end--;
	}
	
	return true
}
