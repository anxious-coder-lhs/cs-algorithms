/**
 * Solution is based on the backtracking paradigm. The solution explores the entire solution
 * space for all the permutations that are possible. While making the permutations, it also
 * checks for the boundary conditions to see if the solution can be found in this path. If the
 * solution cannot be found, the solution space is backtracked and it is not explored further.
 * 
 * Here, we define a function backtrack which keeps track of remaining number of open & closing parenthesis (denoted
 * as m and n respectively). If m == n == 0, add the string to answer. If there are open parenthesis left (i.e. m > 0),
 * it is possible to append an open parenthesis; if there are more closing parenthesis than open parenthesis (i.e. n >
 * m),it is possible to append a closing parenthesis.
 * 
 * Complexity: Time and Space O((4^n)/(n^(1/2)).
 * Refer https://leetcode.com/problems/generate-parentheses/solution/ for more det
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
        // We can break the current solution tree if we see that the number of closing braces are equal or greater
        // than the opening braces, which makes the string invalid right away.
        genHelper(n, result, open, close + 1, str + ")");
    }
}