/**
 * Returns true if the string contains equal opening and closing paranthesis in the right order.
 * The order of the paranthesis should also be maintained.
 * 
 * @param str 
 */
function isValidParanethesis(str: string) {
    // Setting up a counter for frequency count of the paranthesis.
    // For each type of paranthesis, one counter is maintained.
    const paranthCount: number[] = [0, 0, 0];

    // For each braces, we measure 2 things to see if the order and numbers are same:
        // If given, positive weight to opening and negative weight to closing braces, we have total 0 weight at end.
        // If at any step of iteration, the weight didn't go negative. This is essential bcz closing brace cannot come before negative.
    
    // As seen in the example, this does not work if the relative order of the braces also needs to be tracked.
        // Possible solution for that is to use stack based approach of pulling items from the stack and compare.
    for(let idx = 0; idx < str.length; idx++) {
        const elem = str[idx]
        switch (elem) {
            case "{":
                paranthCount[0]++
                break
            case "}":
                paranthCount[0]--
                break
            case "(":
                paranthCount[1]++
                break
            case ")":
                paranthCount[1]--
                break
            case "[":
                paranthCount[2]++
                break
            case "]":
                paranthCount[2]--
                break
            default:
                break
        }

        if (paranthCount[0] < 0 || paranthCount[1] < 0 || paranthCount[2] < 0) return false;
    }

    return paranthCount[0] === 0 && paranthCount[1] === 0 && paranthCount[2] === 0;
}

function testParanthMismatch(str: string) {
    console.log(`Paranthesis for string ${str} is correct: ${isValidParanethesis(str)}`);
}


testParanthMismatch("(((")
testParanthMismatch("((()))")
testParanthMismatch("((())))")
testParanthMismatch("[{}]")
testParanthMismatch("[{]}")

/**
 * This is incorrect, this technique only works if we have only one character. Otherwise interleaving characters will
 * not give correct results.
 * 
 */ 
testParanthMismatch("[{]}")