// Input might contain spaces, upper and lower cases, special characters, etc.
// Input might be null or undefined
// Results as a map {a: 0, b: 2, e: 4}
// Result, additional characters could be 0 or undefined    
function countChars(source) {
    // Input check for sanity
    if (source === undefined)
        return {}
    
    const result = {}
    // Creating empty map
    for (let char of source) {
        // Javascript regular expressions are very slow as compared to simple boolean expressions
        // if (/[a-z0-9]/.test(char)) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase()
            // result[char] = result[char] !== undefined ? result[char] + 1 : 1    
            result[char] = ++result[char] || 1
        }
    }
    return result
    // Looping over all the elements O(n)
        // Add char to the output
        // Check for the cases and special characters
    // Return the resutl
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0)
    if ((code > 96 && code < 123) ||
        (code > 64 && code < 91) ||
        (code > 47 && code < 58)) {
        return true
    }
    return false
}
