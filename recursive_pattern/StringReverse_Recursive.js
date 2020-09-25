function reverse(string, idx) {

    if (idx === undefined)
        idx = string.length - 1

    if (idx < 0)
        return ""

    return string[idx].concat(reverse(string, idx - 1))
}

clear()
console.log(reverse("abcd"))
console.log(reverse(""))
