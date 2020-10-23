class PalindromicSubstringsCounter {

    /**
     * Generates boundary conditions using a quadratic loop. For each boundary condition, validates if the subtring
     * is a valid palindrome using an O(n) operation.
     * 
     * Time: O(n^3) since nested 3 levels iteration is happening.
     * Space: O(1) no additional space is used.
     * 
     * @param input 
     */
    countBF(input: string) {

        let total = 0;

        // Create a range of boundary conditions which is used for a possible substring
        for (let beg = 0; beg < input.length; beg++) {
            for (let end = beg; end < input.length; end++) {
                total += this.isValidPalindrome(input, beg, end) ? 1 : 0;
            }
        }

        return total;
    }

    /**
     * Brute force recursive operation to compute the count. We start with the 2 extremes and take 3 directions at each step. 1 direction is to
     * identify if the current string is a valid palindrome. We do this by recursively computing the state of the substring inside. The other 2
     * cases include: Taking the substring getting rid of the 1st element and taking the substring getting rid of the last element.
     * 
     * Time: O(3^n) since we are taking 3 directions for each possible input character range.
     * Space: O(n) + O(n) for the recursion depth and the storage of the total palindrome found.
     * 
     * @param input 
     */
    countBFRecursive(input: string) {

        const result: Set<string> = new Set();

        function countHelper(input: string, beg: number, end: number) {

            // Base Conditions where the palindrome is valid
            if (end < beg) return true;
            if (end == beg) {
                result.add(`${beg}|${end}`);
                return true;
            }
    
            countHelper(input, beg, end - 1)
            countHelper(input, beg + 1, end)

            // Case: checking if the strings are palindrome using extremes matching and recursive substring.
            if (input[beg] === input[end] && countHelper(input, beg + 1, end - 1)) {
                result.add(`${beg}|${end}`);
                return true;
            } else { 
                return false;
            }
        }

        countHelper(input, 0, input.length - 1);
        // console.log(result)

        return result.size;
    }

    countDPTopDown(input: string) {

        const result: Set<string> = new Set();

        function countHelper(input: string, beg: number, end: number, dp: boolean[][]) {

            // Base Conditions where the palindrome is valid
            if (end < beg) return true;
            if (end == beg) {
                result.add(`${beg}|${end}`);
                dp[beg][end] = true;
                return true;
            }

            if (dp[beg][end] !== undefined) {
                return dp[beg][end];
            }
    
            countHelper(input, beg, end - 1, dp)
            countHelper(input, beg + 1, end, dp)

            // Case: checking if the strings are palindrome using extremes matching and recursive substring.
            if (input[beg] === input[end] && countHelper(input, beg + 1, end - 1, dp)) {
                result.add(`${beg}|${end}`);
                dp[beg][end] = true;
                return true;
            } else { 
                return false;
            }
        }

        countHelper(input, 0, input.length - 1, Array.from({length: input.length}, () => Array(input.length)));
        // console.log(result)
 
        return result.size;
    }

    /**
     * Similar as the recursive brute force solution, but we also use memoization to save the pre-computed results.
     * 
     * Time: O(n^2) since the results are computed at least once for each possible pair of beg and end.
     * Space: O(n^2) + O(n) for storing the memoized results and also the recursion depth.
     * 
     * @param input 
     */
    countDPBottomsUp(input: string) {

        // Create a DP table defining the number of valid palindromic strings for the substrings starting at (row) and ending at (col).
        const dp: boolean[][] = Array.from({length: input.length}, () => Array(input.length).fill(false));

        // Init boundary conditions (for each substring starting and ending at the idx position, there is only 1 valid palindrome.)
        for (let idx = 0; idx < input.length; idx++) dp[idx][idx] = true;

        let total = input.length;
        
        // Build the solution for all character range. DP row represents the starting char and col represents the ending char.
        for (let beg = input.length - 1; beg >= 0; beg--) {
            for (let end = beg + 1; end < input.length; end++) {
                if (input[beg] === input[end] && beg + 1 === end) {
                    // If the 2 extremes are equal and there is nothing in between
                    dp[beg][end] = true
                    total++
                } else if (input[beg] === input[end] && dp[beg + 1][end - 1]) {
                    // If the extremes are matching, we need to ensure the left over substrings are also creating a palindrome
                    dp[beg][end] = true
                    total++
                }
            }
        }

        return total;
    }

    /**
     * Returns true if the input string with boundary conditions is a valid palindrome.
     * @param input 
     * @param beg 
     * @param end 
     */
    isValidPalindrome(input: string, beg: number, end: number) {
        while(end >= beg) { 
            if (input[end--] !== input[beg++]) return false;
        }

        return true;
    }
}

function testCountPalindromeSubstring(input: string) {
    const counter = new PalindromicSubstringsCounter();
    console.log(`Counter BF for input: ${input} returned: ${counter.countBF(input)}`);
    console.log(`Counter BF Recursive for input: ${input} returned: ${counter.countBFRecursive(input)}`)
    console.log(`Counter DP Top down for input: ${input} returned: ${counter.countDPTopDown(input)}`)
    console.log(`Counter DP bottoms up for input: ${input} returned for ${counter.countDPBottomsUp(input)}`);
}

testCountPalindromeSubstring("abdbca")
testCountPalindromeSubstring("cddpd")
testCountPalindromeSubstring("pqr")