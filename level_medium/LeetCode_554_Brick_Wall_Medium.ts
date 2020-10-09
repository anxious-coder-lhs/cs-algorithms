/**
 * Problem: Leet Code 554.
 *      There is a brick wall in front of you. Each brick has equal height but might have
 * different widths. The brick wall is placed with different bricks together,
 * such that the total width of the entire wall would be equal. Need to find the
 * draw a vertical line from the top to the bottom such that it passes the least
 * number of bricks.
 * 
 * Complexity: Time - O(B) where B is the total number of bricks.
 * Complexity: Space - O(M) where M will atmost be the width of the wall(assuming brick size of 1.)
 * 
 * Intuition: Frequency Pattern: At a basic level, at each width of size 1 of brick,
 * we need to figure out the frequency of open pathways. At an optimized level, the
 * frequency can be identified for each possible brick width, but not for each
 * width 1. This is a dictionary approach for figuring out the frequency.
 * 
 * The pathways (or width size) with the maximum frequency for open pathways is the
 * solution for us.
 * 
 * Solution: Solution calculates all the entry points at any given brick size
 * position. So, in the worst case if the bricks are of size 1, it will calculate
 * the possible entry point at each such position. For optimization, we just figure
 * out the entry point at only positions where we have a brick.
 * 
 * @param wall 
 */
function leastBricks(wall: number[][]): number {
    // Use of a map to add openings at each brick size end.
    const brickWidths: {[k: number]: number} = {}
    let maxOpenings = 0
    
    // Iterate over all the bricks.
    for (let row = 0; row < wall.length; row++) {
        let width = 0;
        for (let col = 0; col < wall[row].length - 1;col++) {
            // For each brick, calculate the total width.
            width += wall[row][col]
            
            // Increment the number of openings at each width size.
            brickWidths[width] = brickWidths[width] | 0
            brickWidths[width]++
            maxOpenings = Math.max(maxOpenings, brickWidths[width])
        }
    }
    
    return wall.length - maxOpenings;
};