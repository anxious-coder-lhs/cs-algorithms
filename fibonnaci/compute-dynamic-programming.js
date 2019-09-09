function compute(number, memoizedArr) {
  if (memoizedArr[number - 1] !== undefined) {
    return memoizedArr[number - 1];
  } else {
    let result = undefined;
    if (number == 1 || number == 2) {
      result = 1;
    } else {
      result =
        compute(number - 1, memoizedArr) + compute(number - 2, memoizedArr);
    }
    memoizedArr[number - 1] = result;
    return result;
  }
}

console.log(`FB of ${1} is ${compute(1, new Array(1))}`);
console.log(`FB of ${2} is ${compute(2, new Array(2))}`);
console.log(`FB of ${10} is ${compute(10, new Array(10))}`);
console.log(`FB of ${100} is ${compute(100, new Array(100))}`);
console.log(`FB of ${1000} is ${compute(1000, new Array(1000))}`);
