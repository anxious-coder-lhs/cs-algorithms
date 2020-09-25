/**
* Min Max Pair Type
*/
type MinMaxPair = {
	min: number,
	max: number
}

/**
* MinMax Stack data structure. Used to structure the elements as stack, while also maintaining an order of the
* top min and max elements.
*/
export class MinMaxStack {
	
	elements: number[] = []
	minMaxOrder: MinMaxPair[] = [{
		min: Infinity,
		max: -Infinity
	}]
	
  peek() {
    return this.elements[this.elements.length - 1]
  }

  pop() {
		this.minMaxOrder.pop();
    return this.elements.pop();
  }

  push(number: number) {
		const latestMinMaxPair = this.minMaxOrder[this.minMaxOrder.length - 1];
		this.minMaxOrder.push({
			min: Math.min(latestMinMaxPair.min, number),
			max: Math.max(latestMinMaxPair.max, number)
		})
    this.elements.push(number);
  }

  getMin() {
		const latestMinMaxPair = this.minMaxOrder[this.minMaxOrder.length - 1];
		return latestMinMaxPair.min;
  }

  getMax() {
    const latestMinMaxPair = this.minMaxOrder[this.minMaxOrder.length - 1];
		return latestMinMaxPair.max;
  }
}
