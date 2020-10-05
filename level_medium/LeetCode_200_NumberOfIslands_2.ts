/**
 * Problem: Given a 2D grid of 1s and 0s representing the island map, where 1s represent a land and 0s represent the water.
 * Find out number of islands.
 * 
 * Solution: Problem is very similar to the connected components problem where we need to find out the
 * number of connected components in the grid(graph). We can use Disjoint Set (Union Find Set) for these
 * operations. These operations provide amortized constant time operation for union and find operations
 * using path compression or weighted union using rank.
 * 
 * Complexity: Time: O(n x m) since all the elements are traversed just once and each union find operation is nearly
 * constant time.
 * Space: O(n x m) since storage space is used.
 * 
 * @param grid 
 */
function numIslands(grid: string[][]): number {
    
    if (grid === undefined || grid.length === 0) return 0;
    
    const rows = grid.length
    const cols = grid[0].length
    
    // Creating a flat set from the grid values.
    const set: string[] = []
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            set.push(grid[row][col])
        }
    }
    
    const disjointSet = new DisjointSet(set);
    
    // Iterate through all the edges and keep on adding them to the disjoint sets in order
    // to idenfity the disjoint sets so that we can have unique islands.
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === "1") {
                
                // Marking the node visited.
                grid[row][col] = "0"
                
                // If we have an edge with any direction, lets add it to the disjoint set.
                if (row + 1 < rows && grid[row + 1][col] === "1")
                    disjointSet.union(cols * row + col, cols * (row + 1) + col)
                
                if (row - 1 >= 0 && grid[row - 1][col] === "1")
                    disjointSet.union(cols * row + col, cols * (row - 1) + col)
                
                if (col + 1 < cols && grid[row][col + 1] === "1")
                    disjointSet.union(cols * row + col, cols * row + (col + 1))
                
                if (col - 1 >= 0 && grid[row][col - 1] === "1")
                    disjointSet.union(cols * row + col, cols * (row - 1) + col)
            }
        }
    }
        
    return disjointSet.getComponents();
};
    
class DisjointSet {
    
    components: number = 0;
    ids: number[];

    /**
     * Initialize the disjoint set by converting each node in the grid to a flat data structure representing
     * a set.
     * 
     * @param set 
     */
    constructor(set: string[]) {
        // Initiating the entire vertices, such that all of them belong to separate components.
        // this.ids = Array.from({length: size}, (_, i) => i)
        this.ids = set.map((s, i) => {
            if (s === "1") {
                this.components++
                return i
            } else {
                return -1
            }
        })
    }

    /**
     * Creates a union of the 2 nodes.
     * @param src 
     * @param tar 
     */
    union(src: number, tar: number) {
        // Find roots of each node (source and target)
        const rootSrc = this.find(src);
        
        const rootTar = this.find(tar)
        
        // Case 1: Each node roots are same, i.e. they already belong to the same set.
        // Case 2: Roots are different, they belong to different set and hence update teh roots.
        if (rootSrc === rootTar) return
        this.ids[rootSrc] = rootTar
        this.components--
    }
    
    /**
     * Finds the root component of a given node.
     * 
     * @param src 
     */
    find(src: number) {
        // Find the component the nde belongs to, returns the root of the component.
        let parent = src
        while(parent !== this.ids[parent]) {
            // Backtrack to the root of the node.
            parent = this.ids[parent]
        }
        
        // Compress the path from the source to root for each node.
        this.compressPaths(src, parent)
        
        // Returning the root of the current set the node belongs to.
        return parent;
    }

    /**
     * Compress the paths of the 2 nodes belonging to one or more sets.
     * 
     * @param src 
     * @param root 
     */
    compressPaths(src: number, root: number) {
        let parent = src
        while (this.ids[parent] !== root) {
            const nextParent = this.ids[parent]
            this.ids[parent] = root
            parent = nextParent
        }
    }
    
    getComponents() {
        return this.components;
    }
}