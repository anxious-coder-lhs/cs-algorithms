// Assuming array is divided into 2 halfs, left half of the array is always sorted.
// As compared to the selection sort, the left half is not the least of all the
// array elements, but just in sorted order.
// Essentially, we take an element and insert it into the right position in the left
// sub-array

function insertionSort(array) {
    for (let i=1;i<array.length;i++) {
        let currVal = array[i]
        let j=i-1
        // added optimization as well
        while (j>=0 && array[j] > currVal) {
            // insert, dont swap for perf reasons.
            array[j+1] = array[j]
            j--
        }
        array[j+1] = currVal
    }

    return array
}

clear()
console.log(insertionSort([19, 2, 4, 12, 3, 12, 4, 1]))
console.log(insertionSort([1, 2, 3, 4]))
console.log(insertionSort([4, 2, 4]))
