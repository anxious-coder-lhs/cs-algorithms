// Figure out if the string provided including various opening and closing brackets
// are all balanced or not. Example: "((][{}]))"
export function balancedBrackets(string: string) {
  const openingBrackets = "([{"
	const closingBrackets = ")]}"
	const bracketsMap: {[k: string]: string} = {
		"}": "{",
		"]": "[",
		")": "("
	}
	const stack = []
	
	for(let idx=0;idx<string.length;idx++) {
		const char = string[idx];
		// We only operate for the opening and closing elements. Ignoring others.
		if (openingBrackets.includes(char)) {
			stack.push(char)
		} else if (closingBrackets.includes(char)) {
			// Since we have a closing bracket, we should pop to check if we have an opening bracket.
			// In a typical solution, where we cannot ignore other elements, there can be other chars also.
			if (stack.pop() !== bracketsMap[char]) {
				return false;
			}
		}
	}
	
	// Valid if all the elemnts from the stack have been consumed.
	return stack.length === 0
}
