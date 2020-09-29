/**
 * Problem: Given a rod of length 'n', we need to cut the road and sell it in order to maximize profits.
 * Each length of the rod has a different price attached to it and hence different distribution of the road cut
 * might provide different profit.
 * 
 * Example Problem: Lengths: [1, 2, 3, 4, 5], Prices: [2, 6, 7, 10, 13], Rod Length: 5
 * Example Output: Max Profit: 14, Rod Lengths: [1, 2, 2]
 * 
 * Solution: Bottoms Up DP technique to find the solution to sub-problems of each max length and each length item.
 * The net result including all the items and the net max length is hence computed.
 * 
 * Complexity: Time O(N * L) for all the N length items and the max length.
 * Space O(N * L) for the storage space for all sub-problems.
 * 
 * @param lengths 
 * @param prices 
 * @param maxLength 
 * @param currentItem 
 */
function cutRoadForMaximumProfitDP(lengths: number[], prices: number[], maxLength: number): {
    chosenLengths: number[], maxPrice: number
} {

    // Base conditions
    if (lengths.length !== prices.length || prices.length === 0 || maxLength <= 0) return {
        chosenLengths: [], maxPrice: 0
    }

    // Create a DP table for bottoms up building of the results and initiate it.
    const maxPrice: number[][] = Array.from({length: prices.length}, () => Array(maxLength + 1).fill(0));
    for (let idx = 0; idx < prices.length; idx++) {
        maxPrice[idx][0] = 0; // Net profit is 0 for all the items for maxLength: 0
    }

    for (let ml = 1; ml <= maxLength; ml++) {
        if (ml >= lengths[0])   // Net profit to be the price of length if length can fit in given max.=[]
            maxPrice[0][ml] = prices[0]
    }

    // Calculate the max price for all the lengths and all the max lengths
    for (let idx = 1; idx < prices.length; idx++) {
        for (let ml = 1; ml <= maxLength; ml++) {
            let maxPriceWithInclusion = 0;
            if (ml >= lengths[idx]) {
                maxPriceWithInclusion = prices[idx] + maxPrice[idx][ml - lengths[idx]]
            }
            
            const maxPriceWithExclusion = maxPrice[idx - 1][ml]
            maxPrice[idx][ml] = Math.max(maxPriceWithExclusion, maxPriceWithInclusion);
        }
    }

    // Backtrack to find which contituting weights were chosen for the results.
    let row = prices.length - 1, col = maxLength;
    const chosenLengths: number[] = []
    while(row >= 0 && col >= 1) {
        if (row === 0 || maxPrice[row][col] !== maxPrice[row - 1][col]) {
            // If the item was chosen and hence we saw the change in max prices.
            chosenLengths.push(lengths[row])
            col -= lengths[row]  // No change in row, item can repeat
        } else {
            row--
        }
    }

    return {
        chosenLengths,
        maxPrice: maxPrice[prices.length - 1][maxLength]
    }
}

function testCutRoadForMaxProfitDP(lengths: number[], prices: number[], maxLength: number) {
    const result = cutRoadForMaximumProfitDP(lengths, prices, maxLength);
    console.log(`Max Prices for road cutting for lengths: ${lengths} with prices: ${prices} and max length: ${maxLength} = Chosen Lengths: ${result.chosenLengths}, Max Price: ${result.maxPrice}`);
}

testCutRoadForMaxProfitDP([1, 2, 3, 4, 5], [2, 6, 7, 10, 13], 5);