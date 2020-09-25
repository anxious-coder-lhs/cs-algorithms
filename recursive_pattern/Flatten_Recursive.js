function flatten(arrays) {
    if (!arrays || arrays.length === 0) return []
    return arrays.reduce((res, elem) => {
        if(elem instanceof Array) {
            res.push(...flatten(elem))
        } else {
            res.push(elem)
        }
        return res
    }, [])
}

clear()
console.log(flatten([[1, 2], [3, 4]]))
console.log(flatten([[1, 2], []]))
console.log(flatten([[1, 2], 1, 2, [[[[[[1]]]]]]]))
