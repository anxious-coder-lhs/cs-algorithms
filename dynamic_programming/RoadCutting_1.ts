/**
 * Problem: Given a rod of length 'n', we need to cut the road and sell it in order to maximize profits.
 * Each length of the rod has a different price attached to it and hence different distribution of the road cut
 * might provide different profit.
 * 
 * Example Problem: Lengths: [1, 2, 3, 4, 5], Prices: [2, 6, 7, 10, 13], Rod Length: 5
 * Example Output: Max Profit: 14, Rod Lengths: [1, 2, 2]
 * 
 * Solution: Brute Force technique to find all the possible subsets of distribution, i.e. cutting the road with all
 * possible lengths and maximizing the profits taken out.
 * 
 * Complexity: Time O(2^N) since all the possible space tree needs to be created.
 * Space O(N + L) since at max the recursion tree will of (all possible lengths) + (Max length)
 * 
 * @param lengths 
 * @param prices 
 * @param maxLength 
 * @param currentItem 
 */
function cutRoadForMaximumProfitBF(lengths: number[], prices: number[], maxLength: number, currentItem: number = 0): number {

    // Base conditions
    if (lengths.length !== prices.length || prices.length === 0 || maxLength <= 0) return 0

    // Base conditions to stop recursion.
    if (currentItem >= lengths.length) return 0

    let priceWithInclusion = 0
    if (lengths[currentItem] <= maxLength) {
        // With inclusion try including the price of the item, and recursively calling to maximize rest of the price including the current item.
        priceWithInclusion = prices[currentItem] + cutRoadForMaximumProfitBF(lengths, prices, maxLength - lengths[currentItem], currentItem);
    }
    
    // Exclude the current item and maximize the results using rest of the items.
    const priceWithExclusion = cutRoadForMaximumProfitBF(lengths, prices, maxLength, currentItem + 1);
    return Math.max(priceWithExclusion, priceWithInclusion);
}

function testCutRoadForMaxProfitBF(lengths: number[], prices: number[], maxLength: number) {
    console.log(`Max Prices for road cutting for lengths: ${lengths} with prices: ${prices} and max length: ${maxLength} = ${cutRoadForMaximumProfitBF(lengths, prices, maxLength)}`);
}

testCutRoadForMaxProfitBF([1, 2, 3, 4, 5], [2, 6, 7, 10, 13], 5);