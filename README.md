# array-comparer
Compare two arrays based on some function.
# Example
Here's a number array comparer :
```
const areArraysEqual = require("array-comparer");

function numberComparer(elementInFirstArray,symmetricElementInSecondArray){
  return elementInFirstArray === symmetricElementInSecondArray;
}  //Comparing function

areArraysEqual([2,3,5],[2,3,5],numberComparer); //true
areArraysEqual([2,3,5],[2,4,5],numberComparer); //false
```
You can write any comparing function and pass it to the ```areArraysEqual```
