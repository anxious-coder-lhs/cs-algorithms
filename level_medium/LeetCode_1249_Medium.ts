// Use the stack approach for solving the problem. Works pretty much like the FSA in compilers.
// While using stack, we can ignore the cases where the syntax is broken.
function minRemoveToMakeValid(s: string): string {
    const stack: string[] = []
    
    // Iterate over all the characters of the input string.
    let pos=0;
    while(pos < s.length) {
        if (s[pos] !== ')') {
            // Add the characters to stack if the character is not an ending braces.
            stack.push(s[pos]);    
        } else {
            // If there is an ending braces, pull all elements until opening brace and add as a string.
            const partials = []
            while(stack.length > 0 && stack[stack.length - 1] !== '(') {
                partials.push(stack.pop())
            }
            
            // All the elements of the string till last ( is pulled.
            if (stack.length === 0) {
                // If all elements are exhausted, reject the closing braces.
                stack.push(partials.reverse().join(""))
            } else {
                // Pull opening and closing braces and add as string.
                partials.push(stack.pop())
                const reversed = partials.reverse()
                reversed.push(')')
                stack.push(reversed.join(""))
            }
        }
        pos++
    }
    
    // Reconstruct the sequence, ignoring any pending braces.
    return stack.filter(c => c !== ')' && c !== '(').join("")
}
