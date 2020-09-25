function range(num) {
    if (num === 0) return 0
    return num + range(num - 1)
}

clear()
console.log(range(1))
console.log(range(0))
console.log(range(10))
