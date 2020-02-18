function productOfArray(array, idx) {

    if (idx === undefined)
        idx = array.length - 1

    if (idx <= 0)
        return 1

    return array[idx] * productOfArray(array, idx - 1)
}

clear()
console.log(productOfArray([1, 2, 3]))
console.log(productOfArray([1]))
console.log(productOfArray([1, 2, 3, 10]))
console.log(productOfArray([1, 1, 0]))
