/**
* Groups the anagram words together in entire string.
* Uses a hashing technique after sorting the results.
* Complexity: O(w * n) time: w being the word. Sorting takes O(w) as it is for string. Assuming hashing on strings takes O(1).
* Complexity: O(w * n) space.
**/
export function groupAnagrams(words: string[]) {
  const wordMap: {[k: string]: string[]} = {}
	for (let idx = 0; idx < words.length; idx++) {
		const word = words[idx]
		const sortedWord: string = sortString(word);
		if (wordMap[sortedWord] !== undefined) {
			wordMap[sortedWord].push(word)
		} else {
			wordMap[sortedWord] = [word]
		}
	}
	
	return Object.values(wordMap);
}

/**
* Sorts the string in O(w) run-time and O(w) space.
**/
function sortString(word: string) {
	const charMap = Array(26).fill(0)
	for (let idx = 0; idx < word.length; idx++) {
		const charCode = word.charCodeAt(idx) - 97
		charMap[charCode]++
	}
	
	const result: string[] = []
	charMap.forEach((count, idx) => {
		const char = String.fromCharCode(idx + 97)
		for (let j = 0; j < count; j++) {
			result.push(char)
		}
	})
	
	return result.join("")
}
