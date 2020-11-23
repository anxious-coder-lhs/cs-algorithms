function numWays(s: string): number {
    let ways = 0;
    for (let pivot1 = 1; pivot1 <= s.length - 2; pivot1++) {
        for (let pivot2 = pivot1 + 1; pivot2 <= s.length - 1; pivot2++) {
            const bounds1 = [0, pivot1 - 1]
            const bounds2 = [pivot1, pivot2 - 1]
            const bounds3 = [pivot2, s.length - 1]
            if (haveEqualOnes(s, bounds1, bounds2, bounds3)) ways++
        }
    }
    
    return ways;
};

function haveEqualOnes(s: string, str1: number[], str2: number[], str3: number[]) {
    const countStr1 = countOnes(s, str1)
    const countStr2 = countOnes(s, str2)
    const countStr3 = countOnes(s, str3)
    return countStr1 === countStr2 && countStr2 === countStr3
}

function countOnes(s: string, bounds: number[]) {
    let count = 0;
    for (let idx = bounds[0]; idx <= bounds[1]; idx++) {
        if (s[idx] === '1') count++
    }
    return count
}