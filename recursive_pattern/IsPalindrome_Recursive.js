function isPalindrome(string, start, end) {

    if (start > end)
        return true

    if (start === undefined)
        start = 0

    if (end === undefined)
        end = string.length - 1
    
    return string[start] === string[end] && isPalindrome(string, start + 1, end - 1)
}

clear()
console.log(isPalindrome("abc"))
console.log(isPalindrome("abcde"))
console.log(isPalindrome("abcba"))
console.log(isPalindrome("abcba1"))
console.log(isPalindrome("a"))



function isPalindrome1(string) {
    if (string.length <= 1) return true
    return string[0] === string.slice(-1) && isPalindrome(string.slice(1, -1))
}

console.log("_____")
console.log(isPalindrome1("abc"))
console.log(isPalindrome1("abcde"))
console.log(isPalindrome1("abcba"))
console.log(isPalindrome1("abcba1"))
console.log(isPalindrome1("a"))
