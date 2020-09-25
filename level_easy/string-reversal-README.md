## Problem
String reversal in O(n) complexity

## Solution
Strings can essentially be treated as a character array. This is how most of the programming languages and runtimes implement it underneath. We essentially start with an empty array of characters for holding the reversed string characters.

We iterate over the character array of the source string. In Javascript like C and other languages, individual characters from the string can be extracted from the string in constant time operation. This is because the strings are internally stored as a character array.

With each iteration starting the last element to the 1st, we copy the individual character elements from the string at the given index to the target array.

Once the iteration is complete, we should have the entire reversed character array with us. We need to convert the character array to a Stirng. Depending on the language at use this could be a constant time operation or a O(n) operation. In either case, we would have an O(n) algorithm.

## Alternative/Complexity
The above implementation has a complexity of O(n) for the run-time and also O(n) for the space. However, we could have slightly better results in terms of effective space utilization if we can leverage the constant time string prepend operation. This is not available in all the languages, but some of the functional languages provide a prepend operation which is a constant time and does not depend on the lenght of the string.