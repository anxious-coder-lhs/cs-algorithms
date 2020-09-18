## Problem
The problem to solve is to identify the fibonnaci value of the number at hand. The fibonnaci series is defined as a series of numbers with the following 2 properties.

* First Element is 1
* Second Element is 1
* Every other Element is the sum of the 1st and the last element.

While the fibonnaci series sounds like a sequence of numbers made out from some weird rules, it has some astonishing use cases in the mathematics and real world problems.

## Soluion
In this section, I present 3 solutions for the problem. One of the solution is the most trivial recursive solution, the other is a solution based out of dynamic programming, the 3rd one is based on a bottoms up approach. As you weill see, the solutions greatly vary in terms of performance.

## Recursion
The recursion solution is based out on the simple fact that the series can be represented as the sum of the last 2 numbers of the series. The last 2 elements of the series can thus be executed by recursively calling the compute function.

As with any recursive implementation, a successful implementation requires a valid terminating condition for the result. A lack of a valid termination condition would not allow the algorithm to stop succesfully on completion. In other ways, it will never complete.

Since, the recursion is done from a number higher in the plane to the lower, the termination condition is set to be the elements at 1st and 2nd condition, which will always be 1.

<Figure>

In terms of complexity of the solution, a recursive implementation will is of O(2^n). The exponential complexity can be understood from the execution example as shown above. For evaluating the fibonnaci number at any level, the algorithm evaluates the value at the 2 sub-child level and so on. This results in an extremely slow execution.

## Dynamic Programming
Dyanmic Programming is a simple technique of solving an algorithmic problem by avoiding to re-execute the algorithm in situations where the results can be saved/memoized. The memoization technique allows us to avoid re-computing the elements again and again.

Looking at the example below, we can see how computations for some of the elements are repeated. The evaluation for element-2 is done 3 times, while for element-3 is done 2 times, and so on. With larger values of n, we will see that the complexity and re-computation increases.

In this solution, we use a storage(array) to memoize the results of the execution as it completes. This allows us to fetch the result of the execution from the array if there is a need to compute the result of an element again.

The implementation below passes an array with length equal to the number we are interested for evaluation. So, if we are intersted in comouting the fibonnaci value of 5, we create an array of 5. Next, with every recursion, we validate if the result was already computed and we can re-use the results from our last execution. The rest of the algorithms behaves as the same as a last one.

In terms of performance complexity of this algorithm, it is an O(n) which is substantially faster than the O(2^n) implementation we have seen above. Although we are using recursion which seems like an exponential recursion, every level is a constant time operation, this is because the computation is either 1) already computed, 2) terminating conditions or 3) sum of last 2 results.

## Bottoms Up Approach
The bottoms up approach is another quite intuitive way of evaluating the value without the help of recursion. The algorithm is also based on memoization, however in this time we only care about the last 2 numbers.

In this implementation, we keep a storage for the results of only last 2 executions and the current result. We use iteration to sequentially compute the value of the required element. At each step of iteration, we compute the result of the current element using the last 2 results. As the result is evaluated, we slide the window to the right, discarding the very 1st element.