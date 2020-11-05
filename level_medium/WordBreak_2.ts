function wordBreak(s: string, wordDict: string[]): boolean {
    const wordSet = new Set(wordDict);
    const dp: boolean[][] = Array.from({length: s.length})
    return wordBreakHelper(s, wordSet, 0, s.length, dp)
};

function wordBreakHelper(s: string, wordSet: Set<string>, beg: number, end: number, dp: boolean[][]): boolean {
    
    // Base Condition, returns true.
    if (beg >= end) {
        return true;
    }
    
    for (let term = beg + 1; term <= end; term++) {
        if (term <= end && contains(s, wordSet, beg, term)) {            
            
            // Init dp.
            dp[term] = dp[term] || [];
            
            if (dp[term][end] === undefined) {
                dp[term][end] = wordBreakHelper(s, wordSet, term, end, dp)
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
    return wordSet.has(slice);
}