function reverse(data) {
  let outputString = [];
  for (let i = data.length - 1; i >= 0; i--) {
    outputString[data.length - i - 1] = data[i]
  }
  return outputString.join("")
}

console.log(`Reverse of the string "Hello You" is ${reverse("Hello You")}`)
console.log(`Reverse of the string "Hello You this is good" is ${reverse("Hello You this is good")}`)