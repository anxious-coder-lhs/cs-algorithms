function compute(number) {
  if (number == 1 || number == 2) return 1;
  else return compute(number - 1) + compute(number - 2);
}

console.log(`FB of ${1} is ${compute(1)}`)
console.log(`FB of ${2} is ${compute(2)}`)
console.log(`FB of ${10} is ${compute(10)}`)
console.log(`FB of ${100} is ${compute(100)}`)
console.log(`FB of ${1000} is ${compute(1000)}`)
