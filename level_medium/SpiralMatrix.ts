/**
 * Problem: LeetCode 54
 * Solution: Uses Multiple pointer approach. Marks the boundaries of the entire array using a row boundary marker
 * and the col boundary markers. Continue to iterate the matrix at the boundary conditions. Keep moving and squeezing
 * the boundary conditions inwards.
 * 
 * Complexity: Time O(n) since all the elements are traversed exactly once. Space: O(n) since all the elements
 * are stored once.
 * 
 * @param matrix 
 */
function spiralOrder(matrix: number[][]): number[] {
    
    if (matrix.length === 0 || matrix[0].length === 0) return []
    
    let rowEnd = matrix.length - 1, rowBeg = 0;
    let colEnd = matrix[0].length - 1, colBeg = 0;
    
    const result: number[] = []
    
    // Continue till the bounds are within the range.
    while(rowEnd >= rowBeg && colEnd >= colBeg) {
        // Add values from horizontal top
        for (let col = colBeg; col <= colEnd; col++) result.push(matrix[rowBeg][col])
        
        // Add values from vertical right
        for (let row = rowBeg + 1; row <= rowEnd; row++) result.push(matrix[row][colEnd])
        
        // Add values from horizontal bottom
        if (rowBeg !== rowEnd)
            for (let col = colEnd - 1; col >= colBeg; col--) result.push(matrix[rowEnd][col])
        
        // Add values from vertical left
        if (colBeg !== colEnd)
            for (let row = rowEnd - 1; row > rowBeg; row--) result.push(matrix[row][colBeg])

        // Squeeze
        rowEnd--; rowBeg++; colEnd--; colBeg++;
    }
    
    return result;
};