/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

 /**
  * Problem: Leet Code 428
  * Solution: Uses the depth 1st traversal to serialize and deserialize the N-Ary tree. The ser and deser process
  * uses a special marker with null(empty string) to determine that the current branch has ended. This helps us
  * determine, that we have to backtrack and start adding new elements to the parents childs and so on.
  * 
  * Time: O(n) since all the nodes needs to be traversed at least once. Spsace: O(n) since at least additional space
  * of n items is required.
  * 
  */
class Codec {
    constructor() {
      
  }
  
  // Encodes a tree to a single string.
  serialize(root: Node | null): string {
      const serialized: string[] = []
      this.serializeHelper(root, serialized);
      
      return serialized.join(";");
  };

  serializeHelper(root: Node | null, serialized: string[]) {
      if (root === null) return
      serialized.push(root.val.toString())
      if (root.children.length === 0) {
          // Found a leaf node, ending a terminating null;
          serialized.push("")
      } else {
          root.children.forEach(child => this.serializeHelper(child, serialized));
          serialized.push("")
      }
  }
  
  // Decodes your encoded data to tree.
  deserialize(data: string): Node | null {
      const elements = data.split(";")
      return this.deserializeHelper(elements);
  };

  deserializeHelper(elements: string[]): Node | null {
      const value = elements.shift();
      if (value === undefined || value === "") return null;
      const root = new Node(parseInt(value));
      let child;
      while ( (child = this.deserializeHelper(elements)) !== null) {
          root.children.push(child)
      }
      return root;
  }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));