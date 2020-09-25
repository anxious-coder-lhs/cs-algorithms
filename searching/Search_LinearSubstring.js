// Problem: Given a string1 and a string2, find all the occurences of the string1 that exists inside string2.
// Return index for each such occurences/matches.

function substr(string, pattern) {
// str1 - aabc, str2 - aaabc
// Given 2 strings, we have to compare all the characters of string2 with all the characters of string1.
// if there is a mismatch, we should try matching each character starting from the next position of parent string.
    
    if (pattern.length > string.length)
        return 0

    let count = 0
    for (let idx1 = 0;idx1<string.length;idx1++) {
        for (let idx2=0;idx2<pattern.length;idx2++) {
            if (string[idx1 + idx2] !== pattern[idx2]) {
                break
            }
        }

        if (idx2 >= pattern.length) {
            count++
        }
    }

    return count
}

clear()
console.log(substr("abc", "abcde"))
console.log(substr("", ""))
console.log(substr("abc", "abdeabc"))
console.log(substr("abc", "abdeabcdeabc"))
console.log(substr("abc", "abcabcabc"))
