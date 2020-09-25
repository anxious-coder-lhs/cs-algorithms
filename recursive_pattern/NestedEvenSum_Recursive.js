// P: Returns a sum of all even numbers in an object, which may contain nested objects.

function nestedEvenSum(obj) {
    return Object.keys(obj).reduce((sum, key) => {
        const value = obj[key]
        if (typeof value === "object") {
            sum += nestedEvenSum(value)
        } else if (typeof value === "number" && value % 2 === 0) {
            sum += value
        }
        return sum
    }, 0)
}

clear()
console.log(nestedEvenSum({
    a: 2, k: {
        b: 3,
        c: 4,
        d: {
            l: 1
        },
        e: "asb"
    }
}))
