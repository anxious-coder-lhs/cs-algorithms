/**
 * Problem: Given the infinite supply of the denominations, find out the total number of unique ways to make the total amount.
 * 
 * Solution: Brute force solution finds out all the possible ways of making the coin change by creating
 * all the subsets possible with the given denominations that makes up the total target amount.
 * 
 * Complexity: Time O(2^(T+C)) C being the denominations and T being the max total.
 * Complexity: Space O(T+C) as the max depth for recursion.
 * 
 * @param denominations 
 * @param totalAmount 
 */
function countCoinChangeBF(denominations: number[], totalAmount: number, item: number = 0): number {

    // Base condition to exit, if there are no items left there is 0 ways.
    if (item >= denominations.length) return 0;

    // Base condition to return say there is 1 way to make target amount as 0.
    if (totalAmount === 0) return 1;

    // Include the denomination in the total count, only if it is less than total amount.
    const totalAmountWithInclusion = (denominations[item] <= totalAmount) ?
        countCoinChangeBF(denominations, totalAmount - denominations[item], item) :
        0;

    // Exclude the denomination without making any total amount change.
    const totalAmountWithExclusion = countCoinChangeBF(denominations, totalAmount, item + 1);
    return totalAmountWithExclusion + totalAmountWithInclusion;
}

function testCoinChangeBF(denominations: number[], totalAmount: number) {
    console.log(`Total Ways of making coin change for denominations: ${denominations} and total amount: ${totalAmount} = ${countCoinChangeBF(denominations, totalAmount)}`)
}

testCoinChangeBF([1, 2, 3], 5);