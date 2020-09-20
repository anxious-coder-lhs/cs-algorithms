type Range = [number, number];

/**
* Search a given number in a sorted matrix. Each row is sorted and each column is sorted.
* Since the numbers are sorted, we can use binary search to search through the numbers.
* At each step, we can choose a pivot, we can break the matrix into smaller sections and ignore section where result cannot be there.
* Space Complexity: O(1), Time Complexity: O(log N*M)
*/
export function searchInSortedMatrix(matrix: number[][], target: number): Range {
	return searchHelper(matrix, [0, matrix.length - 1], [0, matrix[0].length - 1], target)
}

// Recursive Search Helper.
function searchHelper(matrix: number[][], rowRange: Range, colRange: Range, target: number): Range {
	
	const [rowBeg, rowEnd] = rowRange;
	const [colBeg, colEnd] = colRange;
	
	// Base condition to stop the loop.
	if (rowEnd < rowBeg || colEnd < colBeg) {
		return [-1, -1]
	}
	
	const pivot: Range = [
		Math.floor((rowRange[0] + rowRange[1])/2),
		Math.floor((colRange[0] + colRange[1])/2)
	];
	const [pivotRow, pivotCol] = pivot;
	
	const pivotElem = matrix[pivotRow][pivotCol]
	if (pivotElem === target) return pivot
	else if (pivotElem < target) {
		// Skip the 1st quarter and search in the rest.
		const secRes = searchHelper(matrix, [rowBeg, pivotRow], [pivotCol + 1, colEnd], target)
		if (secRes[0] !== -1) return secRes
		const thiRes = searchHelper(matrix, [pivotRow + 1, rowEnd], [pivotCol + 1, colEnd], target)
		if (thiRes[0] !== -1) return thiRes
		const fourRes = searchHelper(matrix, [pivotRow + 1, rowEnd], [colBeg, pivotCol], target)
		if (fourRes[0] !== -1) return fourRes
		
	} else {
		// Skip the 3rd quarter and search in the rest.
		const secRes = searchHelper(matrix, [rowBeg, pivotRow - 1], [pivotCol, colEnd], target)
		if (secRes[0] !== -1) return secRes
		const fourRes = searchHelper(matrix, [pivotRow + 1, rowEnd], [colBeg, pivotCol - 1], target)
		if (fourRes[0] !== -1) return fourRes
		const firRes = searchHelper(matrix, [rowBeg, pivotRow], [colBeg, pivotCol - 1], target)
		if (firRes[0] !== -1) return firRes
	}
	
	return [-1, -1]
}