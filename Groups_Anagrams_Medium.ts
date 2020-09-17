/**
* Problem: Given a string of words, we need to create and return the group of all the anagrams in the string.
* Brute Force Approach.
* Creates all the combinations of words to find which all create a group.
**/
export function groupAnagrams(words: string[]) {
	
	// Result container and marker to identify which all words have been grouped.
	const results = [];
	const groupedIdx: number[] = []
	
	// Loop to iterate over all words.
  for (let idx = 0; idx < words.length; idx++) {
		if (groupedIdx.includes(idx)) continue;
		const baseWord = words[idx]
		const groups = [baseWord]
		
		// Using grouped index to identify and skip over the words which are already grouped.
		groupedIdx.push(idx)
		
		// Loop over a combination of all the groups.
		for (let sec = idx + 1; sec < words.length; sec++) {
			if (groupedIdx.includes(sec)) continue;
			const nextWord = words[sec]
			if (isAnagram(baseWord, nextWord)) {
				groupedIdx.push(sec);
				groups.push(nextWord)
			}
		}
		results.push(groups);
	}
	
  return results;
}

/**
* Finding if 2 words are anagram or not.
* We will use the technique of the word map to solve this provblem.
* Use of array in order to reduce cost of access and storage.
**/
function isAnagram(first: string, second: string) {
	if (first.length !== second.length) return false
	const size = first.length
	
	const charMap: number[] = Array(26).fill(0)
	for (let idx = 0; idx < size; idx++) {
		const char = first[idx]
		const charCode = char.toLowerCase().charCodeAt(0) - 97
		charMap[charCode]++
	}
		
	for (let idx = 0; idx < size; idx++) {
		const char = second[idx]
		const charCode = char.toLowerCase().charCodeAt(0) - 97
		charMap[charCode]--
		if (charMap[charCode] < 0) return false
	};
	
	return true
}
