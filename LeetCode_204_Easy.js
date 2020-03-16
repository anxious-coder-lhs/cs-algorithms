/**
 * @param {number} n
 * @return {number}
 */
// Problem: Count the number of prime numbers less than a non-negative number, n.

// Input: A non negative number, range is not provided.
// Output: Number of primes (not the ones.)

var countPrimes = function(n) {
    
    if (n<=2) return 0
    
    // Taking an array of (n) in order to cover 0 inclusive and n exclusive.
    const table = Array(n).fill(true)
    table[0] = table[1] = false
    const root = Math.sqrt(n)

    // Removing 0 and 1 from the total count.
    let total = n - 2

    // Counting the index till root so that 
    for (let i=2;i<=root;i++) {
        if (table[i]) {
            for (let j=i*i;j<n;j+=i) {
                if (table[j]) {
                    total--
                    table[j] = false
                }
            }    
        }
    }

    // console.log(table)
    // return table.filter(elem => elem).length
    return total
};
