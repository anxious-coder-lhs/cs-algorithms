// Problem: Given a positive integer, return its corresponding column title as appear in an Excel sheet.
// Input can be any positive integer 0 or more.
// Output the encoded string.

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    const map = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const result = []
    if (n <= 26) {
        return map[n - 1]
    }
    
    while(n >= 1) {
        n--
        let rem = n % 26
        n = Math.floor(n / 26)
        // result.push(getCode(rem))
        result.push(map[rem])
        
    }
    return result.reverse().join("")
};

function getCode(offset) {
    return String.fromCharCode(65 + offset)
}
