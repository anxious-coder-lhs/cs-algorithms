/**
 * Problem: Leet Code 1190. Reverse Substrings between each pair of paranthesis.
 * 
 * Solution: Uses the stack approach of reversing the elements of the array. Also the
 * same approach as used in the problems requiring backtracking where paranthesis is
 * involved. The approach uses the stack as the final value which will not be reversed
 * in the last. This allows for storing additional chars in the array without using
 * additional auxilliary array.
 * 
 * The elements of the internal brackets are added after reversing them back into the
 * stack for further processing.
 * 
 * Complexity: Time O(n), Space O(n)
 * 
 * @param s 
 */
function reverseParentheses(s: string): string {
    const stack: string[] = []
    for (let idx = 0; idx < s.length; idx++) {
        const char: string = s[idx];
        if (char === ')') {
            // Start pulling from the stack and adding to result.
            let elem = stack.pop();
            const reversed: string[] = [];
            while(elem !== '(') {
                if (elem !== undefined) reversed.push(elem);
                elem = stack.pop();
            }
            stack.push(...reversed);
        } else {
            stack.push(char);    
        }
    }
    
    return stack.join("");
};
