/**
 * Leet Code 1573
 * 
 * Solution is essentially a combination problem. The string can be divied into 3 sections with the help of 2 pointers/cuts.
 * Each cut can only be created such that the number of 1s are equal, so essentially at a min requiring the needed 1s, while
 * at maximum requiring the needed 1s. This creates a combinatory choice of choosing the cut point. For each possible
 * cut point in 1st, we can choose a cut point in 2nd.
 * 
 * Time: O(n) since the scan is required only linearly.
 * Space: O(1) since no other space is needed.
 *  
 * @param s 
 */
function numWays(s: string): number {
    const onesCount = countOnes(s);
    const mod = 10 ** 9 + 7;

    // If the equal partition cannot be made.
    if (onesCount % 3 !== 0) return 0;

    // If the counts are 0, we have to make combinations for the central array, assuming 0 and 0 at ends.
    // So, we have 1 + 2 + 3 + .............. + (n-1) + (n-2), leading the sum range.
    if (onesCount === 0) {
        return ((s.length - 2) * (s.length - 1) / 2) % mod;
    }
    
    // Else, find all possible split positions for split 1 and split 2.
    let ones = 0, possStr1 = 0, possStr2 = 0, curr = 0, maxOnes = onesCount/3;
    for (let idx = 0; idx < s.length; idx++) {
        ones += s[idx] === '1' ? 1 : 0;
        if (ones === maxOnes) possStr1++;
        else if (ones === 2*maxOnes) possStr2++;
    }
    
    return possStr1 * possStr2 % mod;
};

function countOnes(s: string): number {
    let total = 0;
    for (let idx = 0; idx < s.length; idx++) {
        if (s[idx] === '1') total++;
    }
    return total;
}