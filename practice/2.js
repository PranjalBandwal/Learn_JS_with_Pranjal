// // Array Transformation:

//Q1 Write a function that takes an array of numbers and returns a new array where each element is squared, and only include elements greater than 10.
let newarray=[]
const squaredArray=(arr)=>{
for(let i=0;i<=arr.length;i++){
  const squareOfElement=arr[i]*arr[i]
  if(squareOfElement>10)newarray.push(squareOfElement)
}
return newarray
}
arr=[1,2,3,4,5,6,7,8,9,10]
console.log(squaredArray(arr));

// Two-Dimensional Arrays:

// Create a function that takes a two-dimensional array (matrix) as input and returns the sum of all the elements in the matrix.
// Array Sorting:

// Write a function that takes an array of objects with a 'name' property and sorts them alphabetically based on the names.
// Array Intersection:

// Implement a function that takes two arrays and returns a new array containing elements that are common to both arrays.
// Array Manipulation with Callback:

// Write a higher-order function that takes an array and a callback function. The callback should be applied to each element of the array, and the modified array should be returned.
