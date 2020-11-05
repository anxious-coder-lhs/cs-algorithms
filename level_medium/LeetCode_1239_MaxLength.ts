/**
 * Problem: Leet Code 1239
 * Solution uses a backtracking approach to make all the possible combinations or sets of the input string.
 * With that, we calculate that there are unique characters and should we backtrack. If not, the entire string
 * is created recursively keeping track of the maximum length.
 * 
 * @param arr 
 */
function maxLength(arr: string[]): number {
    return backTrackHelper("", arr, 0)
};

function backTrackHelper(str: string, arr: string[], idx: number): number {
    
    if (idx >= arr.length) {
        return str.length;
    }
    
    const newStr = str + arr[idx]
    let maxLengthWithInclusion = 0;
    if (isUnique(newStr)) {
        maxLengthWithInclusion = backTrackHelper(newStr, arr, idx + 1);
    }
    
    return Math.max(maxLengthWithInclusion, backTrackHelper(str, arr, idx + 1));
}

// Using the frequency counter for each character to see if we have any duplicates.
function isUnique(str: string) {
    
    const chars: boolean[] = Array(26).fill(false);
    for (let idx = 0; idx < str.length; idx++) {
        const charCode = str.charCodeAt(idx) - 97;
        if (chars[charCode] === true) return false;
        chars[charCode] = true;
    }
    
    return true;
}