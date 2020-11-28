/**
 * Leet Code 927
 * 
 * Solution is based on the fact that the number of 1s will be equal and hence there boundaries can be identified
 * using a single iteration. We just need to identify the number of zeroes in between and ignore those (assign to the right).
 * 
 * Time: O(n), space: O(1)
 * 
 * @param A 
 */
function threeEqualParts(A: number[]): number[] {
    
    // Return negative, cannot be divided.
    const totalOnes = countOnes(A);
    if (totalOnes % 3 !== 0) return [-1, -1];
    if (totalOnes === 0) return [0, A.length - 2];
    
    const maxPartOnes = totalOnes/3;
    
    // Critical Path will return {left, right} + zeros.
    const cp = findCriticalPath(A, maxPartOnes);
    if (cp === undefined) return [-1, -1];
    
    // Middle Critical Path will return {left, right}
    const midCp = matchCriticalPath(A, cp);
    if (midCp === undefined) return [-1, -1];
    
    // Left Critical Path will return {left, right}
    const leftCp = matchCriticalPath(A, midCp);
    if (leftCp === undefined || hasMostSigOne(A, leftCp.left - 1)) return [-1, -1];
        
    return [leftCp.right, midCp.right + 1];
};

function hasMostSigOne(A: number[], start: number) {
    for (let pos = start; pos >= 0; pos--) if (A[pos] !== 0) return true
}

// Matches the critical path of the current part to the right part. Do the adjustments for any gaps of zeros.
function matchCriticalPath(A: number[], {left, right, zeros}) {
    
    // Get all the leading zeros so far.
    let newPos = left - 1, thisZeros = 0;
    while(A[newPos] === 0) {
        thisZeros++;
        newPos--;
    }

    // Break if not matching with enough trailing zeros.
    if (thisZeros < zeros) return undefined;
      
    // Break if the critical path is not matching.
    for (let oldPos = right - zeros; oldPos >= left; oldPos--) {
        if (A[newPos--] !== A[oldPos]) return undefined;
    }
    
    // All fine, adjust the bounds and return;
    return {
        left: newPos + 1,
        right: (left - 1) - (thisZeros - zeros),
        zeros,
    }
}

function findCriticalPath(A: number[], maxPartOnes: number) {
    let ones = 1, zeros = 0, pos = A.length - 1;
    while(A[pos--] === 0) zeros++;
    while(ones < maxPartOnes) {
        if (A[pos--] === 1) {
            ones++;
        }
    }
    
    return {left: pos + 1, right: A.length - 1, zeros};
}

function countOnes(A: number[]) {
    return A.filter(val => val === 1).length;
}

console.log(threeEqualParts([1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0]));