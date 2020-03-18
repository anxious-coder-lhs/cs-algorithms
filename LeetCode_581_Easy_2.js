/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: An integer array with 0 or more elements.
// Outout: Minimum Continuous subarray length
// Condition: If subarray is sorted, then the entire array would be sorted.

// O(n * n) run-time, O(1) space time
var findUnsortedSubarray = function(nums) {
    // Maintaining the 3 properties of the solution (left sorted, right sorted, subarray to be sorted). We need to find if left and right are sorted. For the unsorted array, we need to find the min overlapping with left and max overlapping with right
    
    // Find out the least idx for replacement starting from the left side.
    let leftIdx = nums.length
    let stack=[]
    for (let i=0;i<nums.length;i++) {
        while(stack.length > 0 && nums[stack[stack.length-1]] > nums[i]) {
            leftIdx = Math.min(stack.pop(), leftIdx)
        }
        stack.push(i)
    }
    
    
    // Finding the right idx for replacement starting from right side
    let rightIdx = 0
    stack=[]
    for (let i=nums.length-1;i>=0;i--) {
        while(stack.length > 0 && nums[stack[stack.length-1]] < nums[i]) {
            rightIdx = Math.max(stack.pop(), rightIdx)
        }
        stack.push(i)
    }
    
    return (rightIdx - leftIdx + 1 > 0) ? rightIdx - leftIdx + 1 : 0
}
