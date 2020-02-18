// Problem: Given 2 numbers, we have to find if there is same frequency of digits.

// Input...
// 2 numbers - pos/neg. undefined, normal size, 

// Output...
// true/false. true if frequency is same, neg/pos does not count.


// O(n) runtime and O(n) space.
function sameFrequency(num1, num2) {

    if (num1 === 0 && num2 === 0)
        return true

    const frequencyMap = Array(10).fill(0)
    let totalCount = 0
    while(num1 > 0) {
        const digit = num1 % 10
        frequencyMap[digit]++
        totalCount++
        num1 = Math.floor(num1/10)
    }
// Count the frequency of digits in num1 
//      using modulus operation and adding to digits
//      using digits [0-9] using an int array

    while(num2 > 0) {
        const digit = num2 % 10
        if (frequencyMap[digit] > 0) {
            totalCount--
            frequencyMap[digit]--
            num2 = Math.floor(num2/10)
        } else {
            return false
        }
    }

    return totalCount === 0
// Iterating over each digit in num2 using modulus operation.
//      decrementing the frequency of each array
//          exit condition if there is < 0 frequency or total is pending.     
}

clear()
console.log(sameFrequency(0, 0))
console.log(sameFrequency(0, 10))
console.log(sameFrequency(11, 10))
console.log(sameFrequency(1, 9))
console.log(sameFrequency(21, 12))
