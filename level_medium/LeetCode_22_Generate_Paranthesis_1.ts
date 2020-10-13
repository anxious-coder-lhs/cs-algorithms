/**
 * Problem: Leet Code 22
 * Solution: Uses a brute force approach of creating all the possible permutations.
 * Basic fundamental of permutation is making all the possible choices at each step.
 * As we explore all the possible choices at each step, the solution space will explode
 * for us leading to an exponential solution. We use recursion to explore and a base condition
 * to stop where all the positions for the choices have been explored.
 * 
 * Complexity: Time O(2^n * n) since the entire permutation space has to be explored.
 * Additionally, each string also needs to be validated for correctness in O(n) time.
 * Space: O(2^n) assuming all the possible strings are valid.
 * 
 * @param n 
 */
function generateParenthesis(n: number): string[] {
    return generateParanthesisHelper(n * 2)
};

function generateParanthesisHelper(n: number, curr: number = 0, result: string[] = []): string[] {
        
    const output: string[] = [];
    
    if (curr >= n) {
        // Done for all the positions, validate the created string.
        if (isValidParanthesis(result))
            output.push(result.join(""))

        return output;
    }
    
    // At the position curr, choose one of the braces and recursively move.
    result[curr] = "("
    output.push(...generateParanthesisHelper(n, curr + 1, result));
    
    // At the position curr, choose one of the braces and recursively move.
    result[curr] = ")"
    output.push(...generateParanthesisHelper(n, curr + 1, result));
    
    // Return the final results.
    return output;

}

function isValidParanthesis(result: string[]) {
    let braces = 0;
    for (let idx = 0; idx < result.length; idx++) {
        if (result[idx] === "(") braces++
        else if (result[idx] === ")") braces--;
        
        if (braces < 0) return false
    }
    
    return braces === 0;
}

console.log(generateParenthesis(3))