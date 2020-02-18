function someRecursive(array, callback) {
    if (array.length === 0) return false
    return callback(array[0]) || someRecursive(array.slice(1), callback)
}

clear()
console.log(someRecursive([1, 2], val => val > 1))
console.log(someRecursive([1, 2], val => val > 2))
console.log(someRecursive([1, 2], val => val % 2 === 0))
console.log(someRecursive([4, 2], val => val % 2 === 1))
