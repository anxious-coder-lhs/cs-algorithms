// https://leetcode.com/problems/contains-duplicate/submissions/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // return containsDuplicateHelper1(nums)
    // return containsDuplicateHelper2(nums)
    // return containsDuplicateHelper3(nums)
    return containsDuplicateHelper4(nums)
};

// O(n log(n)) runtime, O(1) space
function containsDuplicateHelper4(nums) {
    const sortedNums = nums.sort((a, b) => a - b)
    for (let i=1;i<sortedNums.length;i++) {
        if (sortedNums[i-1] === sortedNums[i])
            return true
    }
    return false
}

// O(n^2) runtime and O(1) space
function containsDuplicateHelper3(nums) {
    for (let i=0;i<nums.length;i++) {
        for (let j=i+1;j<nums.length;j++) {
            if (nums[i] === nums[j])
                return true
        }
    }
    return false
}

// O(n) runtime, O(n) space
function containsDuplicateHelper2(nums) {
    const numsMap = {}
    for (let i=0;i<nums.length;i++) {
        const elem = nums[i]
        if (numsMap[elem] !== undefined)
            return true
        numsMap[elem] = true
    }
    return false
}

// O(n) runtime, O(n) space
function containsDuplicateHelper1(nums) {
    const numsMap = new Map()
    for (let i=0;i<nums.length;i++) {
        if (numsMap.has(nums[i]))
            return true
        numsMap.set(nums[i], true)
    }
    return false
}
