// P: Write a recursive function which given an object convert all the values which are numbers to strings.

function stringifyNumbers(obj) {
//     if (Object.keys(obj).length === 0) return {}
    return Object.keys(obj).reduce((res, key) => {
        const value = obj[key]
        if (typeof value === "object") {
            res[key] = stringifyNumbers(value)
        } else if (typeof value === "number") {
            res[key] = value.toString()
        } else {
            res[key] = value
        }

        return res;
    }, {})
}

clear()
console.log(stringifyNumbers({a:{b:2, c:{}, d:{a:3}}}))
