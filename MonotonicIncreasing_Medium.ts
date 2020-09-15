// Given an array of integers, figure out if the array is monotic or not. An array is monotonic if the items are non-decreasing or non-increasing.

// Define a slope indicator to define if the slope is going to increase or decrease.
// If the slope is flat, we can ignore that value for a particular instance, it does not effect the overall monotonic.
// Make sure the slope is not changing anytime.
export function isMonotonic(array: number[]) {
  if (array.length <= 1) return true
	let slope = array[1] - array[0]
	for (let idx = 1; idx < array.length - 1; idx++) {
		const newSlope = array[idx + 1] - array[idx]
		if (slope === 0) slope = newSlope
		else if (slope > 0 && newSlope < 0) return false
		else if (slope < 0 && newSlope > 0) return false
	}
	
	return true
}
