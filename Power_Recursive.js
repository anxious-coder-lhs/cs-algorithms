function power(base, exponent) {
    if (exponent === 0) return 1
    if (exponent === 1) return base
    return base * power(base, exponent - 1)
}

clear()
console.log(power(2, 3))
console.log(power(2, 10))
console.log(power(2, 1))
console.log(power(2, 0))
