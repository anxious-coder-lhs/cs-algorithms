// Problem: Finding numbers with even digits of number.
// Input...
// Array - any size only of numbers...
// What range of data may exists - example 1 <= num <= 100000
// Output, count - 0 or more.

// Leverages the log10 formulae to figure out the length of the number.
// Alternatively leveraging the to string conversions.

var findNumbers = function(nums) {

// Leverages the log10 formula.


  // return nums.filter((elem) => {
  //     const digits = Math.floor(Math.log10(elem)) + 1
  //     return digits % 2 === 0
  // }).length
    
// Leveraging the reduce as compared to filter.

//   return nums.reduce((count, elem) => {
//       const digits = Math.floor(Math.log10(elem)) + 1
//       if (digits % 2 === 0) count++
//       return count
//   }, 0)

// Leveraging the to String

//     return nums.reduce((count, elem) => {
//       const digits = elem.toString().length
//       if (digits % 2 === 0) count++
//       return count
//     }, 0)

    // Leveraging the data constraints. Important to use this. 
    
   return nums.reduce((count, elem) => {
      if ((elem > 9 && elem < 99) || (elem > 999 && elem < 9999)) count++
      return count
    }, 0)
};

clear()
console.log(findNumbers([12, 34, 2, 4, 345, 234, 345, 34]))
