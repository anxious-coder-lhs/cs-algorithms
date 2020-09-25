function firstMissingPositive(nums: number[]): number {
    // return findUsingBruteForce(nums)
    return findUsingSameSpace(nums)
};

function abs(num: number): number {
    if (num < 0)
        return num * -1
    return num
}

// Uses the array indexes as the hash value to identify if the element already
// exists or not. Removes noise by removing out of range indexes like negative.
function findUsingSameSpace(nums: number[]): number {
    
    // Removing all the numbers whose value cannot be fit into the indexes.
    // We remove 0 and negative, bcz we are looking for positive numbers.
    // We remove numbers >length, because at least one positive will be less than equal to length.
    nums.forEach((num, idx) => {
        if (num <= 0) {
            nums[idx] = Infinity
        }
    })
    
    // There are 2 approaches that can be followed.
    // Either use a DFS way to traverse from one node to the hash index in array and continue till all are exhausted.
    // Alternatively, to make it in only one pass, negate the indexed hash key positions to indicate visited items. Reverse negate again while visiting to see if the pointing position is earlier than current.
    nums.forEach((num, idx) => {
        const next = abs(num) - 1
        if (next >= 0 && next < nums.length) {
            nums[next] = abs(nums[next]) * -1
        }
    })
    
    // Find out any positive element position indicating the node is not visited.
    for (let i=0;i<nums.length;i++) {
        if (nums[i] > 0) {
            return i+1
        }
    }
    
    return nums.length + 1
}

// Add all the elements to a set leading to O(n) extra space.
// Iterating from 1 to Infinity, till we find the 1st positive number.
function findUsingBruteForce(nums: number[]): number {
    const visitedSet = new Set(nums);
    
    let pivot=1;
    while(true) {
        if (!visitedSet.has(pivot)) return pivot;
        pivot++;
    }
}
