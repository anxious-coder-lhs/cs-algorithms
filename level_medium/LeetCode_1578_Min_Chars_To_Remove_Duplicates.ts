/**
 * Leet Code 1578
 * 
 * Solution finds out all the duplicate elements using a single iteration. The problem requires removing all but
 * one duplicate consequitive chars. The only character remaining should be the most expensive char. This can
 * be done by calculating the total cost of the group and the max cost of any item in the group.
 * 
 * Time: O(n), Space: O(1)
 * 
 * @param s 
 * @param cost 
 */
function minCost(s: string, cost: number[]): number {
    let totalCost = 0, last = '';
    let totalCostCurr = 0, maxCostCurr = 0;
    for (let pos = 0; pos < s.length; pos++) {
        const curr = s[pos];
        if (last === curr) {
            totalCostCurr += cost[pos];
            maxCostCurr = Math.max(cost[pos], maxCostCurr);
        } else {
            totalCost += (totalCostCurr - maxCostCurr);
            totalCostCurr = cost[pos];
            maxCostCurr = cost[pos];
        }
        last = curr;
    }
    
    // Adding for possible duplicates at the tail.
    totalCost += (totalCostCurr - maxCostCurr);
    
    return totalCost;
};