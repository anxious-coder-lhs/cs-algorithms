// P: Write a recursive function which given an array of strings return each word capitalized.

function capitalizedWords(array) {
    if (array.length === 0) return []
    return [array[0].toUpperCase()].concat(capitalizedWords(array.slice(1)))
}

clear()
console.log(capitalizedWords(["i", "am", "a", "don"]))
