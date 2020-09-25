function factorial(number) {
    if (number <= 0) return 1
    if (number <= 1) return 1
    return number * factorial(number - 1)
}

clear()
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(1))
console.log(factorial(0))
