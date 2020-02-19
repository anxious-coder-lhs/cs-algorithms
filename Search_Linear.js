function linearSearch(array, item) {
    for (let i=0;i<array.length;i++)
        if (array[i] === item)
            return i

    return -1
}

clear()
console.log(linearSearch([1, 2, 4, 4, 1], 4))
console.log(linearSearch([1, 2, 4, 4, 1], 8))
