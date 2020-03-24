/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: An integer array with 0 or more elements.
// Outout: Minimum Continuous subarray length
// Condition: If subarray is sorted, then the entire array would be sorted.

var findUnsortedSubarray = function(nums) {
    // This approach is based on the intuition of selective sorting. We need to identify the 1st element from the left which is out of order and 1st element from the right which is not in the correct order.
    
    // Implementation can depend on 2 steps 1.1) finding the leftmost element. 1.2) finding the rightmost element. the 2 elements will define the boundaries of the unsorted sub-array.
    
    // Implementation relies on the stack to find the position of the 2 element using stack. Using a stack, we can maintain an index of the smallest element in the stack in order and vice versa for the 2nd iteration.

    // Alternative implementation can find the positions till which the array is sorted from both sides.
    // This providers us the least position of the unsorted array. However, since it 
    // can have an element which is not seen till now (min from left) or (max from right).
    // We can scan through this unsorted array to find min and max. These min and max will
    // then be used to find how far they would make a change on the already sorted array.
    
    let leftIdx = 0, rightIdx = nums.length - 1
    while(nums[leftIdx+1] >= nums[leftIdx] && leftIdx < nums.length - 1) leftIdx++
    while(nums[rightIdx-1] <= nums[rightIdx] && rightIdx > 0) rightIdx--
    const [min, max] = findMinMax(nums, leftIdx, rightIdx)
    while(nums[leftIdx-1] > min && leftIdx>=1) leftIdx--
    while(nums[rightIdx+1] < max && rightIdx<=nums.length - 2) rightIdx++

//     console.log(leftIdx, rightIdx)
    return rightIdx <= leftIdx ? 0 : rightIdx - leftIdx + 1
}

function findMinMax(nums, leftIdx, rightIdx) {
    let min = Infinity, max = -Infinity
    for (let i=leftIdx;i<=rightIdx;i++) {
        min = Math.min(nums[i], min)
        max = Math.max(nums[i], max)
    }

    return [min, max]
}
