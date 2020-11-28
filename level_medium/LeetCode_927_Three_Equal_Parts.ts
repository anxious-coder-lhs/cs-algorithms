function threeEqualParts(A: number[]): number[] {
    for (let left = 0; left < A.length - 2; left++) {
        for (let right = left + 2; right < A.length; right++) {
            if (haveEqualParts(left, right, A)) {
                return [left, right];
            }
        }
    }
    
    return [-1, -1];
};

function haveEqualParts(left: number, right: number, A: number[]): boolean {
    const decimalVal1 = binaryToDecimal(A, 0, left);
    const decimalVal2 = binaryToDecimal(A, left + 1, right - 1);
    const decimalVal3 = binaryToDecimal(A, right, A.length - 1);
    return decimalVal1 === decimalVal2 && decimalVal2 === decimalVal3;
}

function binaryToDecimal(A: number[], left: number, right: number) {
    let total = 0, base = 1;
    for (let val = right; val >= left; val--) {
        total += base * A[val];
        base *= 2;
    }
    return total;
}