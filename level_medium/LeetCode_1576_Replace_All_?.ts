/**
 * Solution uses multiple pointer approach to point to the next and last element. With eachs step, we just need
 * to find a suitable replacement char, which can be from 'a,b,c'. This can be find in linear time.
 * 
 * Time: O(n), Space: O(1)
 * @param s 
 */
function modifyString(s: string): string {
    const strArr = s.split('');
    let last = 0;
    for (let pos = 0; pos < strArr.length; pos++) {
        if (s[pos] === '?') {
            const next = pos < strArr.length - 1 ? s.charCodeAt(pos + 1) : 0;             const replaceCode = getReplacementCode(last, next);
            strArr[pos] = String.fromCharCode(replaceCode);
            last = replaceCode;
        } else {
            last = s.charCodeAt(pos);
        }
    }
    
    return strArr.join("");
};
    
function getReplacementCode(last: number, next: number) {
    for (let char = 97; char <= 122; char++) {
        if (char !== last && char !== next) return char;
    }
}