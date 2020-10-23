class MinStringDeletionPalindrome {

    /**
     * We recursively go over the input string in order to find out the deletion count. At each recursion level,
     * we keep a counter of the number of deletions made, starting with 0. With each recursion, there is one of 
     * the 2 possibilities. If the ends match, we recurse for the substring. If the ends do not match, we either
     * skip the left or the right, either ways there is 1 deletion made. We calculate the min of any deletion.
     * 
     * Time: O(2^n) since at each character position, we make 2 choices for recursion.
     * Space: O(n) since the max depth of recursion is n.
     * 
     * @param input 
     */
    getMinDeletionBF(input: string) {

        function find(beg: number, end: number, deletions: number = 0) {

            // Base Conditions
            if (end <= beg) {
                return deletions;
            }

            // Case 1: Ends are equal, so continue with the substring.
            if (input[beg] === input[end]) {
                return find(beg + 1, end - 1, deletions)
            }

            // Case 2: Ends are not equal, check with left included or right included.
            return Math.min(find(beg + 1, end, deletions + 1), find(beg, end - 1, deletions + 1))
        }

        return find(0, input.length - 1, 0)
    }

    /**
     * Adds memoization to the recursive solution.
     * 
     * Time: O(n^2) since we calculate result for each pair of beg and end at least once in the worst case.
     * Space: O(n^2) + O(n) for stage and recursion.
     * 
     * @param input 
     */
    getMinDeletionDPTD(input: string) {

        const dp: number[][] = Array.from({length: input.length}, () => Array(input.length));
        function find(beg: number, end: number, deletions: number = 0) {

            // Base Conditions
            if (end <= beg) {
                return deletions;
            }

            if (dp[beg][end] !== undefined) {
                return dp[beg][end];
            }

            // Case 1: Ends are equal, so continue with the substring.
            if (input[beg] === input[end]) {
                dp[beg][end] = find(beg + 1, end - 1, deletions)
                return dp[beg][end];
            }

            // Case 2: Ends are not equal, check with left included or right included.
            dp[beg][end] =  Math.min(find(beg + 1, end, deletions + 1), find(beg, end - 1, deletions + 1))
            return dp[beg][end];
        }

        return find(0, input.length - 1, 0)
    }

    /**
     * Builds a DP table using all the valid pairs of beg and end. For all the pairs with the same beg and end, the
     * deletions are 0, for others we use the following forumale:
     * dp[beg][end] = 1 + Min(dp[beg][end - 1], dp[beg + 1][end])
     * 
     * Time: O(n^2) and Space: O(n^2) for making all valid combinations of beg and end.
     * 
     * @param input 
     */
    getMinDeletionDPBU(input: string) {

        // DP Table
        const dp: number[][] = Array.from({length: input.length}, () => Array(input.length));

        // Init for the diagnols
        for (let idx = 0; idx < input.length; idx++) dp[idx][idx] = 0;

        // Creating for all valid pairs of start and end.
        for (let beg = input.length - 1; beg >= 0; beg--) {
            for (let end = beg + 1; end < input.length; end++) {
                if (input[beg] === input[end]) {
                    // Case 1: Extremes match, total deletions would be min of the center substring.
                    // Additional check of 0 is done for the edge cases, where there is nothing valid in subrange.
                    dp[beg][end] = (dp[beg + 1][end - 1] || 0);
                } else {
                    // Ends do not match, deletions are 1 + min of left or right.
                    dp[beg][end] = 1 + Math.min(dp[beg + 1][end], dp[beg][end - 1])
                }
            }
        }

        return dp[0][input.length - 1]
    }

}

function testMinStringDeletions(input: string) {
    const counter = new MinStringDeletionPalindrome();
    console.log(`BF: Min Items deletion for the input ${input} would be ${counter.getMinDeletionBF(input)}`);
    console.log(`DP TD: Min Items deletion for the input ${input} would be ${counter.getMinDeletionDPTD(input)}`);
    console.log(`DP BU: Min Items deletion for the input ${input} would be ${counter.getMinDeletionDPBU(input)}`);
}

testMinStringDeletions("abdbca")
testMinStringDeletions("cddpd")
testMinStringDeletions("pqr")