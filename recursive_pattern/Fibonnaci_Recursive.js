function fib(num, cache = {}) {
    if (cache[num])
        return cache[num]
    if (num <= 0) return 0
    if (num <= 1) return 1
    return fib(num - 1) + fib(num - 2)
}

clear()
console.log(fib(4))
console.log(fib(10))
console.log(fib(28))
console.log(fib(35))
