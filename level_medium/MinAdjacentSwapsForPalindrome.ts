class MinAdjacentSwapsForPalindrome {
    countRecursive(input: string) {
        return this.recursiveHelper(input.split(""), 0, input.length - 1);
    }

    // Case 1: Ends are equal, make 0 swaps and try for internal susbtring swaps.
    // Case 2: Ends are not equal
    // Step 1: Attempt to make ends equal using either multiple swaps in left or right. (Take Minimum)
    // Step 2: Recursively try for substring.
    // Return at base.
    recursiveHelper(input: string[], beg: number, end: number) {

        // Base condition, no swaps required.
        if (end <= beg) return 0;

        // Case 1: ends are equal.
        if (input[beg] === input[end]) {
            return this.recursiveHelper(input, beg + 1, end - 1);
        }

        // Case 2: ends are not equal.
        const leftSwaps = this.swapLeft(input, beg, end);
        
        const rightSwaps = this.swapRight(input, beg, end);

        if (leftSwaps < rightSwaps && leftSwaps !== Infinity) {
            this.swap(input, beg, beg + leftSwaps);
            return leftSwaps + this.recursiveHelper(input, beg + 1, end - 1);
        } else if (rightSwaps !== Infinity) {
            this.swap(input, end, end - rightSwaps);
            return rightSwaps + this.recursiveHelper(input, beg + 1, end - 1);
        } else {
            return -1;
        }
    }

    swap(input: string[], source: number, target: number) {
        const temp = input[source]
        input[source] = input[temp]
        input[target] = temp;
    }

    swapLeft(input: string[], beg: number, end: number) {
        let pivot = beg + 1;
        while (pivot < end && input[end] !== input[pivot]) pivot++

        if (pivot < end) return pivot - beg;
        return Infinity;
    }

    swapRight(input: string[], beg: number, end: number) {
        let pivot = end - 1;
        while (pivot > beg && input[beg] !== input[pivot]) pivot--

        if (pivot > beg) return end - pivot;
        return Infinity
    }

    countIterative(input: string) {
        let beg = 0, end = input.length - 1, swaps = 0;
        const inputArr = input.split("")
        while (end > beg) {
            if (inputArr[end] === inputArr[beg]) {
                // Case 1: Ends are equal, squeeze inwards.
                end--; beg++;
            } else {
                // Case 2: Ends are not equal, displace left or right.
                const leftSwaps = this.swapLeft(inputArr, beg, end)
                const rightSwaps = this.swapRight(inputArr, beg, end)
                if (leftSwaps < rightSwaps && leftSwaps !== Infinity) {
                    this.swap(inputArr, beg, beg + leftSwaps)
                    swaps += leftSwaps
                } else if (rightSwaps !== Infinity) {
                    this.swap(inputArr, end, end - rightSwaps)
                    swaps += rightSwaps
                } else {
                    return -1
                }
                end--, beg++;
            }
        }

        return swaps;
    }
}

function testMinAdjacentSwapsPalindrome(input: string) {
    const counter = new MinAdjacentSwapsForPalindrome();
    console.log(`Min Adjacent Swaps for input recursive: ${input} is: ${counter.countRecursive(input)}`)
    console.log(`Min Adjacent Swaps for input iterative: ${input} is: ${counter.countIterative(input)}`)
}

testMinAdjacentSwapsPalindrome("mamda")
testMinAdjacentSwapsPalindrome("asflkj")
testMinAdjacentSwapsPalindrome("aabb")
testMinAdjacentSwapsPalindrome("ntiin")