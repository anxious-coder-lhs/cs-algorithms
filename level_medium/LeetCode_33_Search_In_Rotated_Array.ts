/**
 * Leet Code 33
 * 
 * Solution uses a binary search approach. We use binary search to find the rotation point, i.e. the smallest
 * element in the array. Since, now all the elements before and after rotation point are in ascending order, we
 * can use the binary search to either search in the left side or the right side.
 * 
 * Time and Space: O(log n)
 * 
 * @param nums 
 * @param target 
 */
function search(nums: number[], target: number): number {
    
    // Base Conditions.
    if (nums.length <= 0) return -1;
    if (nums.length === 1) return nums[0] === target ? 0 : -1;
    
    const rotationPos = findRotationPivot(nums);
    if (rotationPos === -1)
        return binarySearch(nums, target, 0, nums.length - 1);
    
    if (target >= nums[0] && target <= nums[rotationPos - 1]) {
        return binarySearch(nums, target, 0, rotationPos - 1);
    } else if (target >= nums[rotationPos] && target <= nums[nums.length - 1]) {
        return binarySearch(nums, target, rotationPos, nums.length - 1);
    }
    
    return -1;
};

function binarySearch(nums: number[], target: number, beg: number, end: number) {
    
    // Base Condition, no match found.
    if (end < beg) {
        return -1;
    }
    
    const pivot = Math.floor((beg+end)/2);
    const elem = nums[pivot];
    
    if (target > elem) {
        // Finding bigger element.
        return binarySearch(nums, target, pivot + 1, end);
    } else if (target < elem) {
        // Finding smaller element.
        return binarySearch(nums, target, beg, pivot - 1);
    } else {
        return pivot;
    }
}


// Returns the smallest element of the array, i.e. the rotation point.
function findRotationPivot(nums: number[], beg: number = 0, end: number = nums.length - 1): number {
    
    // No rotation point, not rotated.
    if (end < beg) return -1;
    
    let pivot = Math.floor((beg + end)/2);
    const curr = nums[pivot];
    const prev = pivot > 0 ? nums[pivot - 1] : -Infinity;
    if (curr < prev) {
        // Found the smallest, since this is supposed to be a bigger element.
        return pivot;
    } else {
        if (nums[0] <= curr) {
            // Smallest element on the right side.
            return findRotationPivot(nums, pivot + 1, end);
        } else {
            // Smallest element on the left side.
            return findRotationPivot(nums, 0, pivot - 1);
        }
    }
}

console.log(search([5, 1, 2], 5));