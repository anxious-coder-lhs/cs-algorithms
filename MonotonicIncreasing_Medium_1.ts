
// Given an array of integers, figure out if the array is monotic or not. An array is monotonic if the items are non-decreasing or non-increasing.

// Define a slope indicator to define if the slope is going to increase or decrease.
// If the slope is flat, we can ignore that value for a particular instance, it does not effect the overall monotonic.
// Make sure the slope is not changing anytime.

// Use multiple properties to indicate if the array is non-increasing or non-decreasing.
// O(n) time and O(n) space
export function isMonotonic(array: number[]) {
  let nonIncreasing = true, nonDecreasing = true;
	for (let pos = 1; pos < array.length; pos++) {
		if (array[pos] > array[pos - 1]) nonIncreasing = false
		if (array[pos] < array[pos - 1]) nonDecreasing = false
	}
	
	return nonIncreasing || nonDecreasing
}
