// Sorting using the bubble sort.
// With each pass of the array, we use the sorting to bubble the biggest element at the top/last.
// We do so by comparing each consequitive elements and moving the bigger one to the right


function bubbleSort(array) {
    for (let i=0;i<array.length;i++) {
        let hasSwaps = false
        for (let j=0;j<array.length - i;j++) {
            if (array[j] > array[j+1]) {
                hasSwaps = true
                swap(array, j, j+1)
            }
        }

        // Optimization
        if (!hasSwaps) break;
    }

    return array
}

function swap(array, i, j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

clear()
console.log(bubbleSort([1, 2, 3, 4, 5]))
console.log(bubbleSort([5, 2, 4,2, 6, 2]))
console.log(bubbleSort([]))
