// Using additional memory for map, or frequency counter.
// O(n) runtime and O(n) space
function findSum(arr,value){
    const pendingPairs = {}
    for (const num of arr) {
        const diff = value - num
        if (pendingPairs[num] !== undefined) {
            return [diff, num]
        }
        pendingPairs[diff] = num
    }

    return false
}


// Sorting the array, using 2 pointers(left and right) approach. This approach is very useful when the array is sorted or can be sorted.
// O(n log n) time and space complexity
function findSum(arr,value){
    const sorted = arr.sort((a, b) => a - b)    
    let l=0, r = arr.length - 1
    while(l < r) {
        const sum = arr[l] + arr[r]
        if (sum === value) {
            return [arr[l], arr[r]]
        } else if (sum < value) {
            l++
        } else {
            r--
        }
    }
    return false
}

function findSum(arr,value){
    const sorted = arr.sort((a,b) => a-b)
    for (const num of arr) {
        const diff = value - num
        if (search(arr, diff)) {
            return [diff, num]
        }
    }

    return false
}

// Using a binary search approach. Sorting the array and for each value: binary searching the corresponding pair on the rest of the elements.
// O(n log n) runtime and space complexity
function search(arr, value) {
    let left = 0, right = arr.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right)/2)
        if (arr[mid] === value) {
            return true
        } else if (arr[mid] > value) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return false
}
