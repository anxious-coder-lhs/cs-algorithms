// Given an array, return an array where each index stores the product of all numbers in the array except the number at the index itself. 

// O(n) runtime and space.
// Using a single span to make a product. Following up with another scan to deduce the divided value.
// Special cases handling for 0.
function findProduct(arr) {
    let product = 1
    let zeroCount = 0
    for (const num of arr) {
        if (num === 0 && zeroCount <= 1) {
            zeroCount++
        } else {
            product = product * num
        }
    }

    for (let i=0;i<arr.length;i++) {
        if (arr[i] === 0) {
            arr[i] = product
        } else {
            arr[i] = product/arr[i]
        }
    }

    return arr
}

// Using a very smart 2 pointers technique moving from left to right and right to left.
// Requires 1 iteration to identify the product solution from left to now at each index.
// Requires 1 iteration to identify the product solution from right to now at each index.
// Solution is cummulated on the way.
// O(n) runtime and O(n) space.
function findProduct(arr) {
    const product = []
    let leftProduct = 1
    for (let i=0;i<arr.length;i++) {
        product.push(leftProduct)
        leftProduct = leftProduct * arr[i]
    }

    let rightProduct = 1
    for (let i=arr.length-1;i>=0;i--) {
        product[i] = rightProduct * product[i]
        rightProduct = rightProduct * arr[i]
    }

    return product
}
