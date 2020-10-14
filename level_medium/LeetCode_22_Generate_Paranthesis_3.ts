/**
 * Solution is based on the backtracking paradigm. The solution explores the entire solution
 * space for all the permutations that are possible. While making the permutations, it also
 * checks for the boundary conditions to see if the solution can be found in this path. If the
 * solution cannot be found, the solution space is backtracked and it is not explored further.
 * 
 * Complexity: Time and Space O((4^n)/(n^(1/2)).
 * Refer https://leetcode.com/problems/generate-parentheses/solution/ for more details.
 * 
 * @param n 
 */
function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    genHelper(n * 2, result);
    return result;
};

function genHelper(n: number, result: string[], open: number = 0, close: number = 0, str: string = "") {
    
    // Base Condition to terminate the recursion
    if (str.length >= n) {
        result.push(str);
        return;
    }
    
    // Boundary conditions to validate if the backtracking is required, or we can proceed.
    if (open < n/2) {
        genHelper(n, result, open + 1, close, str + "(");
    }
    
    // Boundary condition to validate the backtracking again if required, or we can proceed.
    if (open > close) {
        // 2nd condition validates if we have not added closing braces before the opening braces.
        genHelper(n, result, open, close + 1, str + ")");
    }
}