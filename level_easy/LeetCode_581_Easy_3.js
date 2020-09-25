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
    
    let stack = []
    let leftIdx = nums.length - 1
    for (let i=0;i<nums.length;i++) {
        while(stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
            leftIdx = Math.min(leftIdx, stack.pop())
        }
        stack.push(i)
    }
    
    stack = []
    let rightIdx = 0
    for (let i=nums.length-1;i>=0;i--) {
        while(stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
            rightIdx = Math.max(rightIdx, stack.pop())
        }
        stack.push(i)
    }
    
    console.log(leftIdx, rightIdx)
    return rightIdx <= leftIdx ? 0 : rightIdx - leftIdx + 1
}
