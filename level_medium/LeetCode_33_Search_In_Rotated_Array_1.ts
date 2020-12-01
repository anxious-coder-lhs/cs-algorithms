/**
 * Leet Code 33
 * 
 * Solution uses a binary search approach. We do it without searching the rotation point. The trick is simple.
 * While doing the regular binary search, check based on 1st and last element, where the element might be.
 * 
 * Time: O(log n), Space: O(1).
 * 
 * @param nums 
 * @param target 
 */
function search(nums: number[], target: number): number {
    
    // Base Conditions.
    if (nums.length <= 0) return -1;
    if (nums.length === 1) return nums[0] === target ? 0 : -1;

    let left = 0, right = nums.length - 1;
    const first = nums[0], last = nums[nums.length - 1];
    while(left <= right) {
        const pivot = Math.floor((left+right)/2);
        const current = nums[pivot];
        if (current === target) return pivot;
        
        if (current >= first) {
            // Left side is not rotated.
            if (target < current && target >= first)
                right = pivot - 1;
            else 
                left = pivot + 1;
        } else {
            // Left side is rotated.
            if (target > current && target <= last)
                left = pivot + 1;
            else
                right = pivot - 1;
        }
    }
    
    return -1;
};