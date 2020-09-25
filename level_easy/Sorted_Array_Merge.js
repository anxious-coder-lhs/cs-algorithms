//Traverse both arrays and insert smaller value from arr1 or arr2
  //into result array and then increment that array index.
 //If an array is completely traversed, while other one is left then just
 //copy all the remaining elements into result array
function mergeArrays(arr1, arr2) {
    const mergedArray = []
    let l = 0, r = 0;
    while(l<arr1.length && r<arr2.length) {
        if (arr1[l] < arr2[r]) {
            mergedArray.push(arr1[l++])
        } else {
            mergedArray.push(arr2[r++])
        }
    }

    while(l<arr1.length) mergedArray.push(arr1[l++])
    while(r<arr2.length) mergedArray.push(arr2[r++])
    return mergedArray;
}
