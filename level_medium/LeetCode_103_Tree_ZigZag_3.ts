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
 * DFS approach, standard DFS for navigation, also adds an indicator for level.
 * Inserts the results in the left->right or right->left order for the final result.
 * 
 * Time: O(n), Space: O(H)
 * 
 * @param root 
 */
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    
    // Base Condition
    if (root === null) return []
    
    const result: number[][] = [];
    traverseHelper(root, 0, result);
    return result;
};

function traverseHelper(node: TreeNode | null, level: number, result: number[][]) {
    
    if (node === null) return
    
    result[level] = result[level] || [];
    if (level % 2 === 0) {
        result[level].push(node.val);
    } else {
        result[level].unshift(node.val);
    }
    
    traverseHelper(node.left, level + 1, result);
    traverseHelper(node.right, level + 1, result);
}