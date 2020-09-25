// Problem: Given 2 strings, check if the 1st string is a subsequence in the second string. (Order should not change.)

// Input: 2 strings - undefined, any length.
// Output: true/false.


// Solution: Sliding Window O(n) runtime, O(1) space.

function isSubSequence(string1, string2) {
// Simple validation for falsy
//     string2 smaller than string1, either is undefined.


// Use Sliding window approach.
// Create a sliding window using 2 pointers equaling the length of 1st string.
// Navigate the 2nd string char by char
//      Keep the comparison going for the length of sliding window.
//      Update the sliding window if it comparison breaks.
//      true if it all succeeds.


    if (!string1 || !string2 || string1.length > string2.length)
        return false

    let idx1 = 0, idx2 = 0
    while(idx2 < string2.length) {
      if (string1[idx1] === string2[idx2]) {
        idx1++
      } else {
        idx1 = 0
      }
      idx2++

      if (idx1 === string1.length) return true
    }
    return false
}

clear()
console.log(isSubSequence("", ""))
console.log(isSubSequence(undefined, undefined))
console.log(isSubSequence("ab", "a"))
console.log(isSubSequence("ab", "abc"))
console.log(isSubSequence("ab", "abab"))
console.log(isSubSequence("abc", "adabdabc"))
console.log(isSubSequence("abc", "logabc"))
console.log(isSubSequence("labc", "logabc"))


function isSubSequence1(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log("====")
console.log(isSubSequence1("", ""))
console.log(isSubSequence1(undefined, undefined))
console.log(isSubSequence1("ab", "a"))
console.log(isSubSequence1("ab", "logabc"))
console.log(isSubSequence1("abd", "abab"))
console.log(isSubSequence1("abc", "adabdabdc"))
