// Given an array of integers, find out the longest peak in the array. A peak is defined for a sequence of elements which has strictly increasing order followed by a strictly decreasing oreder.

export function longestPeak(array: number[]) {
  let pos = 1, maxPeak = 0
	// Starting navigating from the 1st element to the 2nd last to find a tip, as others cannot be a tip of peak.
	while(pos < array.length - 1) {
		if (isTip(array, pos)) {
			const startPos = findPeakStartPos(array, pos - 1)
			const endPos = findPeakEndPos(array, pos + 1)
			const peakLength = endPos - startPos + 1
			maxPeak = Math.max(maxPeak, peakLength)
			pos = endPos
		} else {
			pos++
		}
	}
	
	return maxPeak;
}

// finding the beginning of the current peak starting from the current tip on the left.
function findPeakStartPos(array: number[], pos: number) {
	while(pos > 0 && array[pos - 1] < array[pos]) pos--
	return pos
}

// finding the end of the current peak starting from the current tip on the right.
function findPeakEndPos(array: number[], pos: number) {
	while(pos < array.length - 1 && array[pos + 1] < array[pos]) pos++
	return pos
}
	
// If the current element is a peak.
function isTip(array: number[], pos: number) {
	return array[pos] > array[pos - 1] && array[pos] > array[pos + 1]
}
