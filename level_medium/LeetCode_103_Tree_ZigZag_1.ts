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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    
    // Base Condition
    if (root === null) return []
    
    // Level by level storage of visited nodes.
    const queue: (TreeNode | null)[][] = [[root]];
    
    // Iterate over the queue
    let pos = 0, curr;
    while((curr = queue[pos++]) !== undefined) {
        const next: (TreeNode | null)[] =  [];
        curr.forEach(elem => {
            if (elem.left !== null) next.push(elem.left);
            if (elem.right !== null) next.push(elem.right);
        }) 
        if (next.length >= 1) queue.push(next);
    }
    
    return reverseAndEval(queue);
};

function reverseAndEval(queue: (TreeNode | null)[][]): number[][] {
    let level = 0;
    const result: number[][] = [];
    queue.forEach(curr => {
        level++;
        const next: number[] = [];
        curr.forEach(item => next.push(item.val));
        if (level % 2 === 1)
            result.push(next);
        else
            result.push(next.reverse());
    })
    return result;
}