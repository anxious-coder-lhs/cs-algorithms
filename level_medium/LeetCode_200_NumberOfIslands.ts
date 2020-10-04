/**
 * Problem: Given a 2D grid of 1s and 0s representing the island map, where 1s represent a land and 0s represent the water.
 * Find out number of islands.
 * 
 * Solution: Uses a depth 1st approach of traversal of the graph to find out which nodes have been
 * traversed before. 
 * 
 * Complexity: Time: O(n x m) since all the elements are traversed just once.
 * Space: O(n x m) since storage space is used. Additional O(m x n) due to max recursion depth as the max
 * recursion can span the entire depth.
 * 
 * @param grid 
 */
function numIslands(grid: string[][]): number {
    // Breadth 1st traversal of the graph defined by the matrix.
    // With each traversal, we mark the boundaries of the grid using an auxilliary storage
    // Count number of unique utterances.
    const visitedMap: boolean[][] = Array.from({length: grid.length}, () => Array(grid[0].length).fill(false));
    
    let islandCounts = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (visitedMap[row][col] === false && grid[row][col] === "1") {
                traverseIsland(grid, visitedMap, row, col)
                islandCounts++
            }
        }
    }
    
    return islandCounts
};

function traverseIsland(grid: string[][], visitedMap: boolean[][], row: number, col: number) {
    
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === "0" || visitedMap[row][col] === true) {
        return
    }
    
    visitedMap[row][col] = true
    
    traverseIsland(grid, visitedMap, row + 1, col)
    traverseIsland(grid, visitedMap, row - 1, col)
    traverseIsland(grid, visitedMap, row, col + 1)
    traverseIsland(grid, visitedMap, row, col - 1)
}