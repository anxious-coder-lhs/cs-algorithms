// Use the merge sort to sort an array. Uses divide and conquer.
// Divide the array till we have arrays of length 1.
// Merge and sort the arrays till we combine all the arrays


// Merge the 2 sorted arrays to create a new sorted array.
function merge(array1, array2) {
    let left = 0, right = 0
    const mergedArray = []
    while(left < array1.length && right < array2.length) {
        if (array1[left] < array2[right]) {
            mergedArray.push(array1[left])
            left++
        } else {
            mergedArray.push(array2[right])
            right++
        }
    }

    while(left<array1.length)
        mergedArray.push(array1[left++])

    while(right<array2.length)
        mergedArray.push(array2[right++])

    return mergedArray
}

function mergeSort(array, left = 0, right) {
    if (right === undefined)
        right = array.length - 1

    if (left >= right) {
        return [array[left]]
    }

    const pivot = Math.floor((left + right)/2)
    const leftArray = mergeSort(array, left, pivot)
    const rightArray = mergeSort(array, pivot+1, right)
    return merge(leftArray, rightArray)
}

clear()
console.log(merge([1, 2, 3], [4, 6, 20]))
console.log(mergeSort([3, 2, 5, 1, 12, 3]))
console.log(mergeSort([12, 3, 43, 4, 12, 243, -1]))
