function wordBreak(s: string, wordDict: string[]): boolean {
    const result: {[k: number]: boolean} = {}
    wordDict.forEach(word => result[word.length] = true)
    const dictSizes = Object.keys(result).map(l => parseInt(l));
    const wordSet = new Set(wordDict);
    
    // Init the DP table for memoization and solve recursively.
    const dp: boolean[][] = Array.from({length: s.length})
    return wordBreakHelper(s, wordSet, dictSizes, 0, s.length, dp)
};

function wordBreakHelper(s: string, wordSet: Set<string>, dictSizes: number[], beg: number, end: number, dp: boolean[][]): boolean {
    
    // Base Condition, returns true.
    if (beg >= end) {
        return true;
    }
    
    for (let idx = 0; idx < dictSizes.length; idx++) {
        const gap = dictSizes[idx];
        const term = beg + gap;
        if (term <= end && contains(s, wordSet, beg, term)) {
            
            // Init dp.
            dp[term] = dp[term] || [];
            
            if (dp[term][end] === undefined) {
                dp[term][end] = wordBreakHelper(s, wordSet, dictSizes, term, end, dp)
            }
                
            if (dp[term][end]) {
                dp[beg] = dp[beg] || [];
                dp[beg][end] = true;
                return dp[beg][end];    
            }
        }
    }
    
    dp[beg] = dp[beg] || [];
    dp[beg][end] = false;
    return dp[beg][end];
}

function contains(s: string, wordSet: Set<string>, beg: number, end: number) {
    const slice = s.slice(beg, end)
    console.log(slice)
    return wordSet.has(slice);
}