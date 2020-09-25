// Data structure of suffix trie for creation of a suffix trie and searching the results from the suffix trie.

interface TrieNode {
  [key: string]: TrieNode | boolean;
}

export class SuffixTrie {
  root: TrieNode;
  endSymbol: string;

  constructor(string: string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

	// Creating the suffix tree.
	// O(n*n) space and O(n*n) time
  populateSuffixTrieFrom(string: string) {
    for (let startPos = 0; startPos < string.length; startPos++) {
			let node: TrieNode = this.root
			for (let endPos = startPos; endPos < string.length; endPos++) {
				const char = string[endPos]
				if (node[char] !== undefined) {
					node = node[char] as TrieNode
				} else {
					node[char] = {}
					node = node[char] as TrieNode
				}
			}
			node[this.endSymbol] = true
		}
  }

	// Performing an absolute search, not a suffix search.
	// O(1) space and O(n) time
  contains(string: string) {
		let node = this.root
		for (let idx = 0;idx < string.length; idx++) {
			const char = string[idx]
			if (node[char] !== undefined) node = node[char] as TrieNode
			else return false;
		}
    return node[this.endSymbol] === true
  }
}
