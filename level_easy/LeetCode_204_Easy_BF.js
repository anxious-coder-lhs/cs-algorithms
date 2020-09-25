/**
 * @param {number} n
 * @return {number}
 */
// Problem: Count the number of prime numbers less than a non-negative number, n.

// Input: A non negative number, range is not provided.
// Output: Number of primes (not the ones.)
var countPrimes = function(n) {
    let count = 0
    for (let i=2;i<n;i++) {
        if (isPrime(i)) {
            count++
        }
    }
    
    return count
};

function isPrime(n) {
    const root = Math.floor(Math.sqrt(n))
    for (let i=2;i<=root;i++) {
        if (n % i === 0)
            return false
    }
    
    return true
}
