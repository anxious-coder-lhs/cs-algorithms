// Quick Sort: Divide the problem into smaller halfs to solve each half recursively.
// With each pass, we choose a pivot point and make all the elements smaller than
// that to the left side and all larger to the right side.
// Keep solving the left and the right sides recursively

function quickSort(array, left = 0, right = array.length - 1) {
    
    if (left >= right) {
        return array
    }

    const newPivotPos = partition(array, left, right)
    quickSort(array, left, newPivotPos-1)
    quickSort(array, newPivotPos+1, right)
    return array
}

function partition(array, left, right) {
    const pivot = left
    let smallerFound = 0
    for (let i=left+1;i<=right;i++) {
        if (array[i] < array[pivot]) {
            smallerFound++
            swap(array, pivot+smallerFound, i)
        }
    }
    const newPivotPos = pivot + smallerFound
    swap(array, pivot, newPivotPos)
    return newPivotPos
}

function swap(array, i, j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

clear()
console.log(quickSort([223, 34, 123, 54, 2, -24, 5]))
console.log(quickSort([12, 4, 2, 5, -12, 14, -53]))
console.log(quickSort([12, 10, 3, 1, 0, -12]))
