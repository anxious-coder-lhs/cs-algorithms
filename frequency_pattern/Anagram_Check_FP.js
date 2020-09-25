// Input.....
// 1) Any String or undefined, empty in case nothing is passed.
// 2) String can contain anything including special characters, spaces, numbers, lower and upper case.
// Output.....
// Boolean - true or false. (false for empty strings, undefined etc.)
function checkAnagramsGn(stringOne, stringTwo) {
    if (stringOne === undefined || stringTwo === undefined || stringOne.length !== stringTwo.length) 
        return false
//     If length does not match, return immediately

    const frequencyMap = {}
    for (let char of stringOne) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1
    }
// Counting the frequency of each character in the string 1.

    for (let char of stringTwo) {
        if (frequencyMap[char] > 0)
            frequencyMap[char] -= 1
        else
            return false
    }
// For each character in string 2.
    // Comparing each character to be available exactly once in the frequency table.
// return status

    return true
}

// Input.....
// Only lower case chars, no special chars, spaces, numbers etc.
// Can be undefined, or empty string.
// Result....
// true if it matches, else otherwise.
function checkAnagramsRes(stringOne, stringTwo) {
    if (stringOne.length !== stringTwo.length)
        return false
//     do validation of empty, undefined, or length mismatch.

    const frequencyMap = Array(26).fill(0)
    for (let char of stringOne) {
        const code = char.charCodeAt(0)
        const offset = code - 97
        frequencyMap[offset]++
    }

    for (let char of stringTwo) {
        const code = char.charCodeAt(0)
        const offset = code - 97
        if (frequencyMap[offset] > 0)
            frequencyMap[offset]--
        else 
            return false
    }

    return true
// create a frequencyMap using the string one.
//     for each character in the string, increment the respective one in the map array. use the map array for counter, more cost effective.
// 
}

function isAnagramSort(s, t) {
    const str1 = [...s].sort()
    const str2 = [...t].sort()
    return compareArray(str1, str2)
}

function compareArray(one, two) {
    return one.length !== two.length && a.every((elem, idx) => elem === b[idx])
}
