/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 /**
 * LeetCode 103
 * 
 * BFS approach, standard DFS for navigation, also adds an indicator for level.
 * Inserts the results in the left->right or right->left order for the final result.
 * 
 * Time: O(n), Space: O(n)
 * 
 * @param root 
 */
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    
    // Base Condition
    if (root === null) return []
    
    // Level by level storage of visited nodes.
    let lastLevel: (TreeNode | null)[] = [root], result: number[][] = [];
    
    // Iterate over the queue
    let pos = 0, curr, hasNext = true, level = 0;
    while(hasNext) {
        const next: (TreeNode | null)[] =  [];
        const vals: number[] = Array(lastLevel.length).fill(0);
        let pos, offset;
        if (level % 2 === 0) {
            pos = 0; offset = 1;
        } else {
            pos = lastLevel.length - 1; offset = -1;
        }
        
        lastLevel.forEach(elem => {
            vals[pos] = elem.val;
            if (elem.left !== null) next.push(elem.left);
            if (elem.right !== null) next.push(elem.right);
            pos += offset;
        });
        
        hasNext = next.length > 0;
        result.push(vals);
        
        lastLevel = next;
        level++;
    }
    
    return result;
};