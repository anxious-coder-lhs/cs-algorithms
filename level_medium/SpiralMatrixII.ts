/**
 * Leet Code 59: Spiral Matrix II
 * 
 * Two Solutions are available:
 *  Just like the Spiral Matrix I, we fill the items layer by layer by setting the perimeter boundaries to extremes.
 * Then, we move in each direction, horizontal top, vertical right, horizontal bottom, vertical left and so on. After
 * completing each layer, we squeeze the perimter boundary one by one, until we get to an invalid.
 * 
 *  2nd solution used here uses the directionality matrix which allows us to change the direction with each iteration.
 * This allows us to use one loop till all the items are done. At each step, we need to change the direction of 
 * the pivot to either left, bottom, right, or top. This can be done as we hit the wall.
 * 
 * Time: O(n*n) since each position needs to be visited once. Space: O(1) since no additional space is used apart
 * from the result.
 * 
 * @param n 
 */
function generateMatrix(n: number): number[][] {
    const result: number[][] = Array.from({length: n}, () => Array(n).fill(undefined));
    let [row, col] = [0, 0], counter = 1, dIdx = 0;
    while(true) {
        result[row][col] =  counter++;
        let [newRow, newCol] = getNextIdx(row, col, dIdx);
        if (!isValidIdx(newRow, newCol, n) || isOccupied(result, newRow, newCol)) {
            // Update the direction
            dIdx = (dIdx + 1) % 4;
            [newRow, newCol] = getNextIdx(row, col, dIdx);
            
            // Check if all items are filled.
            if (!isValidIdx(newRow, newCol, n) || isOccupied(result, newRow, newCol)) break;
        }
        
        row = newRow; col = newCol;
    }
    
    return result;
};

function isValidIdx(row: number, col: number, max: number) {
    return row >= 0 && row < max && col >= 0 && col < max;
}

function isOccupied(result: number[][], row: number, col: number) {
    return result[row][col] !== undefined;
}

function getNextIdx(row: number, col: number, dIdx: number): number[] {
    const directions: number[][] = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];
    const direction = directions[dIdx];
    return [row + direction[0], col + direction[1]]
}