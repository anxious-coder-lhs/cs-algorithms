/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: An integer array with 0 or more elements.
// Outout: Minimum Continuous subarray length
// Condition: If subarray is sorted, then the entire array would be sorted.

// O(n * n) run-time, O(1) space time
var findUnsortedSubarray = function(nums) {
    // Intuition: Since this is a sorting problem, some level of sorting if not complete is necessary to find the failing indexes.
    // Essentially, if you sort, you can always check the 1st and the last element that got changed and do it in O(n * n) time.
    // We can use selection sorting technique which uses a principle of finding the correct position of an element.
    // Using a correct position of an element, we can get to know incremently if the item is already sorted or we need to move on.
    // Additionally with the replacement index we can also know the right side/range of the array that needs sorting.
    
    let leftIdx = Infinity, rightIdx = -Infinity
    for (let i=0;i<nums.length;i++) {
        const curr = nums[i]
        let idxToReplace = i
        for (let j=i+1;j<nums.length;j++) {
            if (nums[j] < nums[i]) {
                idxToReplace = j
            }
        }
        
        if (i !== idxToReplace) {
            if (leftIdx > i) leftIdx = i
            if (rightIdx < idxToReplace) rightIdx = idxToReplace
            swap(nums, i, idxToReplace)
        }
    }
    
    if (leftIdx === Infinity) {
        return 0
    }
    
    return rightIdx - leftIdx + 1
}

function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
