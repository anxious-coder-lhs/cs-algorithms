/**
 * Leet Code 351
 * 
 * This is a backtracking problem, since all the possible permutations of elements needs to be figured out. However,
 * each solution space is bound by few constraints which do not allow the solution to succeed. This is where we backtrack
 * the solution space.
 * 
 * Time: O(n!) where n is at max 9, since all the possible permutations of that length is required.
 * Space: O(n) since that is the max stack size.
 * 
 * @param m 
 * @param n 
 */
function numberOfPatterns(m: number, n: number): number {
    const result: {total: number} = {total: 0};
    const used: boolean[] = Array(10).fill(false)
    for (let stIdx = 1; stIdx <= 9; stIdx++) {
        used[stIdx] = true
        findNumberOfPatterns(m, n, stIdx, 1, used, result)
        used[stIdx] = false
    }
    return result.total;
};

function findNumberOfPatterns(m: number, n: number, last: number, size: number, used: boolean[], result: {total: number}) {
    
    // If we have created a length in the target range, add to result.
    if (size >= m && size <= n) result.total++
    
    // Terminating the branch if the total length exceeds.
    if (size >= n) return
    
    for (let next = 1; next <= 9; next++) {
        // if the next index is not used already and a valid move
        if (!used[next] && isValid(last, next, used)) {
            used[next] = true
            findNumberOfPatterns(m, n, next, size + 1, used, result)
            used[next] = false    
        }
    }
}

const JUMP_TABLE: number[][] = Array.from({length: 10}, () => Array(10))
JUMP_TABLE[1][3] = JUMP_TABLE[3][1] = 2
JUMP_TABLE[4][6] = JUMP_TABLE[6][4] = 5
JUMP_TABLE[7][9] = JUMP_TABLE[9][7] = 8
JUMP_TABLE[1][7] = JUMP_TABLE[7][1] = 4
JUMP_TABLE[2][8] = JUMP_TABLE[8][2] = 5
JUMP_TABLE[3][9] = JUMP_TABLE[9][3] = 6
JUMP_TABLE[1][9] = JUMP_TABLE[9][1] = JUMP_TABLE[7][3] = JUMP_TABLE[3][7] = 5

function isValid(last: number, next: number, used: boolean[]) {
    const jump = JUMP_TABLE[next][last]
    return jump === undefined || used[jump] === true
}