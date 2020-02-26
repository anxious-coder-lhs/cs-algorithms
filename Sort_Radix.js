// Radix Sort: Use the numbers digit order to sort the items one index at a time.
// Starting with the 0th index moving upto the max length of the array.

function radixSort(array) {
    console.log(array)
    const maxLength = getMaxLength(array)
    for (let i=0;i<maxLength;i++) {
        const buckets = Array.from({length:10}, () => [])
        array.forEach(item => {
            const digit = getDigit(item, i)
            buckets[digit].push(item)
        })
        array = [].concat(...buckets)
        console.log(array)
    }
}

function getDigit(num, idx) {
    return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10
}

// Finds out the max length of all the array items.
function getMaxLength(array) {
    return array.reduce((res, item) => Math.max(res, getLength(item)), -Infinity)
}

function getLength(item) {
    return Math.floor(Math.log10(Math.abs(item))) + 1
}

radixSort([12, 234, 42, 4, 786, 2, 14, 12, 102])
// radixSort([12, 11, 10, 9, 5, -4, 20])
