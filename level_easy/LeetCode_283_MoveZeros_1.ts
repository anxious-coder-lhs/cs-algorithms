/**
 * Problem: Given an array of numbers, move all the non zero elements to the end in-place.
 * 
 * Solution: Uses multiple pointers for the read and the write operations. Write pointer only moves when there is an applicable zero element to replace.
 * Read pointer moves continuously through the array.
 */
function moveZeroes(nums: number[]): void {
    let readPointer = 0, writePointer = 0;
    while(readPointer < nums.length) {
        const current = nums[readPointer]
        if (current !== 0) 
            nums[writePointer++] = current
        readPointer++
    }

    while(writePointer < nums.length) {
        nums[writePointer++] = 0
    }
};