/**
 * Problem: Given a 2D grid of 1s and 0s representing the island map, where 1s represent a land and 0s represent the water.
 * Find out number of islands.
 * 
 * Solution: Uses a BFS approach of traversal of the graph to find out which nodes have been
 * traversed before. 
 * 
 * Complexity: Time: O(n x m) since all the elements are traversed just once.
 * Space: O(Min(m,n)) due to max recursion depth as the max
 * recursion can span the entire depth.
 * 
 * @param grid 
 */
function numIslands1(grid: string[][]): number {
    // Breadth 1st traversal of the graph defined by the matrix.
    // With each traversal, we mark the boundaries of the grid using an auxilliary storage
    // Count number of unique utterances.
    let islandCounts = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === "1") {
                traverseIsland1(grid, row, col)
                islandCounts++
            }
        }
    }
    
    return islandCounts
};

function traverseIsland1(grid: string[][], row: number, col: number) {

    const queue = [[row, col]]
    while (queue.length >= 1) {
        const loc = queue.pop()
        if (loc === undefined) return
        const row = loc[0], col = loc[1]
        
        grid[loc[0]][loc[1]] = "0"
        
        if (row + 1 < grid.length && grid[row+1][col] === "1")
            queue.push([row + 1, col])
        if (row - 1 >= 0 && grid[row-1][col] === "1")
            queue.push([row - 1, col])
        if (col + 1 < grid[0].length && grid[row][col+1] === "1")
            queue.push([row, col + 1])
        if (col - 1 >= 0 && grid[row][col-1] === "1") 
            queue.push([row, col - 1])
    }
}