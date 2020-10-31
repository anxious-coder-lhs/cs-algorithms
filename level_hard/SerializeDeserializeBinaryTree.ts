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
  * Solution uses the depth 1st approach to solve the problem. We use a delimeter string so that multi digit
  * values can be treated as a single entity. Further, we can also use the breadth 1st approach. Although depth
  * 1st approach is easier to implement via recursion which is simpler.
  * 
  * Time: O(N) since all the nodes needs to be visited once, Space: O(N) since an additional encoded space of n
  * is required.
  * 
  * @param root 
  */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    const result: string[] = []
    serializeHelper(root, result);
    return result.join(";");
};

function serializeHelper(root: TreeNode | null, result: string[]) {
    if (root === null) {
        result.push("")
        return
    }
    
    result.push(root.val.toString())
    serializeHelper(root.left, result)
    serializeHelper(root.right, result)
}

function deserializeHelper(elements: string[]): TreeNode | null {
    
    const elem = elements.shift()
    
    if (elem === undefined || elem === "") return null;
    
    const node: TreeNode = {
        val: parseInt(elem),
        left: null,
        right: null
    };
    
    node.left = deserializeHelper(elements);
    node.right = deserializeHelper(elements);
    
    return node;
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const elements: string[] = data.split(";");
    return deserializeHelper(elements);
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */