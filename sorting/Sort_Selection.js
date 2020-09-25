// Selection Sort: With each pass of the array, we try to find out the lowest element and push it to th ebeginning.
// We essentially keep the left array sorted at every point of time.
// With each pass, extending the size of the left array

function selectionSort(array) {
    for (let i=0;i<array.length - 1;i++) {
        let selected = Infinity
        let selectedIdx = -1
        for (let j=i;j<array.length;j++) {
            if (array[j] < selected) {
                selectedIdx = j
                selected = array[j]
            }
        }

        if (selectedIdx === -1)
            break
        swap(array, i, selectedIdx)
    }

    return array
}

function swap(array, i, j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

clear()
console.log(selectionSort([1, 2, 4, 5]))
console.log(selectionSort([20, 2, 23, 62, 2, 52]))
