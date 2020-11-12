import { count, countReset } from "console";

/**
 * https://leetcode.com/discuss/interview-question/398026/
 * 
 * Solution uses the sliding window pattern. Here, the sliding window is created for the entire length of the
 * consequtive letters. The sliding window can be fixed, but that is not an optimal correct solution. The sliding
 * window with repeated characters allow for choosing the min possible swaps which would only be repeat/3
 * 
 * Time: O(n), Space: O(1)
 * 
 * @param input 
 */
function findMinMoves(input: string): number {

    if (input.length < 3) return 0;
    let last = '', curr = '', swaps = 0, counter = 1, idx = 0
    while(true) {
        curr = input[idx] || ''
        if (last === curr) counter++
        else {
            if (counter >= 3) {
                swaps +=  Math.floor(counter / 3)
            }
            counter = 1
        }
        last = curr
        idx++
        if (curr === '') break;
    }

    return swaps;
}

console.log(findMinMoves("baaaaa"))
console.log(findMinMoves("baaabbaabbba"))
console.log(findMinMoves("baabab"))
console.log(findMinMoves("baaaab"))
console.log(findMinMoves("baaaaaab"))
console.log(findMinMoves("baaaaaaaaaab"))