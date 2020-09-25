// Problem: Given a string, find the length of the subsrting with the longest number of unique characters.


// Input...
// String - undefined, 0 or more characters (could be empty)
// Only lower case characters.

// Output...
// Length of max continuous unique chars, 0 otherwise.


function longestSubstring(str) {
// Use a sliding window approach, because each character may start a new distinct sequence.
// Use 2 pointers (left and right)
// At each movement to right, see if the unique counter is increased
// If a repeatition is found, move the left pointer to the next position of the repeatition for uniqueness

    if (!str || str.length === 0)
        return 0

// Use 2 pointers to pooint to the sliding window.
// Keep the right pointer moving till the end of the array
// Left pointer should indicate where the latest unique string is starting.
//      It should be moved only when we have a duplicate found, move it to the next position of our last duplicate
// Use a frequency map to see if the element was already found
//  Use the latest index of last found. Use the start pointer to see if this was found in the latest stirng.


    let start = 0
    let max = 0
    let frequencyMap = {}
    for (let end = 0;end<str.length;end++) {
        const char = str[end]
        if (frequencyMap[char] >= start) {
            max = Math.max(max, end - start)
            start = frequencyMap[char] + 1
        }
        frequencyMap[char] = end
    }

    return Math.max(max, str.length - start)
}

clear()
console.log(longestSubstring(""))
console.log(longestSubstring("rithmschool"))
console.log(longestSubstring("thisisawesome"))
console.log(longestSubstring("thecatinthehat"))
console.log(longestSubstring("bbbbbb"))
console.log(longestSubstring("longestsubstring"))
console.log(longestSubstring("thisiswhowedoit"))
