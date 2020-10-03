/**
 * Problem: Given an array of numbers, move all the non zero elements to the end in-place.
 */
function moveZeroes1(nums: number[]): void {
    /**
     * Keeping 2 pointers - one at the last zero position so that the replacement can be done as write mutations.
     * Another pointer which continues to move through the arrays only invoking the replace if the element is non-zero and it can be swapped.
     */
    let zeroPos = 0;
    for (let idx = 0; idx < nums.length; idx++) {
        if (nums[idx] !== 0) {
            swap(zeroPos++, idx, nums)
        }
    }
};

function swap(src: number, tar: number, nums: number[]) {
    if (src === tar) return
    const temp = nums[tar]
    nums[tar] = nums[src]
    nums[src] = temp
}
