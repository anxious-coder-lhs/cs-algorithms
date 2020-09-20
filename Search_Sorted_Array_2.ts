type Range = [number, number];

/**
* Search a given number in a sorted matrix. Each row is sorted and each column is sorted.
* Since the numbers are sorted, we can use binary search to search through the numbers.
* Rather than choosing the centre for a binary search approach which is complicated and 
* needs to travse multiple quadrants, this approach uses a binary search from corner for a simpler implemnetation.
* Space Complexity: O(1), Time Complexity: O(N+M)
*/
export function searchInSortedMatrix(matrix: number[][], target: number): Range {
  let row = 0, col = matrix[0].length - 1
	while(row <= matrix.length - 1 && col >= 0) {
		const elem = matrix[row][col];
		if (elem === target) return [row, col]
		else if (elem > target) {
			col -= 1
		} else {
			row += 1
		}
	}
	
	return [-1, -1]
}
