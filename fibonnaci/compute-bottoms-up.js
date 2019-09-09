function compute(number) {
  let result = new Array(3);
  result[1] = result[2] = 1;
  for (let i = 3; i <= number; i++) {
    let oldResult = result[2];
    let lastToOldResult = result[1];
    result[2] = result[2] + result[1];
    result[1] = oldResult;
    result[0] = lastToOldResult;
  }
  return number == 1 || number == 2 ? 1 : result[2];
}

console.log(`FB of ${1} is ${compute(1, new Array(1))}`);
console.log(`FB of ${2} is ${compute(2, new Array(2))}`);
console.log(`FB of ${10} is ${compute(10, new Array(10))}`);
console.log(`FB of ${100} is ${compute(100, new Array(100))}`);
console.log(`FB of ${1000} is ${compute(1000, new Array(1000))}`);
