/**
 * Problem: Leet Code 1190.
 * 
 * Solution: Solution uses an intuitive approach which is a linear time approach of solving the 
 * problem. Given the problem, the positions of the characters within braces are reversed
 * a number of times. The inner positions(braces) are reversed whenever we get another
 * braces at the end.
 * 
 * If we start producing the results from the outer boundaries in the reverse order, which is
 * the right to left direction, we can switch the direction of listing (left to right), upon
 * encountering an internal braces. This also means that the listing position should also
 * change from left boundary to right boundary, as opposed to right boundary to left boundary.
 * 
 * The process continues changing the direction of listing and the boundary start and end
 * position.
 * 
 * Complexity: Time O(n) and Space O(n).
 * 
 * @param s 
 */
function reverseParentheses(s: string): string {
    
    // Building a pair wise list of all the braces, so that the elements within can be reversed.
    const pairs: number[] = Array(s.length);
    const stack: number[] = []
    for (let idx = 0; idx < s.length; idx++) {
        if (s[idx] === '(') {
            stack.push(idx);
        } else if (s[idx] === ')') {
            // Saving pairs of opposing positions which mark the boundaries for reversal.
            const openingPos = stack.pop();
            if (openingPos !== undefined) {
                pairs[idx] = openingPos;
                pairs[openingPos] = idx;    
            }
        }
    }
    
    
    // Use the boundaries for reversal traversing in either (left->right) or (right->left)
    const result: string[] = []
    for (let pos = 0, direction = 1; pos < s.length; pos += direction) {
        // Push the element in the final result stack moving either to left or right.
        // If moving from right to left, we swtich the position to the right and direction -1
        // If moving from left to right, we switch position again to the left and direction to 1
        const elem = s[pos];
        if (elem === '(' || elem === ')') {
            // Need to change the position to reverse and direction to reverse.
            pos = pairs[pos];
            direction *= -1;
        } else {
            result.push(s[pos]);
        }
    }
    
    return result.join("");
};