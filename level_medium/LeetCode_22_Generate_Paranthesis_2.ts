/**
 * Leverages the permutation solution as discussed in the last solution. However, the solution
 * also leverages some optimization where the the validity of the solution is checked along while
 * building the solutions, rather than the running an operation of O(n) later to complete the validation.
 * 
 * Complexity: Time: O(2^n) time complexity for generating all possible pairs.
 * Space: O(2^n) for the entire solution space.
 * 
 * @param n 
 */
function generateParenthesis(n: number): string[] {
    return generateParanthesisHelper(n * 2)
};

function generateParanthesisHelper(n: number, curr: number = 0, result: string[] = [], braces: number = 0): string[] {
        
    const output: string[] = [];
    
    if (curr >= n) {
        // Done for all the positions, validate the created string.
        if (braces === 0)
            output.push(result.join(""))

        return output;
    }
    
    // At the position curr, choose one of the braces and recursively move.
    result[curr] = "("
    output.push(...generateParanthesisHelper(n, curr + 1, result, braces + 1));
    
    // At the position curr, choose one of the braces and recursively move.
    if (braces >= 1) {
        
        // Only make this choice, if it won't make the string valid.
        result[curr] = ")"
        output.push(...generateParanthesisHelper(n, curr + 1, result, braces - 1));    
    }
    
    // Return the final results.
    return output;
}