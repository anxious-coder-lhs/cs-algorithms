// P: Given an object, collect and return an array of all the nested strings in the object.

function collectStrings(obj) {
    return Object.keys(obj).reduce((res, key) => {
        const value = obj[key]
        if (typeof value === "object") {
            res.push(...collectStrings(value))
        } else if (typeof value === "string") {
            res.push(value)
        } else if (Array.isArray(value)) {
            res.push(...value)
        }
        return res
    }, [])
}

clear()
console.log(collectStrings({a:"as", b:1, c:{d:"2"}}))
