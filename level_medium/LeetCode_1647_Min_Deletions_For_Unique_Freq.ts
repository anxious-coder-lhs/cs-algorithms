/**
 * Leet Code 1647
 * 
 * Solution uses the greedy algorithm, since we can only delete characters and not add characters. Since, we can
 * only delete characters, we can start deleting from any order as far as we are ensuring the unique property.
 * 
 * In order to achieve that, we count the frequency of each character. Once, it is done, we keep track of a seen
 * collection (maintained by the set) which tracks whether a particular frequency has been seen before for any
 * char. Since, the frequency has to be unique, we need to delete characters, if we find something which is already
 * existing. If the non-unique frequency is found, we can delete the characters, till we find a unique place for it.
 * 
 * Time: O(n) since each char is visited once. Space: O(1) since fixed storage is used.
 * 
 * @param s 
 */
function minDeletions(s: string): number {
    
    // Count Frequency of each character.
    const freq = Array(26).fill(0)
    for (let idx = 0; idx < s.length; idx++) 
        freq[s.charCodeAt(idx) - 97]++
    
    
    // Make necessary deletions to keep the duplicates unique with greedy approach (1st one first).
    let deletions = 0;
    const uniqFreq = new Set<number>()
    for (let idx = 0; idx < 26; idx++) {
        // Keep deleting the char till we find a frequency of the char which is unique (till now - greedily)
        while(freq[idx] > 0 && uniqFreq.has(freq[idx])) {
            deletions++
            freq[idx]--
        }
        uniqFreq.add(freq[idx])
    }
    
    return deletions
};