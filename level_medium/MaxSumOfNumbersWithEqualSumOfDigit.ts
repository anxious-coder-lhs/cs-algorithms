import { S_IFDIR } from "constants";
import { diffieHellman } from "crypto";

/**
 * Problem: https://leetcode.com/discuss/interview-question/915683/
 * 
 * Solution is based on the hashing technique. For any element which has the same digit sum, we can hash it by digit sum
 * and save it. Once we have any item saved, we can compamake all possible pairs of it and calculate the maximum sum.
 * 
 * However, creating every pair is O(n*n), which can be optimized, by only keeping track of the max element so far.
 * If the new element, creates a sum which is max than the earlier, we know the new curr is maximum of all the previously
 * seen.
 * 
 * Time: O(n), Space: O(n) for hashing.
 */
function findMaxSum(input: number[]): number {
    // Will keep track of the max element for each pair of the digit sum that we find.
    const map = new Map<number, number>();
    let max = -Infinity;
    input.forEach(curr => {
        const digitSum = getDigitSum(curr)
        if (map.has(digitSum)) {
            const prev = map.get(digitSum)
            max = Math.max(max, prev + curr)
            // Update the previous stored element for digit sum if this is greater.
            map.set(digitSum, Math.max(prev, curr));
        } else {
            map.set(digitSum, curr);
        }
    });

    return max !== -Infinity ? max : -1;
}

function getDigitSum(elem) {
    let sum = 0;
    while(elem !== 0) {
        sum += elem % 10;
        elem = Math.floor(elem / 10)
    }

    return sum
}

console.log(findMaxSum([51, 71, 17, 42]))
console.log(findMaxSum([42, 33, 60]))
console.log(findMaxSum([51, 32, 43]))