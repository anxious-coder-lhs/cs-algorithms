/**
 * Leet Code 151
 * 
 * Solution uses an approach to add words in a stack as we do a single iteration. Adding words with the space
 * boundaries are done via slicing the string from the position to position. Altrnatively, this can also be done
 * using concatenation as well.
 * 
 * Once the words are in the stack, they are pulled out to form a string in reverse order.
 * 
 * Time: O(n) since each element is visited once, and O(n) space since additional storage of stack is used.
 * 
 * @param s 
 */
function reverseWords(s: string): string {
    const stack: string[] = []
    
    // Add all the items to a stack.
    let start = 0, end  = 0;
    for (let idx = 0; idx < s.length; idx++) {
        if (s[idx] === " ") {
            if (start !== end) stack.push(s.slice(start, end));
            start = idx + 1, end = idx + 1;
        } else {
            end++;
        }
    }
    
    // Adding last word
    if (start !== end) stack.push(s.slice(start, end));
    
    // Reverse the items as a string.
    let result = stack.pop(), substr: string | undefined = ""
    while( (substr = stack.pop()) !== undefined) {
        result += " " + substr
    }
    
    return result || "";
};