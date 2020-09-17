/**
 * Given a 2D array of nxm, traverse all the elements of the 2D array in the spiral order. Return a 1D array.
 * Start with the box perimeter, traversing all the edges of the box as they appear.
 * Traversal is done in all the 4 directions of the perimeter.
 * We squeeze the perimeter boundaries. This is repeated till we are done with all sizes.
**/
export function spiralTraverse(array: number[][]) {
  let perimeter = {
		xLow: 0, yLow: 0, xHigh: array.length - 1, yHigh: array[0].length - 1
	}
  
	const result: number[] = []
	// Traversing recursively all the perimeter edges.
	while(isValidPerimeter(perimeter)) {
		let x, y
		for (x = perimeter.xLow, y = perimeter.yLow; y <= perimeter.yHigh; y++) result.push(array[x][y])
		for (x = perimeter.xLow + 1, y = perimeter.yHigh; x <= perimeter.xHigh; x++) result.push(array[x][y])
		for (x = perimeter.xHigh, y = perimeter.yHigh - 1; y >= perimeter.yLow; y--) {
			// Handling edge condition, for not counting the row twice, if there is only one row.
			if (perimeter.xLow === perimeter.xHigh) break; // Already done.
			result.push(array[x][y])
		}
		for (x = perimeter.xHigh - 1, y = perimeter.yLow; x >= perimeter.xLow + 1; x--) {
			// Handling edge condition, for not counting the col twice, if there is only one col.
			if (perimeter.yLow === perimeter.yHigh) break; // Already done.
			result.push(array[x][y])
		}
		
		perimeter = squeezePerimeter(perimeter)
	}
	
	return result;
}

function squeezePerimeter(perimeter: Perimeter): Perimeter {
	return {
		xLow: perimeter.xLow + 1,
		xHigh: perimeter.xHigh - 1,
		yLow: perimeter.yLow + 1,
		yHigh: perimeter.yHigh - 1
	}
}

function isValidPerimeter(perimeter: Perimeter) {
	return perimeter.xLow <= perimeter.xHigh && perimeter.yLow <= perimeter.yHigh
}

type Perimeter = {
	xLow: number
	yLow: number
	xHigh: number
	yHigh: number
}
