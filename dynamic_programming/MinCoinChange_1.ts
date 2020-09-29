/**
 * Problem: Given an infinite supply of 'n' denominations and a target amount, find out the minimum number
 * of coins needed to make up the target amount.
 * Example I/P: [1, 2, 3], Target Amount: 5, Output: 2
 * 
 * Brute force technique creates all the combinations of the denominations to make up the target amount.
 * It then figures out the set with the least coins.
 * 
 * Complexity: Time - O(2^(N + A)) where N is the target amount and A is the amount.
 * Space - O(N + A) for the recursion depth.
 * 
 * @param denominations 
 * @param targetAmount 
 * @param current 
 */
function findMinimalCoinChangeBF(denominations: number[], targetAmount: number, current = 0) {   
    
    // Validations
    if (denominations.length === 0 || targetAmount === 0) return 0;

    // Base case for recursion. Use Infinity in base case to get the least value.
    if (current >= denominations.length) return Infinity;

    // Scenario to include the item for the coin change, adding 1 to the coins needed.
    const coinsNeededWithInclusion = (targetAmount >= denominations[current]) ?
        1 + findMinimalCoinChangeBF(denominations, targetAmount - denominations[current], current) :
        Infinity;

    // Skip the item for the coin change.
    const coinsNeededWithExclusion = findMinimalCoinChangeBF(denominations, targetAmount, current + 1);

    return Math.min(coinsNeededWithExclusion, coinsNeededWithInclusion);
}

function testFindMinimalCoinChangeBF(denominations: number[], targetAmount: number) {
    console.log(`Minimum Coin Change need for ${denominations} and amount ${targetAmount} = ${findMinimalCoinChangeBF(denominations, targetAmount)}`)
}

testFindMinimalCoinChangeBF([1, 2, 3], 5);
testFindMinimalCoinChangeBF([1, 2, 3], 11);